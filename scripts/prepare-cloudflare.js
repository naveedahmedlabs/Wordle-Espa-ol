import fs from "fs";
import path from "path";
import esbuild from "esbuild";

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
        console.log(`[prepare-cloudflare] Sanitized unsupported SQLite imports in: ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}

async function minifyFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  try {
    const beforeSize = fs.statSync(filePath).size;
    await esbuild.build({
      entryPoints: [filePath],
      outfile: filePath,
      allowOverwrite: true,
      minify: true,
      treeShaking: true,
      legalComments: "none",
      format: "esm",
      target: "es2022",
    });
    const afterSize = fs.statSync(filePath).size;
    console.log(`[prepare-cloudflare] Minified ${path.basename(filePath)}: ${(beforeSize / 1024 / 1024).toFixed(2)}MB -> ${(afterSize / 1024 / 1024).toFixed(2)}MB`);
  } catch (e) {
    console.warn(`[prepare-cloudflare] Minification notice for ${path.basename(filePath)}:`, e.message);
  }
}

async function run() {
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

      // Sanitize any unsupported native imports before Wrangler bundling
      sanitizeFiles(assetsDir);

      // Minify both worker.js and server function handler to drastically reduce bundle size
      await minifyFile(path.join(assetsDir, "worker.js"));
      await minifyFile(path.join(assetsDir, "server-functions", "default", "handler.mjs"));
      await minifyFile(path.join(assetsDir, "middleware", "handler.mjs"));
    } else {
      console.warn("[prepare-cloudflare] .open-next or .open-next/assets directory not found");
    }
  } catch (err) {
    console.error("[prepare-cloudflare] Error preparing Cloudflare Pages assets:", err);
    process.exit(1);
  }
}

run();
