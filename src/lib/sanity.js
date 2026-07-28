import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v4hsbbd1',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  perspective: 'published',
});

const builder = createImageUrlBuilder(sanityClient);

export function urlForSanityImage(source) {
  if (!source) return null;
  if (typeof source === 'string') {
    if (source.startsWith('http://') || source.startsWith('https://') || source.startsWith('/')) {
      return { url: () => source };
    }
    if (source.startsWith('image-')) {
      return builder.image({ asset: { _ref: source } });
    }
  }
  if (source.url && typeof source.url === 'string') {
    return { url: () => source.url };
  }
  if (source.asset) {
    if (typeof source.asset === 'string') {
      return builder.image({ asset: { _ref: source.asset } });
    }
    if (source.asset.url) {
      return { url: () => source.asset.url };
    }
    if (source.asset._ref || source.asset._id) {
      return builder.image(source);
    }
  }
  if (source._ref) {
    return builder.image({ asset: { _ref: source._ref } });
  }
  try {
    return builder.image(source);
  } catch (e) {
    return null;
  }
}

export async function fetchSanityPosts(start = 0, limit = 10) {
  const end = start + limit;
  const [total, posts] = await Promise.all([
    sanityClient.fetch(`count(*[_type == "post" && defined(slug.current)])`),
    sanityClient.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[$start...$end]{
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        _createdAt,
        _updatedAt,
        featuredImage,
        author,
        category,
        metaTitle,
        metaDescription
      }`,
      { start, end }
    ),
  ]);

  const formattedPosts = posts.map((post) => {
    const imageUrl = post.featuredImage ? urlForSanityImage(post.featuredImage)?.url() : null;
    return {
      id: post._id,
      title: post.title,
      slug: post.slug.current,
      metaDescription: post.metaDescription || post.excerpt || '',
      metaTitle: post.metaTitle || post.title,
      createdAt: post.publishedAt || post._createdAt,
      updatedAt: post._updatedAt || post.publishedAt || post._createdAt,
      metaImage: imageUrl ? { url: imageUrl, alt: post.featuredImage?.alt || post.title } : null,
      category: post.category || 'Article',
      excerpt: post.excerpt || '',
    };
  });

  const totalPages = Math.ceil(total / limit) || 1;

  return {
    posts: formattedPosts,
    total,
    totalPages,
  };
}

export async function fetchSanityPostBySlug(slug) {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      body,
      excerpt,
      publishedAt,
      _createdAt,
      _updatedAt,
      featuredImage,
      author,
      category,
      metaTitle,
      metaDescription
    }`,
    { slug }
  );

  if (!post) return null;

  const imageUrl = post.featuredImage ? urlForSanityImage(post.featuredImage)?.url() : null;

  const formattedPost = {
    id: post._id,
    title: post.title,
    slug: post.slug.current,
    body: post.body,
    metaDescription: post.metaDescription || post.excerpt || '',
    metaTitle: post.metaTitle || post.title,
    createdAt: post.publishedAt || post._createdAt,
    updatedAt: post._updatedAt || post.publishedAt || post._createdAt,
    metaImage: imageUrl ? { url: imageUrl, alt: post.featuredImage?.alt || post.title } : null,
    category: post.category || 'Article',
  };

  // Also fetch related posts
  const relatedPosts = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current) && slug.current != $slug] | order(publishedAt desc)[0..1]{
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      _createdAt,
      featuredImage
    }`,
    { slug }
  );

  const formattedRelated = relatedPosts.map((rp) => ({
    id: rp._id,
    title: rp.title,
    slug: rp.slug.current,
    createdAt: rp.publishedAt || rp._createdAt,
  }));

  return {
    post: formattedPost,
    relatedPosts: formattedRelated,
  };
}

export async function fetchAllSanitySlugs() {
  const posts = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      publishedAt,
      _createdAt,
      _updatedAt
    }`
  );
  return posts;
}
