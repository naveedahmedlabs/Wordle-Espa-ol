// Regenerates public/sitemap.xml with fresh <lastmod> timestamps for the
// daily/dynamic routes (wordle-today, hints, etc.) and static dates for
// pages that don't actually change day-to-day (home, locale roots, privacy).
//
// Run via `npm run sitemap` or as part of the build (`npm run build` calls
// this before vite so the published sitemap matches the published dist/).

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domain = 'https://wordlegame.co.uk';

const now = new Date();
const today = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}T00:00:00+00:00`;
const staticDate = '2026-05-15T00:00:00+00:00';

async function generateSitemap() {
  const urls = [
    ['/', today, '1.00'],
    ['/wordle-today/', today, '1.00'],
    ['/wordle-hints-today/', today, '1.00'],
    ['/uk/', staticDate, '1.00'],
    ['/es/', staticDate, '1.00'],
    ['/uk/wordle-today/', today, '1.00'],
    ['/uk/wordle-hints-today/', today, '1.00'],
    ['/es/palabra-del-dia/', today, '1.00'],
    ['/es/pistas-de-hoy/', today, '1.00'],
    ['/blogs/', today, '0.80'],
    ['/privacy/', staticDate, '0.30'],
    ['/uk/privacy/', staticDate, '0.30'],
    ['/es/privacidad/', staticDate, '0.30'],
  ];

  try {
    const query = encodeURIComponent('*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }');
    const res = await fetch(`https://v4hsbbd1.api.sanity.io/v2024-01-01/data/query/production?query=${query}`);
    const data = await res.json();
    
    if (data && data.result) {
      data.result.forEach(post => {
        const pubDate = post.publishedAt || today;
        urls.push([`/blogs/${post.slug}/`, pubDate, '0.70']);
      });
    }
  } catch (error) {
    console.error('Failed to fetch Sanity blogs for sitemap:', error);
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach(([url, lastmod, priority]) => {
    xml += `
  <url>
    <loc>${domain}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
  });

  xml += `\n</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log('✅ sitemap.xml updated successfully');
}

generateSitemap();
