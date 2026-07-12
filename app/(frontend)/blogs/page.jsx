import BlogsPage from '../../../src/views/BlogsPage';
import { Suspense } from 'react';

export const metadata = {
  title: 'Wordle Unlimited Blog - Latest News & Updates',
  description: 'Read the latest updates, tips, and articles about Wordle Unlimited.',
  alternates: {
    canonical: 'https://wordlegame.co.uk/blogs/',
  },
  openGraph: {
    title: 'Wordle Unlimited Blog - Latest News & Updates',
    description: 'Read the latest updates, tips, and articles about Wordle Unlimited.',
    url: 'https://wordlegame.co.uk/blogs/',
    siteName: 'Wordle UK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wordle Unlimited Blog - Latest News & Updates',
    description: 'Read the latest updates, tips, and articles about Wordle Unlimited.',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <BlogsPage />
    </Suspense>
  );
}
