'use client';

import BlogsPage from '../../../../../src/views/BlogsPage';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <BlogsPage />
    </Suspense>
  );
}
