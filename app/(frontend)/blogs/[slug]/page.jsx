import SingleBlogPage from '../../../src/views/SingleBlogPage';
import { blogPosts } from '../../../src/data/blogPosts';

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

export default function Page() {
  return <SingleBlogPage />;
}
