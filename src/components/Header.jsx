'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CONTENT = {
  es: {
    daily: 'Diario',
    unlimited: 'Ilimitado',
    hints: 'Pistas',
    giveUp: 'Rendirse'
  },
};

export default function Header({ 
  onHelp, 
  onSettings, 
  onStats, 
  onGiveUp, 
  onChallenge, 
  gameState, 
  guessesCount,
  gameMode,
  onModeChange,
  onViewChange,
  onFeedback,
  currentView,
  language = 'es'
}) {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const c = CONTENT.es;



  return (
    <header className="top-header-wrapper" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'var(--color-bg)' }}>
      <div className="header" id="header" style={{ padding: '10px 0' }}>
        <div className="container">
          <div className="header__wrapper" style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <button 
              onClick={() => onModeChange('daily')}
              className={`header__btn btn ${(gameMode === 'daily' || currentView === 'hints') ? 'header__btn--active' : ''}`} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                padding: '6px 16px', 
                background: (gameMode === 'daily' || currentView === 'hints') ? 'var(--color-surface)' : 'var(--color-tab-bg)', 
                borderRadius: '999px', 
                border: 'none',
                cursor: 'pointer',
                color: (gameMode === 'daily' || currentView === 'hints') ? 'var(--color-text-dark)' : 'var(--color-text-secondary)', 
                fontWeight: '600', 
                fontSize: '14px' 
              }}
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 13c.325 2.532 1.881 4.781 4 6"></path><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"></path><path d="M4 5v4h4"></path><path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"></path><path d="M18 15v2a1 1 0 0 0 1 1h1"></path><path d="M21 15v6"></path></svg>
              <span>{c.daily}</span>
            </button>
            <button 
              onClick={() => onModeChange('unlimited')}
              className={`header__btn btn ${(gameMode === 'unlimited' && currentView !== 'hints') ? 'header__btn--active' : ''}`} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                padding: '6px 16px', 
                background: (gameMode === 'unlimited' && currentView !== 'hints') ? 'var(--color-surface)' : 'var(--color-tab-bg)', 
                borderRadius: '999px', 
                border: 'none',
                cursor: 'pointer',
                color: (gameMode === 'unlimited' && currentView !== 'hints') ? 'var(--color-text-dark)' : 'var(--color-text-secondary)', 
                fontWeight: '600', 
                fontSize: '14px' 
              }}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32"></path></svg>
              <span>{c.unlimited}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="header-actions" style={{ paddingTop: '5px' }}>
        <div className="cont flex" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>

            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 8px',
                marginRight: '4px',
                borderRight: '1px solid var(--color-border)'
              }}
            >
              <img 
                src="https://flagcdn.com/w40/es.png" 
                alt="Español" 
                width="24" 
                height="18" 
                style={{ display: 'block', borderRadius: '2px' }} 
              />
            </div>
            
            <button type="button" className="generator" style={{ display: 'flex', background: 'none', border: 'none', cursor: 'pointer' }} onClick={onChallenge}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>

            <button 
              type="button" 
              className={`hints-btn ${currentView === 'hints' ? 'active' : ''}`}
              onClick={() => onViewChange(currentView === 'hints' ? 'game' : 'hints')}
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '4px',
                background: currentView === 'hints' ? 'var(--color-surface)' : 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: currentView === 'hints' ? 'var(--color-text-dark)' : 'var(--color-text-secondary)',
                padding: '4px 8px',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="9" x2="15" y2="9"></line>
                <line x1="9" y1="13" x2="15" y2="13"></line>
              </svg>
              <span style={{ fontSize: '12px', fontWeight: '700' }}>{c.hints}</span>
            </button>

            <button 
              type="button" 
              className={`archive-header-btn ${currentView === 'archive' ? 'active' : ''}`}
              onClick={() => onViewChange(currentView === 'archive' ? 'game' : 'archive')}
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '4px',
                background: currentView === 'archive' ? 'var(--color-surface)' : 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: currentView === 'archive' ? 'var(--color-text-dark)' : 'var(--color-text-secondary)',
                padding: '4px 8px',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              title="Archivo de puzles anteriores"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span style={{ fontSize: '12px', fontWeight: '700' }}>Archivo</span>
            </button>

            <button 
              type="button" 
              title={language === 'es' ? 'Sugerir función' : 'Request Feature'}
              onClick={onFeedback}
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: 'var(--color-text-secondary)',
                padding: '4px 8px',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.674"></path>
                <path d="M10 20h4"></path>
                <path d="M12 3a7 7 0 0 0-7 7c0 1.5.7 3 2 4.3V17c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2.7c1.3-1.3 2-2.8 2-4.3a7 7 0 0 0-7-7z"></path>
              </svg>
            </button>
          </div>
          
          <button 
            type="button" 
            className="give_up" 
            onClick={onGiveUp}
            style={{ 
              display: (gameState === 'playing' && guessesCount > 0) ? 'block' : 'none',
              background: '#e9ecef',
              border: '1px solid #dee2e6',
              color: '#495057',
              padding: '8px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '15px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              margin: '0 10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            {c.giveUp}
          </button>
          
          <div className="buttons flex">
            <button type="button" className="button mini_modal_link" onClick={onStats}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="14" width="4" height="7" rx="1"/>
                <rect x="10" y="9" width="4" height="12" rx="1"/>
                <rect x="16" y="4" width="4" height="17" rx="1"/>
              </svg>
            </button>
            
            <button type="button" className="button mini_modal_link" onClick={onSettings}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1V15a2 2 0 0 1-2-2 2 2 0 0 1 2-2v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>

            <button type="button" className="button mini_modal_link" onClick={onHelp}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
