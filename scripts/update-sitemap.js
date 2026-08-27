import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getNYTDate } from '../src/dateUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domain = 'https://lapalabradeldia.co';

const nytDate = getNYTDate();
const year = nytDate.getFullYear();
const month = String(nytDate.getMonth() + 1).padStart(2, '0');
const day = String(nytDate.getDate()).padStart(2, '0');
const today = `${year}-${month}-${day}T04:05:00.000Z`;
const staticDate = '2026-05-15T04:05:00.000Z';

async function generateSitemap() {
  const urls = [
    ['/', today, '1.00', 'daily'],
    ['/wordle-today/', today, '1.00', 'daily'],
    ['/wordle-hints-today/', today, '1.00', 'daily'],
    ['/blogs/', today, '0.80', 'daily'],
    ['/privacy/', staticDate, '0.30', 'monthly'],
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach(([url, lastmod, priority, changefreq]) => {
    xml += `  <url>
    <loc>${domain}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += `</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log('✅ sitemap.xml updated successfully');
}

generateSitemap();
