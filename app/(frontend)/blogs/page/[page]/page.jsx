import BlogsPage from '../../../../../src/views/BlogsPage';
import { Suspense } from 'react';
import Schema from '../../../Schema';
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
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: 'posts',
      limit: 10,
      page: page,
      sort: '-createdAt'
    });
    initialPosts = result.docs || [];
    totalPages = result.totalPages || 1;
  } catch (e) {
    console.error('Payload fetch error on blogs pagination page:', page, e);
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
