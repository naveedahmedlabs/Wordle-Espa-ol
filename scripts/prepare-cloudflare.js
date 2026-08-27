import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const openNextDir = path.join(rootDir, ".open-next");
const assetsDir = path.join(openNextDir, "assets");

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      if (entry === "node_modules" || entry === "cache" || entry === "dynamodb-provider") {
        continue;
      }
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function run() {
  try {
    if (fs.existsSync(openNextDir) && fs.existsSync(assetsDir)) {
      // 1. Copy required OpenNext folders into assets
      const targetDirs = [".build", "cloudflare", "middleware", "server-functions"];
      for (const dir of targetDirs) {
        const srcPath = path.join(openNextDir, dir);
        const destPath = path.join(assetsDir, dir);
        if (fs.existsSync(srcPath)) {
          copyRecursive(srcPath, destPath);
          console.log(`[prepare-cloudflare] Copied .open-next/${dir} -> .open-next/assets/${dir}`);
        }
      }

      // 2. Copy worker.js
      const workerSrc = path.join(openNextDir, "worker.js");
      const workerDest = path.join(assetsDir, "worker.js");
      if (fs.existsSync(workerSrc)) {
        fs.copyFileSync(workerSrc, workerDest);
        console.log("[prepare-cloudflare] Copied .open-next/worker.js -> .open-next/assets/worker.js");
      }

      // 3. Create robust _worker.js that serves static assets first and falls back gracefully
      const workerContent = `
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Serve static asset from Cloudflare Edge CDN if available
    try {
      if (env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status !== 404) {
          return assetResponse;
        }
      }
    } catch (e) {
      console.warn("Asset fetch error:", e);
    }

    // 2. Fallback to OpenNext server worker
    try {
      const { default: openNextWorker } = await import("./worker.js");
      if (openNextWorker && typeof openNextWorker.fetch === "function") {
        const res = await openNextWorker.fetch(request, env, ctx);
        if (res && res.status !== 500) {
          return res;
        }
      }
    } catch (workerErr) {
      console.error("OpenNext runtime error:", workerErr);
    }

    // 3. SPA Fallback: serve root index.html from static assets
    if (env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
      const fallbackReq = new Request(new URL("/", request.url), request);
      return await env.ASSETS.fetch(fallbackReq);
    }

    return new Response("Not Found", { status: 404 });
  }
};
`;
      fs.writeFileSync(path.join(assetsDir, "_worker.js"), workerContent.trim() + "\n", "utf8");
      console.log("[prepare-cloudflare] Created resilient .open-next/assets/_worker.js");
      console.log("[prepare-cloudflare] Cloudflare Pages preparation complete.");
    } else {
      console.warn("[prepare-cloudflare] .open-next or .open-next/assets directory not found");
    }
  } catch (err) {
    console.error("[prepare-cloudflare] Error preparing Cloudflare Pages assets:", err);
    process.exit(1);
  }
}

run();
