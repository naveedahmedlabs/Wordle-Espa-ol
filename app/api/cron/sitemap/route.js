import { revalidatePath } from 'next/cache';
import fs from 'fs';
import path from 'path';
import sitemapHandler from '../../../sitemap';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    // Revalidate all pages and layout in Next.js cache
    revalidatePath('/', 'layout');
    revalidatePath('/sitemap.xml');
    revalidatePath('/');
    revalidatePath('/wordle-today/');
    revalidatePath('/wordle-hints-today/');
    revalidatePath('/blogs');

    let staticFileUpdated = false;

    // Generate fresh sitemap entries and write to public/sitemap.xml if directory exists
    try {
      const sitemapEntries = await sitemapHandler();
      let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
      sitemapEntries.forEach((entry) => {
        xml += `  <url>\n    <loc>${entry.url}</loc>\n    <lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${typeof entry.priority === 'number' ? entry.priority.toFixed(2) : entry.priority}</priority>\n  </url>\n`;
      });
      xml += `</urlset>`;

      const publicDirPath = path.join(process.cwd(), 'public');
      if (fs.existsSync(publicDirPath)) {
        fs.writeFileSync(path.join(publicDirPath, 'sitemap.xml'), xml, 'utf8');
        staticFileUpdated = true;
      }
    } catch (fsErr) {
      console.warn('Note: Could not write static public/sitemap.xml file directly:', fsErr.message);
    }

    return Response.json({
      success: true,
      timestamp: new Date().toISOString(),
      staticFileUpdated,
      message: 'Sitemap and SEO meta revalidated successfully',
    });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
