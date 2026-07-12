'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RichText } from '@payloadcms/richtext-lexical/react';

// Wordle Green
const PRIMARY_COLOR = '#5BAD6F';

export default function SingleBlogPage({ post, relatedPosts = [] }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => document.dispatchEvent(new Event('prerender-trigger')), 500);
  }, [post]);

  if (!post) {
    return (
      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-text-dark)' }}>Post not found</h2>
        <Link href="/blogs/" style={{ color: PRIMARY_COLOR, textDecoration: 'underline', marginTop: '16px', display: 'inline-block' }}>Return to Blogs</Link>
      </div>
    );
  }

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
            <span>Wordle Unlimited • {new Date(post.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
          {post.metaDescription && (
            <p style={{
              fontSize: '18px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '680px',
              margin: '0 auto 24px'
            }}>
              {post.metaDescription}
            </p>
          )}
        </div>

        {/* Featured image */}
        {post.metaImage?.url && (
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: '12px',
            marginBottom: '36px'
          }}>
            <img
              src={post.metaImage.url}
              alt={post.metaImage.alt || post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        {/* Article body */}
        <div className="blog-content" style={{ paddingBottom: '16px' }}>
           <RichText data={post.content} />
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .blog-content {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            color: var(--color-text-dark, #2d3748);
            font-size: 18px;
            line-height: 1.8;
          }
          
          .blog-content h2,
          .blog-content h3,
          .blog-content h4,
          .blog-content h5,
          .blog-content h6 {
            color: var(--color-text-dark, #1a202c);
            font-weight: 800;
            margin-top: 2em;
            margin-bottom: 0.75em;
            line-height: 1.3;
            letter-spacing: -0.01em;
          }
          
          .blog-content h2 { 
            font-size: 2em; 
            border-bottom: 2px solid var(--color-border, #eaeaea); 
            padding-bottom: 0.4em; 
          }
          
          .blog-content h3 { font-size: 1.5em; }
          .blog-content h4 { font-size: 1.25em; }
          
          .blog-content p {
            margin-bottom: 1.5em;
          }
          
          .blog-content a {
            color: #5BAD6F;
            text-decoration: none;
            border-bottom: 2px solid rgba(91, 173, 111, 0.4);
            font-weight: 600;
            transition: all 0.2s ease;
          }
          
          .blog-content a:hover {
            color: #4a9159;
            border-bottom-color: #4a9159;
            background-color: rgba(91, 173, 111, 0.1);
          }
          
          .blog-content ul,
          .blog-content ol {
            margin-bottom: 1.5em;
            padding-left: 1.5em;
          }
          
          .blog-content li {
            margin-bottom: 0.5em;
          }
          
          .blog-content li::marker {
            color: #5BAD6F;
            font-weight: bold;
          }
          
          .blog-content blockquote {
            border-left: 4px solid #5BAD6F;
            margin: 1.5em 0;
            color: #4a5568;
            font-style: italic;
            background-color: var(--color-surface, #f7fafc);
            padding: 1.2em 1.5em;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          }
          
          .blog-content img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin: 2em 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            display: block;
          }
          
          .blog-content strong {
            font-weight: 700;
            color: var(--color-text-dark, #1a202c);
          }

          .blog-content code {
            font-family: 'Fira Code', monospace;
            background-color: rgba(0,0,0,0.05);
            padding: 0.2em 0.4em;
            border-radius: 4px;
            font-size: 0.9em;
            color: #e53e3e;
          }

          .blog-content pre {
            background-color: #1a202c;
            color: #f7fafc;
            padding: 1.5em;
            border-radius: 12px;
            overflow-x: auto;
            margin: 1.5em 0;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }

          .blog-content pre code {
            background-color: transparent;
            padding: 0;
            color: inherit;
            border-radius: 0;
          }
        `}} />
      </article>

      {/* Automated Internal Links for SEO */}
      {relatedPosts.length > 0 && (
        <div style={{ marginTop: '32px', marginBottom: '64px', padding: '32px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border, #eaeaea)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--color-text-dark)' }}>Keep Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
            {relatedPosts.map(rp => (
              <li key={rp.id} style={{ marginBottom: '12px' }}>
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
