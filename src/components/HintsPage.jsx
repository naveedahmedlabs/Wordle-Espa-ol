import React, { useState } from 'react';
import { WORDS_DB } from '../wordDb';

export default function HintsPage({ onClose }) {
  const [showHints, setShowHints] = useState(false);
  
  const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const dayOfYear = getDayOfYear();
  const difficulties = ['easy', 'medium', 'hard', 'ultraHard'];
  const difficulty = difficulties[dayOfYear % 4];
  const list = WORDS_DB[difficulty];
  const wordObj = list[dayOfYear % list.length];

  // Get past 7 days words
  const pastWords = [];
  for (let i = 1; i <= 7; i++) {
    const d = dayOfYear - i;
    if (d < 0) continue;
    const diff_i = difficulties[d % 4];
    const list_i = WORDS_DB[diff_i];
    const word_i = list_i[d % list_i.length];
    pastWords.push({ word: word_i.word, date: new Date(new Date().setDate(new Date().getDate() - i)) });
  }

  return (
    <div className="hints-page-overlay" style={{
      position: 'fixed',
      inset: 0,
      background: 'var(--color-bg)',
      zIndex: 1000,
      padding: '20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Daily Wordle Hints</h1>
          <button onClick={onClose} style={{ background: 'var(--color-surface)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </header>

        <section className="current-hints" style={{ 
          background: 'var(--color-surface)', 
          padding: '24px', 
          borderRadius: '20px', 
          marginBottom: '30px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
          border: '1px dashed #dee2e6'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ 
              background: '#e9ecef', 
              padding: '4px 12px', 
              borderRadius: '99px', 
              fontSize: '12px', 
              fontWeight: '700', 
              textTransform: 'uppercase',
              color: '#495057'
            }}>
              Difficulty: {difficulty}
            </span>
            <span style={{ fontSize: '14px', color: '#6c757d' }}>{new Date().toLocaleDateString()}</span>
          </div>

          <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Need a nudge for today's word?</h2>

          {!showHints ? (
            <button 
              onClick={() => setShowHints(true)}
              style={{
                width: '100%',
                padding: '16px',
                background: '#495057',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Reveal Hints
            </button>
          ) : (
            <div className="hints-list">
              {wordObj.hints.map((hint, idx) => (
                <div key={idx} style={{ 
                  padding: '12px 16px', 
                  background: '#f8f9fa', 
                  borderRadius: '10px', 
                  marginBottom: '10px',
                  borderLeft: '4px solid #dee2e6',
                  fontSize: '15px',
                  color: '#212529',
                  animation: `slideIn 0.3s ease-out ${idx * 0.1}s both`
                }}>
                  <strong>Hint {idx + 1}:</strong> {hint}
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="past-answers">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Past Wordle Answers</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {pastWords.map((item, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '12px 20px', 
                background: 'var(--color-surface)', 
                borderRadius: '12px',
                border: '1px solid #f1f3f5'
              }}>
                <span style={{ fontSize: '14px', color: '#6c757d' }}>{item.date.toLocaleDateString()}</span>
                <span style={{ fontWeight: '800', letterSpacing: '1px', color: '#495057' }}>{item.word}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: '40px', textAlign: 'center', padding: '20px', color: '#adb5bd', fontSize: '13px' }}>
          New words and hints updated every day at midnight.
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hints-page-overlay {
          scrollbar-width: thin;
          scrollbar-color: #dee2e6 transparent;
        }
      `}</style>
    </div>
  );
}
