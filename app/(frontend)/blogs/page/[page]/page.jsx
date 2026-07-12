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
    title: `Wordle Unlimited Blog - Page ${page}`,
    description: `Read the latest updates, tips, and articles about Wordle Unlimited. Page ${page}.`,
    canonical: `https://wordlegame.co.uk/blogs/page/${page}/`,
  };

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'posts',
    limit: 10,
    page: page,
    sort: '-createdAt'
  });

  return (
    <>
      <Schema seo={seo} />
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogsPage initialPosts={result.docs} totalPages={result.totalPages} currentPage={page} />
      </Suspense>
    </>
  );
}
