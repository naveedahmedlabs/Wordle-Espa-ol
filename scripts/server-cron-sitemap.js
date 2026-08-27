#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';

const DOMAIN = 'https://lapalabradeldia.co';

// Calculate NYT / Wordle date (00:00 NYT / 04:05 UTC)
function getNYTDate() {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const parts = formatter.formatToParts(new Date());
  const y = parseInt(parts.find(p => p.type === 'year').value, 10);
  const m = parseInt(parts.find(p => p.type === 'month').value, 10);
  const d = parseInt(parts.find(p => p.type === 'day').value, 10);
  return { year: y, month: String(m).padStart(2, '0'), day: String(d).padStart(2, '0') };
}

const nyt = getNYTDate();
const today = `${nyt.year}-${nyt.month}-${nyt.day}T04:05:00.000Z`;
const STATIC_DATE = '2026-05-15T04:05:00.000Z';

const URLS = [
  ['/', today, '1.00', 'daily'],
  ['/wordle-today/', today, '0.80', 'daily'],
  ['/wordle-hints-today/', today, '0.80', 'daily'],
  ['/blogs/', today, '0.80', 'daily'],
  ['/privacy/', STATIC_DATE, '0.30', 'monthly'],
];

const rawTarget = process.env.SITEMAP_OUTPUT_PATH
  || path.join(os.homedir(), 'public_html', 'sitemap.xml');
const targetPath = rawTarget.startsWith('~')
  ? path.join(os.homedir(), rawTarget.slice(1).replace(/^[/\\]/, ''))
  : rawTarget;

async function buildXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const [url, lastmod, priority, changefreq] of URLS) {
    xml += `  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  }

  xml += `</urlset>`;
  return xml;
}

function log(level, msg) {
  console.log(`[${new Date().toISOString()}] ${level.toUpperCase()} ${msg}`);
}

async function main() {
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    log('error', `target directory does not exist: ${dir}`);
    return;
  }

  const xml = await buildXml();
  const tmpPath = `${targetPath}.tmp`;
  try {
    fs.writeFileSync(tmpPath, xml, { encoding: 'utf8', mode: 0o644 });
    fs.renameSync(tmpPath, targetPath);
  } catch (err) {
    log('error', `failed to write ${targetPath}: ${err.message}`);
    try { fs.unlinkSync(tmpPath); } catch {}
    return;
  }

  log('info', `sitemap written: ${targetPath} (${URLS.length} static urls, ${xml.length} bytes)`);
}

if (process.argv.includes('--run-once')) {
  main().then(() => process.exit(0));
} else {
  import('node-cron').then((cron) => {
    log('info', 'Starting sitemap cron daemon (runs daily at midnight)...');
    main();
    cron.schedule('0 0 * * *', () => {
      log('info', 'Running scheduled daily sitemap update...');
      main();
    });
  }).catch((err) => {
    log('error', 'node-cron package not found. Running once...');
    main().then(() => process.exit(0));
  });
}
