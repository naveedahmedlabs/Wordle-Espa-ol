import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const workerSrc = path.join(rootDir, ".open-next", "worker.js");
const assetsDir = path.join(rootDir, ".open-next", "assets");
const workerDest = path.join(assetsDir, "_worker.js");

try {
  if (fs.existsSync(workerSrc) && fs.existsSync(assetsDir)) {
    fs.copyFileSync(workerSrc, workerDest);
    console.log("[prepare-cloudflare] Copied .open-next/worker.js -> .open-next/assets/_worker.js");
  } else {
    console.warn("[prepare-cloudflare] .open-next/worker.js or .open-next/assets not found");
  }
} catch (err) {
  console.error("[prepare-cloudflare] Error preparing Cloudflare Pages assets:", err);
}
