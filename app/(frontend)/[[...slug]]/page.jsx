import App from '../../../src/App';
import { Suspense } from 'react';
import { getSEO } from '../../../src/seo';
import Schema from '../Schema';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const pathname = '/' + slug.join('/');
  const seo = getSEO(pathname);
  
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
      languages: {
        'en-gb': seo.canonical,
        'x-default': seo.canonical,
      },
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    other: {
      'last-modified': seo.modifiedDate,
      'article:modified_time': seo.modifiedDate,
      'geo.country': 'GB',
      'geo.placename': 'United Kingdom',
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: 'Wordle UK',
      images: [
        {
          url: 'https://wordlegame.co.uk/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: seo.isoLang,
      type: 'website',
      modifiedTime: seo.modifiedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['https://wordlegame.co.uk/og-image.png'],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const pathname = '/' + slug.join('/');
  const seo = getSEO(pathname);

  return (
    <>
      <Schema seo={seo} />
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </>
  );
}
