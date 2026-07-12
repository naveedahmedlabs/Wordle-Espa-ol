import { getSEO, SEO_DATA, BASE_URL } from '../src/seo';
import config from '@payload-config';
import { getPayload } from 'payload';

export default async function sitemap() {
  const routes = Object.keys(SEO_DATA);

  const staticRoutes = routes.map((route) => {
    const seo = getSEO(route);
    return {
      url: seo.canonical,
      lastModified: seo.modifiedDate ? new Date(seo.modifiedDate) : new Date(),
      changeFrequency: seo.isDaily ? 'daily' : 'monthly',
      priority: route === '/' ? 1 : 0.8,
    };
  });

  let blogRoutes = [];
  try {
    const payload = await getPayload({ config });
    
    const result = await payload.find({
      collection: 'posts',
      limit: 1000,
      select: {
        slug: true,
        updatedAt: true,
        createdAt: true,
      },
    });

    blogRoutes = result.docs.map((post) => ({
      url: `${BASE_URL}/blogs/${post.slug}/`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
