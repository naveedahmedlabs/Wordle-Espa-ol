import BlogsPage from '../../../../../src/views/BlogsPage';
import { Suspense } from 'react';
import Schema from '../../../Schema';
import { fetchSanityPosts } from '../../../../../src/lib/sanity';
import config from '@payload-config';
import { getPayload } from 'payload';

export const dynamic = 'force-dynamic';

export default async function Page({ params }) {
  const resolvedParams = await params;
  const page = parseInt(resolvedParams.page || '1', 10);
  
  const seo = {
    title: `Blog de Wordle en Español - Página ${page}`,
    description: `Descubre los mejores consejos, estrategias y guías sobre Wordle y la Palabra del Día. Página ${page}.`,
    canonical: `https://lapalabradeldia.co/blogs/page/${page}/`,
  };

  let initialPosts = [];
  let totalPages = 1;

  try {
    const start = (page - 1) * 10;
    const sanityData = await fetchSanityPosts(start, 10);
    initialPosts = sanityData.posts;
    totalPages = sanityData.totalPages;
  } catch (err) {
    console.error('Error fetching Sanity posts for page:', page, err);
    try {
      const payload = await getPayload({ config });
      const result = await payload.find({
        collection: 'posts',
        limit: 10,
        page: page,
        sort: '-createdAt'
      });
      initialPosts = result.docs;
      totalPages = result.totalPages;
    } catch (e) {
      console.error('Fallback Payload error:', e);
    }
  }

  return (
    <>
      <Schema seo={seo} />
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogsPage initialPosts={initialPosts} totalPages={totalPages} currentPage={page} />
      </Suspense>
    </>
  );
}
