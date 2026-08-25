import SingleBlogPage from '../../../../src/views/SingleBlogPage';
import Schema from '../../Schema';
import { fetchSanityPostBySlug } from '../../../../src/lib/sanity';
import config from '@payload-config';
import { getPayload } from 'payload';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function getPostData(slug) {
  try {
    const sanityData = await fetchSanityPostBySlug(slug);
    if (sanityData && sanityData.post) {
      return sanityData;
    }
  } catch (err) {
    console.error('Error fetching post from Sanity:', err);
  }

  // Fallback to Payload
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    });

    const post = result.docs[0];
    if (!post) return null;

    const relatedResult = await payload.find({
      collection: 'posts',
      where: {
        id: {
          not_equals: post.id,
        },
      },
      sort: '-createdAt',
      limit: 2,
    });

    return {
      post,
      relatedPosts: relatedResult.docs,
    };
  } catch (err) {
    console.error('Error fetching post from Payload:', err);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = await getPostData(slug);

  if (!data || !data.post) {
    return {
      title: 'Post Not Found',
    };
  }

  const post = data.post;
  const title = post.metaTitle || `${post.title} - Blog de Wordle en Español`;
  const description = post.metaDescription || '';
  const url = `https://lapalabradeldia.co/blogs/${slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'last-modified': post.updatedAt || post.createdAt,
      'article:modified_time': post.updatedAt || post.createdAt,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
      authors: ['La Palabra del Día'],
      images: post.metaImage?.url
        ? [
            {
              url: post.metaImage.url,
              alt: post.metaImage.alt || post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.metaImage?.url ? [post.metaImage.url] : [],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = await getPostData(slug);

  if (!data || !data.post) {
    notFound();
  }

  const { post, relatedPosts } = data;

  const seo = {
    title: post.metaTitle || post.title || 'Blog de Wordle en Español',
    description: post.metaDescription || '',
    canonical: `https://lapalabradeldia.co/blogs/${slug}/`,
    modifiedDate: post.updatedAt || post.createdAt,
  };

  return (
    <>
      <Schema seo={seo} />
      <SingleBlogPage post={post} relatedPosts={relatedPosts} />
    </>
  );
}
