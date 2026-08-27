import { getSEO, SEO_DATA } from '../src/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  const routes = Object.keys(SEO_DATA);

  return routes.map((route) => {
    const seo = getSEO(route);
    let priority = 0.8;
    if (route === '/') {
      priority = 1.0;
    } else if (seo.group === 'privacy') {
      priority = 0.3;
    }
    return {
      url: seo.canonical,
      lastModified: seo.modifiedDate ? new Date(seo.modifiedDate) : new Date(),
      changeFrequency: seo.isDaily ? 'daily' : 'monthly',
      priority,
    };
  });
}
