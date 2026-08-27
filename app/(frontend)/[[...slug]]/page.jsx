import App from '../../../src/App';
import { getSEO, SEO_DATA } from '../../../src/seo';
import Schema from '../Schema';

export function generateStaticParams() {
  const routes = Object.keys(SEO_DATA);
  return routes.map((route) => {
    const cleanRoute = route.replace(/^\/|\/$/g, '');
    return {
      slug: cleanRoute ? cleanRoute.split('/') : [],
    };
  });
}

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
        'es': seo.canonical,
        'es-ES': seo.canonical,
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
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: 'La Palabra del Día',
      locale: 'es_ES',
      images: [
        {
          url: 'https://lapalabradeldia.co/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
      modifiedTime: seo.modifiedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['https://lapalabradeldia.co/og-image.png'],
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
      <App initialPathname={pathname} />
    </>
  );
}
