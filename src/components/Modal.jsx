import { useState, useEffect, Fragment } from 'react';
import { isValidWord, validateWordOnline } from '../words';
import html2canvas from 'html2canvas';

const CONTENT = {
  es: {
    help: { 
      title: 'Cómo Jugar', 
      line1: 'Adivina la palabra oculta en 6 intentos.', 
      line2: 'Cada intento debe ser una palabra válida de 5 letras.', 
      line3: 'El color de las casillas cambiará para mostrarte qué tan cerca estás de acertar.' 
    },
    settings: { title: 'Ajustes', dark: 'Modo Oscuro', hard: 'Modo Difícil' },
    stats: { title: 'Estadísticas', played: 'Jugadas', won: 'Victorias', newGame: 'Nueva Partida' },
    challenge: { 
      title: 'Desafiar a un Amigo', 
      prompt: 'Introduce una palabra para generar el enlace del desafío:', 
      placeholder: 'ESCRIBE UNA PALABRA', 
      btn: 'Generar y Copiar', 
      validating: 'Comprobando...', 
      copied: '¡Enlace copiado al portapapeles!', 
      btnAnother: 'Crear Otro', 
      errorLength: 'La palabra debe tener entre 4 y 11 letras', 
      errorBanned: 'Palabra no permitida', 
      errorInvalid: 'Palabra no válida en el diccionario' 
    },
    finish: { 
      won: '¡Has Ganado!', 
      lost: '¡Has Perdido!', 
      answer: 'La palabra era:', 
      meaning: '¿Qué significa esta palabra?', 
      newGame: 'Nueva Partida', 
      enterAgain: 'o pulsa Enter para jugar de nuevo', 
      copyLink: 'Copiar enlace a esta palabra', 
      downloadImg: 'Descargar imagen del resultado', 
      linkCopied: '¡Enlace copiado al portapapeles!',
      dailyFinished: '¡Ya has completado el Wordle de hoy!',
      nextWord: 'Siguiente palabra en:',
      tryUnlimited: 'Probar Wordle Ilimitado'
    }
  },
};

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} id="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{
        background: 'white',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '450px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
      }}>
        {children}
      </div>
    </div>
  );
}

function ModalHeader({ title, onClose }) {
  return (
    <div style={{
      background: '#e8f5e9',
      padding: '12px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: '#1a1a1b' }}>
        {title}
      </h2>
      <button onClick={onClose} style={{
        position: 'absolute',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        color: '#86888a',
        cursor: 'pointer',
        lineHeight: 1
      }}>×</button>
    </div>
  );
}

export function HelpModal({ onClose, language = 'es' }) {
  const c = (CONTENT.es).help;
  return (
    <div>
      <ModalHeader title={c.title} onClose={onClose} />
      <div style={{ padding: '24px', color: '#1a1a1b' }}>
        <p style={{ marginBottom: '15px', fontWeight: '600' }}>{c.line1}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li>• {c.line2}</li>
          <li>• {c.line3}</li>
        </ul>
      </div>
    </div>
  );
}

export function SettingsModal({ onClose, darkMode, onDarkMode, hardMode, onHardMode, colorBlind, onColorBlind, language = 'es' }) {
  const c = (CONTENT.es).settings;
  return (
    <div>
      <ModalHeader title={c.title} onClose={onClose} />
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#1a1a1b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '600' }}>{c.dark}</span>
          <input type="checkbox" checked={darkMode} onChange={onDarkMode} style={{ cursor: 'pointer' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '600' }}>{c.hard}</span>
          <input type="checkbox" checked={hardMode} onChange={onHardMode} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}

export function StatsModal({ stats, onNewGame, gameState, onClose, language = 'es' }) {
  const c = (CONTENT.es).stats;
  return (
    <div>
      <ModalHeader title={c.title} onClose={onClose} />
      <div style={{ padding: '24px', textAlign: 'center', color: '#1a1a1b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
          <div><div style={{ fontSize: '2.5rem', fontWeight: '800' }}>{stats.gamesPlayed}</div><div style={{ fontSize: '13px', fontWeight: '600', color: '#818384' }}>{c.played}</div></div>
          <div><div style={{ fontSize: '2.5rem', fontWeight: '800' }}>{stats.gamesWon}</div><div style={{ fontSize: '13px', fontWeight: '600', color: '#818384' }}>{c.won}</div></div>
        </div>
        <button 
          onClick={() => {
            onClose();
            onNewGame();
          }}
          style={{
            background: '#6aaa64',
            color: 'white',
            border: 'none',
            padding: '14px 40px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '800',
            cursor: 'pointer',
            boxShadow: '0 4px 0 #53844e'
          }}
        >
          {c.newGame}
        </button>
      </div>
    </div>
  );
}

export function ChallengeModal({ onClose, language = 'es' }) {
  const c = (CONTENT.es).challenge;
  const [word, setWord] = useState('');
  const [shake, setShake] = useState(false);
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (word.length < 4 || word.length > 11) {
      setError(c.errorLength);
      return;
    }
    
    setIsValidating(true);
    setError('');
    const result = await validateWordOnline(word, language);
    setIsValidating(false);
    
    if (!result.valid) {
      setShake(true);
      setError(result.reason === 'banned' ? c.errorBanned : c.errorInvalid);
      setTimeout(() => setShake(false), 600);
      return;
    }
    
    const url = `${window.location.origin}${window.location.pathname}?challenge=wu_${btoa(word.toLowerCase())}`;
    setGeneratedUrl(url);
    navigator.clipboard.writeText(url);
  };

  return (
    <div>
      <ModalHeader title={c.title} onClose={onClose} />
      <div style={{ padding: '24px' }}>
        {generatedUrl ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#6aaa64', fontWeight: '700', marginBottom: '15px' }}>{c.copied}</p>
            <input 
              type="text" 
              readOnly 
              value={generatedUrl} 
              style={{ width: '100%', padding: '12px', background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '6px', marginBottom: '15px', color: '#1a1a1b', fontSize: '14px' }} 
            />
            <button 
              onClick={() => setGeneratedUrl('')}
              style={{ background: '#6aaa64', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
            >
              {c.btnAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '20px', fontSize: '15px', color: '#3a3a3c', fontWeight: '500' }}>{c.prompt}</p>
            <input 
              type="text" 
              value={word} 
              onChange={(e) => setWord(e.target.value.toUpperCase())} 
              className={shake ? 'grid__row--shake' : ''}
              placeholder={c.placeholder}
              maxLength={11}
              style={{ width: '100%', padding: '14px', textAlign: 'center', fontSize: '1.6rem', fontWeight: '800', letterSpacing: '2px', border: '2px solid #dee2e6', borderRadius: '8px', marginBottom: '10px', color: '#1a1a1b' }}
            />
            {error && <p style={{ color: '#e91e63', fontSize: '14px', fontWeight: '600', marginBottom: '15px' }}>{error}</p>}
            <button 
              type="submit" 
              disabled={isValidating}
              style={{ width: '100%', background: '#6aaa64', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 0 #53844e' }}
            >
              {isValidating ? c.validating : c.btn}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function FinishModal({ isWin, answer, onNewGame, onClose, language = 'es', gameMode = 'unlimited', onSwitchMode }) {
  const c = (CONTENT.es).finish;
  const challengeUrl = `${window.location.origin}${window.location.pathname}?challenge=wu_${btoa(answer.toLowerCase())}`;
  
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (gameMode !== 'daily') return;

    const timer = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow - now;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      
      setTimeLeft(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameMode]);

  const handleDownloadImage = () => {
    const grid = document.getElementById('wordle-grid');
    if (!grid) return;
    html2canvas(grid, { backgroundColor: '#ffffff' }).then(canvas => {
      const link = document.createElement('a');
      link.download = `wordle-result-${new Date().getTime()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(challengeUrl);
    alert(c.linkCopied);
  };

  return (
    <div className="modal_finish" style={{ color: '#1a1a1b' }}>
      <ModalHeader title={isWin ? c.won : c.lost} onClose={onClose} />

      <div style={{ padding: '24px 30px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '0.95rem', fontWeight: '600', color: '#3a3a3c' }}>
          {c.answer}
        </p>

        <div style={{
          display: 'inline-block',
          padding: '12px 30px',
          background: '#f4f6f7',
          border: '2px dashed #bfc1c3',
          borderRadius: '8px',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            letterSpacing: '4px',
            textTransform: 'uppercase'
          }}>{answer}</span>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <a 
            href={`https://dle.rae.es/${answer.toLowerCase()}`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#4486f4', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}
          >
            {c.meaning}
          </a>
        </div>

        {gameMode === 'daily' ? (
          <div style={{ marginBottom: '24px', padding: '15px', background: '#f8f9fa', borderRadius: '12px' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '1rem', fontWeight: '700', color: '#1a1a1b' }}>
              {c.dailyFinished}
            </p>
            <p style={{ margin: '0 0 15px 0', fontSize: '0.9rem', color: '#6c757d' }}>
              {c.nextWord} <span style={{ fontFamily: 'monospace', fontWeight: '800', fontSize: '1.1rem', color: '#1a1a1b' }}>{timeLeft}</span>
            </p>
            <button 
              onClick={() => {
                onSwitchMode('unlimited');
                onClose();
              }}
              style={{
                background: '#6aaa64',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              {c.tryUnlimited}
            </button>
          </div>
        ) : (
          <>
            <button 
              onClick={onNewGame}
              style={{
                background: '#6aaa64',
                color: 'white',
                border: 'none',
                padding: '14px 0',
                width: '100%',
                maxWidth: '240px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 4px 0 #53844e',
                transition: 'transform 0.1s',
                marginBottom: '10px'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(2px)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {c.newGame}
            </button>

            <p style={{ margin: '0 0 24px 0', fontSize: '0.85rem', color: '#818384', fontWeight: '500' }}>
              {c.enterAgain}
            </p>
          </>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            onClick={handleCopyLink}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              padding: '12px',
              background: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#3a3a3c',
              cursor: 'pointer'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            {c.copyLink}
          </button>

          <button 
            onClick={handleDownloadImage}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              padding: '12px',
              background: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#3a3a3c',
              cursor: 'pointer'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {c.downloadImg}
          </button>
        </div>

        <div style={{ marginTop: '20px', fontSize: '0.75rem', color: '#b5b7b9', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Sponsored
        </div>
      </div>
    </div>
  );
}

