import SingleBlogPage from '../../../../src/views/SingleBlogPage';
import Schema from '../../Schema';
import config from '@payload-config';
import { getPayload } from 'payload';
import { notFound } from 'next/navigation';

export const revalidate = 60;


export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
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

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const title = post.metaTitle || `${post.title} - Wordle Unlimited Blog`;
  // For Lexical content, excerpt might not exist, using metaDescription
  const description = post.metaDescription || ''; 
  const url = `https://wordlegame.co.uk/blogs/${slug}/`;

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
      authors: ['Wordle Unlimited'],
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

  if (!post) {
    notFound();
  }

  // Fetch recent related posts (omitting current post)
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

  const relatedPosts = relatedResult.docs;

  const seo = {
    title: post.metaTitle || post.title || 'Wordle Unlimited Blog',
    description: post.metaDescription || '',
    canonical: `https://wordlegame.co.uk/blogs/${slug}/`,
    modifiedDate: post.updatedAt || post.createdAt,
  };

  return (
    <>
      <Schema seo={seo} />
      <SingleBlogPage post={post} relatedPosts={relatedPosts} />
    </>
  );
}
