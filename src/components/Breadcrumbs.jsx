'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Breadcrumbs({ items, language = 'en' }) {
  const router = useRouter();
  const navigate = (path) => router.push(path);

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '20px', fontSize: '14px' }}>
      <ol style={{ 
        display: 'flex', 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        gap: '8px',
        color: 'var(--color-text-secondary)'
      }}>
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span 
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-text-dark)' }}
          >
            Home
          </span>
          <span>/</span>
        </li>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {index === items.length - 1 ? (
              <span style={{ fontWeight: '500' }}>{item.name}</span>
            ) : (
              <>
                <span 
                  onClick={() => navigate(item.path)}
                  style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-text-dark)' }}
                >
                  {item.name}
                </span>
                <span>/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
