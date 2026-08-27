import { getSEO, SEO_DATA, BASE_URL } from '../src/seo';
import config from '@payload-config';
import { getPayload } from 'payload';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function sitemap() {
  const routes = Object.keys(SEO_DATA);

  const staticRoutes = routes.map((route) => {
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

    if (result.docs && result.docs.length > 0) {
      const todayNYT = getSEO('/').modifiedDate;
      const blogIndex = {
        url: `${BASE_URL}/blogs/`,
        lastModified: new Date(todayNYT),
        changeFrequency: 'daily',
        priority: 0.8,
      };

      const totalPages = Math.ceil(result.docs.length / 10);
      const paginationRoutes = [];
      for (let i = 2; i <= totalPages; i++) {
        paginationRoutes.push({
          url: `${BASE_URL}/blogs/page/${i}/`,
          lastModified: new Date(todayNYT),
          changeFrequency: 'daily',
          priority: 0.6,
        });
      }

      const postRoutes = result.docs.map((post) => ({
        url: `${BASE_URL}/blogs/${post.slug}/`,
        lastModified: new Date(post.updatedAt || post.createdAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));

      blogRoutes = [blogIndex, ...paginationRoutes, ...postRoutes];
    }
  } catch (payloadErr) {
    console.error('Payload sitemap generation error:', payloadErr);
  }

  return [...staticRoutes, ...blogRoutes];
}
