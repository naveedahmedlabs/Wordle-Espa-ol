'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';
import { blogPosts } from '../data/blogPosts';
import '../styles/game.css';

export default function BlogsPage() {
  const params = useParams();
  const pageParam = params?.page;
  const searchParams = useSearchParams();
  const pageStr = pageParam || searchParams.get('page');
  const page = parseInt(pageStr || '1', 10);
  const postsPerPage = 10;

  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const start = (page - 1) * postsPerPage;
      const end = start + postsPerPage;

      // Sort by publishedAt desc
      const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      const slicedPosts = sortedPosts.slice(start, end);

      setTotalPosts(sortedPosts.length);
      setPosts(slicedPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
      setTimeout(() => document.dispatchEvent(new Event('prerender-trigger')), 500);
    }
  }, [page]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wordle Unlimited Blog',
    description: 'Latest news, tips, and updates for Wordle Unlimited.',
    url: 'https://wordlegame.co.uk/blogs',
  };

  return (
    <section className="game-cards" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
        <div className="game-cards__heading" style={{ marginBottom: '12px' }}>
          <h1 className="game-cards__heading-text" style={{ fontSize: '28px', margin: 0 }}>Our Blog</h1>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', margin: 0 }}>
          Latest news, tips, and updates.
        </p>
      </div>

      {loading ? (
        <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
          <p>Loading posts...</p>
        </div>
      ) : posts.length > 0 ? (
        <div className="game-cards__grid">
          {posts.map((post) => (
            <Link key={post._id} href={`/blogs/${post.slug}/`} className="game-card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
              {post.featuredImage ? (
                <div style={{ width: '100%', height: '160px', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <div style={{ width: '100%', height: '160px', background: 'var(--color-surface-hover)', flexShrink: 0 }}></div>
              )}
              <div className="game-card__info" style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>
                  {post.category || 'Article'} • {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <h3 className="game-card__name" style={{ fontSize: '18px', marginBottom: '8px' }}>{post.title}</h3>
                <p className="game-card__desc" style={{ fontSize: '14px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
          <p>No blog posts found.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '48px', marginBottom: '24px' }}>
          {page > 1 ? (
            <Link
              href={page - 1 === 1 ? '/blogs/' : `/blogs/page/${page - 1}/`}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-dark)',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 2px 4px var(--color-shadow)'
              }}
            >
              ← Previous
            </Link>
          ) : (
            <span style={{ padding: '10px 20px', color: 'var(--color-text-secondary)', opacity: 0.5, fontWeight: 600 }}>← Previous</span>
          )}

          <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
            Page {page} of {totalPages}
          </span>

          {page < totalPages ? (
            <Link
              href={`/blogs/page/${page + 1}/`}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-dark)',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 2px 4px var(--color-shadow)'
              }}
            >
              Next →
            </Link>
          ) : (
            <span style={{ padding: '10px 20px', color: 'var(--color-text-secondary)', opacity: 0.5, fontWeight: 600 }}>Next →</span>
          )}
        </div>
      )}
    </section>
  );
}
