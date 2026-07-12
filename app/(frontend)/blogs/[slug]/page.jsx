import SingleBlogPage from '../../../../src/views/SingleBlogPage';
import { blogPosts } from '../../../../src/data/blogPosts';
import Schema from '../../Schema';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const title = post.metaTitle || `${post.title} - Wordle Unlimited Blog`;
  const description = post.metaDescription || post.excerpt;
  const url = `https://wordlegame.co.uk/blogs/${slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author || 'Wordle Unlimited'],
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              alt: post.featuredImageAlt || post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  const seo = {
    title: post?.metaTitle || post?.title || 'Wordle Unlimited Blog',
    description: post?.metaDescription || post?.excerpt,
    canonical: `https://wordlegame.co.uk/blogs/${slug}/`,
    modifiedDate: post?.publishedAt,
  };

  return (
    <>
      <Schema seo={seo} />
      <SingleBlogPage />
    </>
  );
}
