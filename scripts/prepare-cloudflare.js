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
      // Exclude heavy dev and cache directories from function bundle
      if (entry === "node_modules" || entry === "cache" || entry === "dynamodb-provider" || entry === ".next") {
        continue;
      }
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function sanitizeFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      sanitizeFiles(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith(".js") || entry.name.endsWith(".mjs") || entry.name.endsWith(".cjs"))) {
      let content = fs.readFileSync(fullPath, "utf8");
      let modified = false;

      // Replace node:sqlite require calls with empty object
      if (content.includes("node:sqlite")) {
        content = content.replace(/require\((["'])node:sqlite\1\)/g, "({})");
        content = content.replace(/import\((["'])node:sqlite\1\)/g, "Promise.resolve({})");
        modified = true;
      }

      // Replace better-sqlite3 require calls
      if (content.includes("better-sqlite3")) {
        content = content.replace(/require\((["'])better-sqlite3\1\)/g, "({})");
        content = content.replace(/import\((["'])better-sqlite3\1\)/g, "Promise.resolve({})");
        modified = true;
      }

      // Replace sqlite3 require calls
      if (content.includes("sqlite3")) {
        content = content.replace(/require\((["'])sqlite3\1\)/g, "({})");
        content = content.replace(/import\((["'])sqlite3\1\)/g, "Promise.resolve({})");
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, "utf8");
        console.log(`[prepare-cloudflare] Sanitized unsupported imports in: ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}

function run() {
  try {
    if (fs.existsSync(openNextDir) && fs.existsSync(assetsDir)) {
      // Only copy the essential directories needed by worker.js
      const targetDirs = [".build", "cloudflare", "middleware", "server-functions"];
      for (const dir of targetDirs) {
        const srcPath = path.join(openNextDir, dir);
        const destPath = path.join(assetsDir, dir);
        if (fs.existsSync(srcPath)) {
          copyRecursive(srcPath, destPath);
          console.log(`[prepare-cloudflare] Copied .open-next/${dir} -> .open-next/assets/${dir}`);
        }
      }

      // Copy worker.js
      const workerSrc = path.join(openNextDir, "worker.js");
      const workerDest = path.join(assetsDir, "worker.js");
      if (fs.existsSync(workerSrc)) {
        fs.copyFileSync(workerSrc, workerDest);
        console.log("[prepare-cloudflare] Copied .open-next/worker.js -> .open-next/assets/worker.js");
      }

      // Create _worker.js that re-exports from worker.js
      const workerWrapper = `export * from "./worker.js";\nexport { default } from "./worker.js";\n`;
      fs.writeFileSync(path.join(assetsDir, "_worker.js"), workerWrapper, "utf8");
      console.log("[prepare-cloudflare] Created .open-next/assets/_worker.js");

      // Sanitize files
      sanitizeFiles(assetsDir);
      console.log("[prepare-cloudflare] Assets and Worker successfully prepared for Cloudflare Pages.");
    } else {
      console.warn("[prepare-cloudflare] .open-next or .open-next/assets directory not found");
    }
  } catch (err) {
    console.error("[prepare-cloudflare] Error preparing Cloudflare Pages assets:", err);
    process.exit(1);
  }
}

run();
