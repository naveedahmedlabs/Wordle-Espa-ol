import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const openNextDir = path.join(rootDir, ".open-next");
const assetsDir = path.join(openNextDir, "assets");

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  if (fs.existsSync(openNextDir) && fs.existsSync(assetsDir)) {
    const entries = fs.readdirSync(openNextDir);
    for (const entry of entries) {
      // Don't copy assets into itself
      if (entry === "assets") continue;
      const srcPath = path.join(openNextDir, entry);
      const destPath = path.join(assetsDir, entry);
      copyRecursive(srcPath, destPath);
      console.log(`[prepare-cloudflare] Copied .open-next/${entry} -> .open-next/assets/${entry}`);
    }

    // Create _worker.js that re-exports everything from worker.js
    const workerWrapper = `export * from "./worker.js";\nexport { default } from "./worker.js";\n`;
    fs.writeFileSync(path.join(assetsDir, "_worker.js"), workerWrapper, "utf8");
    console.log("[prepare-cloudflare] Successfully created .open-next/assets/_worker.js");
  } else {
    console.warn("[prepare-cloudflare] .open-next or .open-next/assets directory not found");
  }
} catch (err) {
  console.error("[prepare-cloudflare] Error preparing Cloudflare Pages assets:", err);
  process.exit(1);
}
