import { getSEO, SEO_DATA } from '../src/seo';

export default function sitemap() {
  const routes = Object.keys(SEO_DATA);

  return routes.map((route) => {
    const seo = getSEO(route);
    return {
      url: seo.canonical,
      lastModified: seo.modifiedDate ? new Date(seo.modifiedDate) : new Date(),
      changeFrequency: seo.isDaily ? 'daily' : 'monthly',
      priority: route === '/' ? 1 : 0.8,
    };
  });
}
