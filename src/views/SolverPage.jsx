import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SolverGrid from '../components/SolverGrid';
import Keyboard from '../components/Keyboard';
import { getAllWords } from '../words';

export default function SolverPage({ language = 'uk' }) {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const allWords = useMemo(() => getAllWords(language), [language]);

  const suggestions = useMemo(() => {
    if (guesses.length === 0) return [];
    
    let possible = allWords;
    
    possible = possible.filter(word => {
      for (let guess of guesses) {
        let tempWord = word;
        
        for (let i = 0; i < 5; i++) {
          if (guess.states[i] === 'correct') {
            if (word[i] !== guess.letters[i]) return false;
            tempWord = tempWord.substring(0, i) + '_' + tempWord.substring(i + 1);
          }
        }
        
        for (let i = 0; i < 5; i++) {
          if (guess.states[i] === 'present') {
            if (word[i] === guess.letters[i]) return false;
            const idx = tempWord.indexOf(guess.letters[i]);
            if (idx === -1) return false;
            tempWord = tempWord.substring(0, idx) + '_' + tempWord.substring(idx + 1);
          }
        }
        
        for (let i = 0; i < 5; i++) {
          if (guess.states[i] === 'absent') {
            if (tempWord.includes(guess.letters[i])) return false;
          }
        }
      }
      return true;
    });
    
    const letterFreq = {};
    for (const word of possible) {
      const uniqueLetters = new Set(word);
      for (const char of uniqueLetters) {
        letterFreq[char] = (letterFreq[char] || 0) + 1;
      }
    }
    
    return possible.sort((a, b) => {
      const scoreA = [...new Set(a)].reduce((sum, char) => sum + letterFreq[char], 0);
      const scoreB = [...new Set(b)].reduce((sum, char) => sum + letterFreq[char], 0);
      if (scoreA !== scoreB) {
        return scoreB - scoreA;
      }
      return a.localeCompare(b);
    });
  }, [guesses, allWords]);

  const handleKey = useCallback((key) => {
    setErrorMsg('');
    if (key === 'Enter') {
      if (currentGuess.length < 5) {
        setErrorMsg('Not enough letters');
        return;
      }
      if (guesses.length < 6) {
        setGuesses([...guesses, { 
          letters: currentGuess.split(''), 
          states: Array(5).fill('absent') 
        }]);
        setCurrentGuess('');
      }
    } else if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(key)) {
      if (currentGuess.length < 5 && guesses.length < 6) {
        setCurrentGuess(prev => prev + key.toLowerCase());
      }
    }
  }, [currentGuess, guesses]);

  const toggleState = (rowIndex, colIndex) => {
    setGuesses(prev => {
      const newGuesses = [...prev];
      // Clone the guess object so we don't mutate state directly
      const newGuess = { ...newGuesses[rowIndex], states: [...newGuesses[rowIndex].states] };
      const currentState = newGuess.states[colIndex];
      let nextState = 'absent';
      if (currentState === 'absent') nextState = 'present';
      else if (currentState === 'present') nextState = 'correct';
      
      newGuess.states[colIndex] = nextState;
      newGuesses[rowIndex] = newGuess;
      return newGuesses;
    });
  };

  const keyStates = useMemo(() => {
    const states = {};
    guesses.forEach(guess => {
      guess.letters.forEach((letter, i) => {
        const s = guess.states[i];
        if (!states[letter] || s === 'correct' || (s === 'present' && states[letter] !== 'correct')) {
          states[letter] = s;
        }
      });
    });
    return states;
  }, [guesses]);

  useEffect(() => {
    const listener = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 'Enter' || e.key === 'Backspace' || /^[a-zA-Z]$/.test(e.key)) {
        handleKey(e.key);
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [handleKey]);

  const handleUndo = () => {
    if (guesses.length > 0) {
      setGuesses(prev => prev.slice(0, -1));
      setCurrentGuess('');
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the solver?")) {
      setGuesses([]);
      setCurrentGuess('');
    }
  };

  return (
    <div className="solver-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 10px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#1a1a1b' }}>Solucionador de Wordle en Español</h1>
        <p style={{ color: '#6c757d', marginBottom: '0', fontSize: '1.1rem' }}>
          Escribe tu palabra y presiona Enter. Haz clic en las casillas para hacer coincidir los colores de tu partida.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
        
        {/* Interactive Grid */}
        <div style={{ position: 'relative', width: '100%' }}>
          <SolverGrid 
            guesses={guesses} 
            currentGuess={currentGuess} 
            currentRow={guesses.length} 
            onToggleState={toggleState} 
          />
          {errorMsg && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.95)', padding: '10px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontWeight: 'bold', zIndex: 10 }}>
              {errorMsg}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={handleUndo} 
            disabled={guesses.length === 0} 
            style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: guesses.length === 0 ? '#e9ecef' : '#6c757d', color: guesses.length === 0 ? '#adb5bd' : 'white', cursor: guesses.length === 0 ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background 0.2s' }}
          >
            Undo Guess
          </button>
          <button 
            onClick={handleReset} 
            disabled={guesses.length === 0} 
            style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: guesses.length === 0 ? '#e9ecef' : '#dc3545', color: guesses.length === 0 ? '#adb5bd' : 'white', cursor: guesses.length === 0 ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background 0.2s' }}
          >
            Reset All
          </button>
        </div>

        {/* Suggestions Panel */}
        <div style={{ width: '100%', maxWidth: '500px', background: '#f8f9fa', borderRadius: '12px', padding: '20px', border: '1px solid #dee2e6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Suggested Guesses</span>
            {guesses.length > 0 && <span style={{ color: '#6aaa64', fontSize: '1rem', background: '#e2f0e1', padding: '4px 10px', borderRadius: '20px' }}>{suggestions.length} possible</span>}
          </h3>
          
          {guesses.length === 0 ? (
            <p style={{ margin: 0, color: '#495057', lineHeight: '1.5' }}>Enter your first guess to see suggestions. Mathematically optimal starting words include <strong>ROAST</strong>, <strong>CRANE</strong>, and <strong>SLATE</strong>.</p>
          ) : suggestions.length === 0 ? (
            <p style={{ margin: 0, color: '#dc3545', fontWeight: 'bold' }}>No words match these clues. Please double-check your colours!</p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxHeight: '250px', overflowY: 'auto', paddingRight: '5px' }}>
              {suggestions.slice(0, 100).map(word => (
                <span key={word} style={{ padding: '8px 12px', background: 'white', border: '1px solid #ced4da', borderRadius: '6px', fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#1a1a1b' }}>
                  {word}
                </span>
              ))}
              {suggestions.length > 100 && (
                <span style={{ padding: '8px 12px', color: '#6c757d', fontSize: '0.95rem', display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                  + {suggestions.length - 100} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* On-screen Keyboard */}
        <div style={{ width: '100%', maxWidth: '500px', margin: '10px 0 30px' }}>
          <Keyboard onKey={handleKey} keyStates={keyStates} />
        </div>
      </div>
    </div>
  );
}
