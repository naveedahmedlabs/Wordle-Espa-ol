import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const targetFiles = [
  path.resolve(dirname, '../node_modules/payload/dist/bin/loadEnv.js'),
  path.resolve(dirname, '../node_modules/payload/dist/bin/loadEnv.mjs'),
  path.resolve(dirname, '../node_modules/payload/dist/bin/loadEnv.cjs')
];

for (const target of targetFiles) {
  if (fs.existsSync(target)) {
    const shimContent = `/**
 * OpenNext Cloudflare Pages Compatibility Patch
 * Replaces filesystem-based @next/env loading with a no-op function.
 */
export function loadEnv(path) {}
export default loadEnv;
`;
    try {
      fs.writeFileSync(target, shimContent, 'utf8');
      console.log(`[patch-payload] Successfully patched: ${target}`);
    } catch (e) {
      console.warn(`[patch-payload] Could not patch ${target}:`, e.message);
    }
  }
}
