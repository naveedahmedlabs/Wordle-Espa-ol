#!/usr/bin/env node
// Server-side cron version of update-sitemap.js.
//
// Intended to be uploaded to Hostinger (or any cPanel/SSH host) OUTSIDE the
// public web root, e.g. ~/cron/server-cron-sitemap.js, and triggered by a
// daily cron job. Unlike the build-time scripts/update-sitemap.js — which
// writes to the project's public/ folder — this version writes the sitemap
// straight into the live document root so the <lastmod> timestamps refresh
// without a full redeploy.
//
// Usage on the server:
//   node ~/cron/server-cron-sitemap.js
//
// Override the output path for add-on domains or non-standard web roots:
//   SITEMAP_OUTPUT_PATH=~/domains/example.com/public_html/sitemap.xml \
//     node ~/cron/server-cron-sitemap.js

import fs from 'fs';
import os from 'os';
import path from 'path';

const DOMAIN = 'https://wordlegame.co.uk';

// Pages whose content actually changes day-to-day get today's timestamp; the
// rest (home, locale roots, privacy) carry a static date that only bumps when
// the page's *content* changes — Google ignores hourly churn on stable URLs.
const STATIC_DATE = '2026-05-15T00:00:00+00:00';
const now = new Date();
const today = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}T00:00:00+00:00`;

const URLS = [
  ['/', today, '1.00'],

  ['/wordle-today/', today, '1.00'],
  ['/wordle-hints-today/', today, '1.00'],

  ['/uk/', STATIC_DATE, '1.00'],
  ['/es/', STATIC_DATE, '1.00'],

  ['/uk/wordle-today/', today, '1.00'],
  ['/uk/wordle-hints-today/', today, '1.00'],

  ['/es/palabra-del-dia/', today, '1.00'],
  ['/es/pistas-de-hoy/', today, '1.00'],

  ['/privacy/', STATIC_DATE, '0.30'],
  ['/uk/privacy/', STATIC_DATE, '0.30'],
  ['/es/privacidad/', STATIC_DATE, '0.30'],
];

// Resolve where to write: SITEMAP_OUTPUT_PATH wins, then ~/public_html/sitemap.xml.
const rawTarget = process.env.SITEMAP_OUTPUT_PATH
  || path.join(os.homedir(), 'public_html', 'sitemap.xml');
// Expand a leading ~ in case the env var was set without shell expansion.
const targetPath = rawTarget.startsWith('~')
  ? path.join(os.homedir(), rawTarget.slice(1).replace(/^[/\\]/, ''))
  : rawTarget;

async function buildXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const [url, lastmod, priority] of URLS) {
    xml += `
  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
  }

  // Fetch blogs dynamically
  try {
    const query = encodeURIComponent('*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }');
    const res = await fetch(`https://v4hsbbd1.api.sanity.io/v2024-01-01/data/query/production?query=${query}`);
    const data = await res.json();
    
    if (data && data.result) {
      xml += `
  <url>
    <loc>${DOMAIN}/blogs/</loc>
    <lastmod>${today}</lastmod>
    <priority>0.80</priority>
  </url>`;

      const totalPages = Math.ceil(data.result.length / 10);
      for (let i = 2; i <= totalPages; i++) {
        xml += `
  <url>
    <loc>${DOMAIN}/blogs/page/${i}/</loc>
    <lastmod>${today}</lastmod>
    <priority>0.60</priority>
  </url>`;
      }

      data.result.forEach(post => {
        const lastmod = post._updatedAt || today;
        xml += `
  <url>
    <loc>${DOMAIN}/blogs/${post.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.70</priority>
  </url>`;
      });
    }
  } catch (error) {
    log('error', `Failed to fetch Sanity blogs: ${error.message}`);
  }

  xml += `\n</urlset>`;
  return xml;
}

function log(level, msg) {
  // ISO timestamp + level + message — cron log lines stay greppable.
  console.log(`[${new Date().toISOString()}] ${level.toUpperCase()} ${msg}`);
}

async function main() {
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    log('error', `target directory does not exist: ${dir}`);
    log('error', `check SITEMAP_OUTPUT_PATH or the cron user's homedir`);
    return;
  }

  const xml = await buildXml();
  const tmpPath = `${targetPath}.tmp`;
  try {
    fs.writeFileSync(tmpPath, xml, { encoding: 'utf8', mode: 0o644 });
    fs.renameSync(tmpPath, targetPath);
  } catch (err) {
    log('error', `failed to write ${targetPath}: ${err.message}`);
    try { fs.unlinkSync(tmpPath); } catch { /* tmp may not exist */ }
    return;
  }

  log('info', `sitemap written: ${targetPath} (${URLS.length} static urls + blogs, ${xml.length} bytes)`);
}

// Option A: Run once immediately if manually invoked
if (process.argv.includes('--run-once')) {
  main().then(() => process.exit(0));
} else {
  // Option B: Run as a background daemon using node-cron (Hostinger Node.js Plan)
  import('node-cron').then((cron) => {
    log('info', 'Starting sitemap cron daemon (runs daily at midnight)...');
    // Run immediately on startup
    main();
    // Schedule to run at 00:00 every day
    cron.schedule('0 0 * * *', () => {
      log('info', 'Running scheduled daily sitemap update...');
      main();
    });
  }).catch((err) => {
    log('error', 'node-cron package not found. Run "npm install node-cron" or run this script with --run-once');
    main().then(() => process.exit(0));
  });
}
