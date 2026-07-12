'use client';

import BlogsPage from '../../../../../src/views/BlogsPage';
import { Suspense } from 'react';
import Schema from '../../../Schema';

export default function Page({ params }) {
  const seo = {
    title: `Wordle Unlimited Blog - Page`,
    description: 'Read the latest updates, tips, and articles about Wordle Unlimited.',
    canonical: `https://wordlegame.co.uk/blogs/`,
  };

  return (
    <>
      <Schema seo={seo} />
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogsPage />
      </Suspense>
    </>
  );
}
