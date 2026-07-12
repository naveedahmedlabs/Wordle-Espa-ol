'use client';

import BlogHeader from '../../src/components/BlogHeader';
import Footer from '../../src/components/Footer';
import { HelmetProvider } from 'react-helmet-async';

export default function BlogsLayout({ children }) {
  return (
    <HelmetProvider>
      <BlogHeader />
      <main style={{ flex: 1, marginTop: '80px' }}>
        {children}
      </main>
      <Footer language="en" />
    </HelmetProvider>
  );
}
