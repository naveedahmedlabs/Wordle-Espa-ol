import React from 'react';

export default function NotFound({ language = 'en', onHome }) {
  const content = {

    uk: {
      title: '404',
      subtitle: 'Word Not Found',
      message: "The page you're looking for doesn't exist. It's like a 5-letter word that isn't in our dictionary.",
      back: 'Back to Home'
    },

  };

  const c = content.uk;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      padding: '20px',
      color: 'var(--color-text-dark)'
    }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '30px' }}>
        {['4', '0', '4'].map((char, i) => (
          <div key={i} style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: i === 1 ? '#c2272d' : '#6aaa64',
            color: 'white',
            fontSize: '2rem',
            fontWeight: '900',
            borderRadius: '4px',
            animation: `flipIn 0.5s ease-out ${i * 0.1}s both`
          }}>
            {char}
          </div>
        ))}
      </div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: '900', margin: '0 0 10px' }}>
        {c.subtitle}
      </h1>
      <p style={{ 
        fontSize: '1.1rem', 
        color: 'var(--color-text-secondary)', 
        maxWidth: '400px', 
        lineHeight: '1.6',
        marginBottom: '40px'
      }}>
        {c.message}
      </p>

      <button 
        onClick={onHome}
        style={{
          background: '#6aaa64',
          color: 'white',
          border: 'none',
          padding: '14px 32px',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          boxShadow: '0 4px 12px rgba(106, 170, 100, 0.3)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {c.back}
      </button>

      <style>{`
        @keyframes flipIn {
          from { transform: rotateX(-90deg); opacity: 0; }
          to { transform: rotateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
