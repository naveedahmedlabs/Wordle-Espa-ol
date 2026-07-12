'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../data/blogPosts';

// Wordle Green
const PRIMARY_COLOR = '#5BAD6F';

export default function SingleBlogPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const fetchedPost = blogPosts.find(p => p.slug === slug);

      if (!fetchedPost) {
        setError('Post not found');
        return;
      }

      setPost(fetchedPost);

      const fetchedRelated = blogPosts
        .filter(p => p.slug !== slug)
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 2);
      setRelatedPosts(fetchedRelated);
    } catch (err) {
      console.error("Error loading post:", err);
      setError('Error loading post');
    } finally {
      setLoading(false);
      setTimeout(() => document.dispatchEvent(new Event('prerender-trigger')), 500);
    }
  }, [slug]);

  if (loading) {
    return <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--color-text-secondary)' }}>Loading post...</div>;
  }

  if (error || !post) {
    return (
      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-text-dark)' }}>{error || 'Post not found'}</h2>
        <Link href="/blogs/" style={{ color: PRIMARY_COLOR, textDecoration: 'underline', marginTop: '16px', display: 'inline-block' }}>Return to Blogs</Link>
      </div>
    );
  }

  const title = post.metaTitle || `${post.title} - Wordle Unlimited Blog`;
  const description = post.metaDescription || post.excerpt;
  const imageUrl = post.featuredImage || 'https://wordlegame.co.uk/icons.svg';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: description,
    image: post.featuredImage ? [post.featuredImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: [{
      '@type': 'Person',
      name: post.author || 'Wordle Unlimited',
      url: 'https://wordlegame.co.uk'
    }]
  };

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '20px 0' }}>
      

      {/* Back link */}
      <nav style={{ marginBottom: '28px', padding: '0 32px' }}>
        <Link href="/blogs/" style={{
          color: 'var(--color-text-secondary)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 500,
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '8px',
          background: 'var(--color-surface)',
          transition: 'background 0.2s',
          boxShadow: '0 2px 8px var(--color-shadow)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          ← Back to Blogs
        </Link>
      </nav>

      <article style={{ padding: '0 32px', marginBottom: '40px', display: 'block' }}>
        {/* Article header */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>

          {/* Category & meta */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            {post.category && (
              <span style={{
                background: PRIMARY_COLOR,
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {post.category}
              </span>
            )}
            <span>{post.author ? `By ${post.author} • ` : ''}{new Date(post.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 44px)',
            fontWeight: 800,
            color: 'var(--color-text-dark)',
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p style={{
              fontSize: '18px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '680px',
              margin: '0 auto 24px'
            }}>
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Featured image */}
        {post.featuredImage && (
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: '12px',
            marginBottom: '36px'
          }}>
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        {/* Article body */}
        <div className="blog-content" style={{ paddingBottom: '16px' }} dangerouslySetInnerHTML={{ __html: post.bodyHtml || '<p style="color: var(--color-text-secondary)">No content available.</p>' }} />
      </article>

      {/* Automated Internal Links for SEO */}
      {relatedPosts.length > 0 && (
        <div style={{ marginTop: '32px', marginBottom: '64px', padding: '32px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border, #eaeaea)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--color-text-dark)' }}>Keep Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
            {relatedPosts.map(rp => (
              <li key={rp._id} style={{ marginBottom: '12px' }}>
                <Link href={`/blogs/${rp.slug}/`} style={{ color: PRIMARY_COLOR, textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>
                  → {rp.title}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--color-border, #eaeaea)' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--color-text-dark)' }}>Ready to play?</h4>
            <p style={{ marginBottom: '16px', color: 'var(--color-text-secondary)', fontSize: '15px' }}>Test your skills with our free, unlimited version of the game.</p>
            <Link href="/" style={{
              display: 'inline-block',
              background: 'var(--color-text-dark)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '15px'
            }}>
              Play Wordle Unlimited Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
