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

      // 3. Create _worker.js re-exporting directly from worker.js for static bundling
      const workerContent = `export * from "./worker.js";\nexport { default } from "./worker.js";\n`;
      fs.writeFileSync(path.join(assetsDir, "_worker.js"), workerContent, "utf8");
      console.log("[prepare-cloudflare] Created .open-next/assets/_worker.js");
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
