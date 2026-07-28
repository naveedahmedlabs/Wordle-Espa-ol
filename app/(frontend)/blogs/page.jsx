import BlogsPage from '../../../src/views/BlogsPage';
import { Suspense } from 'react';
import Schema from '../Schema';
import { fetchSanityPosts } from '../../../src/lib/sanity';
import config from '@payload-config';
import { getPayload } from 'payload';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Wordle Unlimited Blog - Latest News & Updates',
  description: 'Read the latest updates, tips, and articles about Wordle Unlimited.',
  alternates: {
    canonical: 'https://wordlegame.co.uk/blogs/',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'last-modified': '2026-05-15T00:05:00-04:00',
    'article:modified_time': '2026-05-15T00:05:00-04:00',
  },
  openGraph: {
    title: 'Wordle Unlimited Blog - Latest News & Updates',
    description: 'Read the latest updates, tips, and articles about Wordle Unlimited.',
    url: 'https://wordlegame.co.uk/blogs/',
    siteName: 'Wordle UK',
    type: 'website',
    modifiedTime: '2026-05-15T00:05:00-04:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wordle Unlimited Blog - Latest News & Updates',
    description: 'Read the latest updates, tips, and articles about Wordle Unlimited.',
  },
};

export default async function Page() {
  const seo = {
    title: metadata.title,
    description: metadata.description,
    canonical: metadata.alternates.canonical,
  };

  let initialPosts = [];
  let totalPages = 1;

  try {
    const sanityData = await fetchSanityPosts(0, 10);
    initialPosts = sanityData.posts;
    totalPages = sanityData.totalPages;
  } catch (err) {
    console.error('Error fetching Sanity posts:', err);
    try {
      const payload = await getPayload({ config });
      const result = await payload.find({
        collection: 'posts',
        limit: 10,
        page: 1,
        sort: '-createdAt',
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
        <BlogsPage initialPosts={initialPosts} totalPages={totalPages} currentPage={1} />
      </Suspense>
    </>
  );
}
