'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getDailyWord } from './words';
import Breadcrumbs from './components/Breadcrumbs';
import { recordTodayWord, fetchPastWords } from './dailyWordleService';
import { getNYTDate, getWordleNumber } from './dateUtils';

const CONTENT = {
  es: {
    title: 'Pistas Wordle de Hoy',
    titleWithDate: (date) => `Pistas Wordle de Hoy – Pistas y Solución para ${date}`,
    intro:
      'Descubre pistas guiadas paso a paso y sin spoilers para la Palabra del Día: categoría gramatical, conteo de vocales, letra inicial, letra final y la respuesta de hoy. Actualizado diariamente.',
    difficulty: 'Dificultad de Hoy',
    unlockNext: 'Desbloquear siguiente pista',
    unlockAll: 'Desbloquear todas las pistas',
    hideAll: 'Ocultar todas las pistas',
    hideAnswer: 'Ocultar Respuesta',
    revealAnswer: 'Revelar Respuesta de Hoy',
    copyAnswer: 'Copiar Palabra',
    copiedSuccess: '¡Palabra copiada al portapapeles!',
    playToday: 'Jugar Palabra del Día',
    pastAnswers: 'Historial de Palabras Anteriores',
    yesterdayTitle: 'Palabra de Ayer',
    puzzleNumber: 'Wordle',
    structuredHintsTitle: 'Pistas Progresivas (Sin Spoilers)',
    meaningTitle: 'Significado y Análisis de la Palabra',
    bestStartersTitle: 'Mejores Palabras para Empezar',
    tipsTitle: 'Estrategias y Consejos de Expertos',
    relatedGamesTitle: 'Otros Juegos y Modos',
    historyTitle: 'Sobre el Desafío Diario de Wordle',
    faqTitle: 'Preguntas Frecuentes',
    hintLabels: {
      category: 'Tipo de palabra',
      vowels: 'Vocales y Consonantes',
      start: 'Primera Letra',
      end: 'Última Letra',
      repeat: 'Letras Repetidas',
      length: 'Significado y Contexto'
    }
  }
};

const BEST_STARTERS = {
  es: [
    { word: 'AIRES', why: 'Cubre 4 vocales distintas (A, I, E) y la consonante de altísima frecuencia R.' },
    { word: 'CASOS', why: 'Prueba consonantes muy repetidas en español como C y S.' },
    { word: 'OREAS', why: 'Gran cobertura de vocales abiertas (O, E, A) más la letra R y S.' },
    { word: 'TENIA', why: 'Excelente equilibrio entre consonantes dentales (T, N) y tres vocales.' },
    { word: 'PARLO', why: 'Ideal para segundo intento si el primero no reveló suficientes consonantes.' }
  ]
};

const STRATEGY_TIPS = [
  {
    icon: '🎯',
    title: '1. Abre con 3 o 4 vocales distintas',
    desc: 'Palabras como AIRES, TENIA o OREAS te permiten descubrir rápidamente la estructura vocal de la palabra secreta.'
  },
  {
    icon: '🔄',
    title: '2. Reubica inmediatamente las pistas amarillas',
    desc: 'Si una letra sale en amarillo, cámbiala a una posición donde sea común en español (ej. la "R" o "L" al medio, "S" al final).'
  },
  {
    icon: '🚫',
    title: '3. No reutilices letras descartadas',
    desc: 'Las letras grises ya no aportan valor. Mantén tu teclado limpio y enfócate en el abanico de letras restantes.'
  },
  {
    icon: '🔁',
    title: '4. Sospecha de letras repetidas',
    desc: 'Muchas palabras en español contienen letras dobles (ej. CASAS, PERRO, LLAVE, BEBÉ). Si las letras no encajan, prueba duplicar.'
  },
  {
    icon: '🧠',
    title: '5. Aprovecha patrones y sufijos comunes',
    desc: 'Las terminaciones en -AR, -ER, -IR, -ON, -AS, -OS son las más habituales en vocablos españoles de 5 letras.'
  }
];

const RELATED_GAMES = [
  { name: 'Palabra del Día', to: '/palabra-del-dia/', desc: 'Juega al reto diario oficial en español.' },
  { name: 'Wordle Ilimitado', to: '/', desc: 'Partidas infinitas sin esperas de 24 horas.' },
  { name: 'Wordle Respuesta Hoy', to: '/wordle-respuesta-hoy/', desc: 'Guía y solución paso a paso del puzle diario.' }
];

const FAQS = {
  es: [
    {
      q: '¿Cómo funcionan las pistas progresivas sin spoilers?',
      a: 'Cada tarjeta revela una característica estructural aislada (como el tipo de palabra, número de vocales o letra inicial) para que puedas deducir la palabra tú mismo sin arruinar la diversión.'
    },
    {
      q: '¿A qué hora se renueva la Palabra del Día?',
      a: 'El reto diario se actualiza automáticamente cada medianoche (00:00) según tu hora local. Esta página de pistas se sincroniza en tiempo real.'
    },
    {
      q: '¿Cuál es la diferencia entre el modo Diario e Ilimitado?',
      a: 'En el modo Diario todos los jugadores resuelven la misma palabra única cada 24 horas. En el modo Ilimitado puedes jugar tantas partidas aleatorias como quieras para entrenar.'
    },
    {
      q: '¿Qué hago si me quedo atascado en el 5º intento?',
      a: 'Abre la Pista 4 (Letra Final) y la Pista 6 (Significado). Si aun así tienes dudas, pulsa el botón "Revelar Respuesta de Hoy" para mantener tu racha.'
    },
    {
      q: '¿Dónde puedo consultar palabras de días pasados?',
      a: 'En la sección "Palabra de Ayer" y en la lista de "Historial de Palabras Anteriores" encontrarás los retos de los últimos 14 días.'
    }
  ]
};

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

function analyseWord(word) {
  const upper = (word || '').toUpperCase();
  const letters = upper.split('');
  const vowelList = letters.filter((l) => VOWELS.has(l));
  const consonantList = letters.filter((l) => !VOWELS.has(l));
  const counts = letters.reduce((acc, l) => {
    acc[l] = (acc[l] || 0) + 1;
    return acc;
  }, {});
  const repeatedLetters = Object.keys(counts).filter((l) => counts[l] > 1);
  const repeated = repeatedLetters.length > 0;
  
  return {
    upper,
    letters,
    first: letters[0] || '',
    last: letters[letters.length - 1] || '',
    vowelCount: vowelList.length,
    consonantCount: consonantList.length,
    vowelList: [...new Set(vowelList)],
    consonantList: [...new Set(consonantList)],
    repeated,
    repeatedLetters,
    length: letters.length
  };
}

function buildStructuredHints(word, labels, dictData) {
  const info = analyseWord(word);
  
  const posMap = {
    noun: 'sustantivo (nombre)',
    verb: 'verbo (acción)',
    adjective: 'adjetivo (cualidad)'
  };
  const posEs = posMap[dictData?.partOfSpeech] || 'sustantivo / verbo común';
  const defEs = dictData?.definition || 'Palabra común de 5 letras presente en el vocabulario general del español.';

  return [
    {
      id: 'cat',
      num: 1,
      icon: '🏷️',
      title: labels.category,
      badge: 'Gramática',
      text: `La palabra de hoy funciona principalmente como un ${posEs}.`,
      detail: 'Identificar si es un objeto, verbo o adjetivo te ayudará a filtrar opciones gramaticales.'
    },
    {
      id: 'vow',
      num: 2,
      icon: '🔤',
      title: labels.vowels,
      badge: `${info.vowelCount} vocales`,
      text: `Tiene ${info.vowelCount} vocal${info.vowelCount === 1 ? '' : 'es'} (${info.vowelList.join(', ') || 'ninguna'}) y ${info.consonantCount} consonante${info.consonantCount === 1 ? '' : 's'}.`,
      detail: info.vowelCount >= 3 ? '¡Palabra con alto contenido vocálico!' : 'Palabra con mayor presencia de consonantes.'
    },
    {
      id: 'start',
      num: 3,
      icon: '🟢',
      title: labels.start,
      badge: `Empieza por "${info.first}"`,
      text: `La palabra comienza con la letra "${info.first}".`,
      detail: `Letra inicial: ${info.first}`,
      visualPattern: [info.first, '·', '·', '·', '·']
    },
    {
      id: 'end',
      num: 4,
      icon: '🎯',
      title: labels.end,
      badge: `Termina en "${info.last}"`,
      text: `La última letra de la palabra es "${info.last}".`,
      detail: `Letra final: ${info.last}`,
      visualPattern: ['·', '·', '·', '·', info.last]
    },
    {
      id: 'rep',
      num: 5,
      icon: '🔁',
      title: labels.repeat,
      badge: info.repeated ? 'Letras repetidas' : 'Todas únicas',
      text: info.repeated 
        ? `Sí — la palabra contiene letras repetidas (ej. letra "${info.repeatedLetters.join(', ')}").` 
        : 'No — todas las 5 letras de la palabra son completamente diferentes.',
      detail: info.repeated ? 'Ten cuidado con descartar letras ya acertadas.' : 'Cada casilla contiene una letra distinta.'
    },
    {
      id: 'len',
      num: 6,
      icon: '📖',
      title: labels.length,
      badge: 'Definición',
      text: `Significado: ${defEs}`,
      detail: 'Pista contextual basada en el diccionario.'
    }
  ];
}

function formatDate(d) {
  return d.toLocaleDateString('es-ES', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatShortDate(d) {
  return d.toLocaleDateString('es-ES', {
    month: 'short',
    day: 'numeric'
  });
}

function getDateSeed(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}${m}${day}`;
}

export default function HintsPage({ language = 'es', onBack }) {
  const [dailyData, setDailyData] = useState(null);
  const [unlockedHints, setUnlockedHints] = useState(() => new Set([0]));
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [yesterday, setYesterday] = useState(null);
  const [targetDate, setTargetDate] = useState(() => getNYTDate());
  const [openFaq, setOpenFaq] = useState(null);
  const [dictionaryData, setDictionaryData] = useState({
    partOfSpeech: '',
    definition: '',
    example: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const seed = params.get('seed');
    let target = getNYTDate();

    if (seed && /^\d{8}$/.test(seed)) {
      const y = seed.substring(0, 4);
      const m = seed.substring(4, 6);
      const d = seed.substring(6, 8);
      target = new Date(y, m - 1, d);
    }
    setTargetDate(target);

    const data = getDailyWord('es', target);
    setDailyData(data);

    recordTodayWord('es', target);

    fetchPastWords('es', target, 14).then((rows) => {
      setHistory(rows);
      setYesterday(rows[0] || null);
    });
  }, [language]);

  const c = CONTENT.es;

  const prevDate = useMemo(() => {
    const d = new Date(targetDate);
    d.setDate(d.getDate() - 1);
    return d;
  }, [targetDate]);

  const nextDate = useMemo(() => {
    const d = new Date(targetDate);
    d.setDate(d.getDate() + 1);
    return d;
  }, [targetDate]);

  const todayDate = useMemo(() => getNYTDate(), []);
  const hasNextDay = nextDate <= todayDate;

  const structuredHints = useMemo(() => {
    if (!dailyData) return [];
    return buildStructuredHints(dailyData.word, c.hintLabels, dictionaryData);
  }, [dailyData, c.hintLabels, dictionaryData]);

  const formattedDate = useMemo(() => formatDate(targetDate), [targetDate]);

  if (!dailyData) return null;

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Easy': return '#63AF4E';
      case 'Medium': return '#D4A843';
      case 'Hard': return '#E05D52';
      case 'Ultra-Hard': return '#9B51E0';
      default: return '#7A8199';
    }
  };

  const translateDifficulty = (diff) => {
    switch (diff) {
      case 'Easy': return 'Fácil';
      case 'Medium': return 'Media';
      case 'Hard': return 'Difícil';
      case 'Ultra-Hard': return 'Extrema';
      default: return diff;
    }
  };

  const puzzleNumber = getWordleNumber(targetDate);

  const analyzeWordDifficulty = (word) => {
    if (!word) return { diff: 'Medium', reason: '' };
    const upper = word.toUpperCase();
    const rareLetters = ['Q', 'J', 'Z', 'X', 'V', 'K', 'W'];
    let rareCount = 0;
    let hasDuplicate = false;
    const counts = {};
    for (let char of upper) {
      if (rareLetters.includes(char)) rareCount++;
      counts[char] = (counts[char] || 0) + 1;
      if (counts[char] > 1) hasDuplicate = true;
    }
    const vowels = (upper.match(/[AEIOU]/g) || []).length;
    
    if (rareCount > 0 && hasDuplicate) return { diff: 'Ultra-Hard', score: 4, reason: `Contiene la letra poco común "${upper.split('').find(l => rareLetters.includes(l))}" y tiene letras repetidas.` };
    if (rareCount > 0) return { diff: 'Hard', score: 3, reason: `Contiene la consonante poco frecuente "${upper.split('').find(l => rareLetters.includes(l))}".` };
    if (hasDuplicate) return { diff: 'Medium', score: 2, reason: `Tiene al menos una letra repetida en el vocablo.` };
    if (vowels >= 3) return { diff: 'Easy', score: 1, reason: `Contiene múltiples vocales comunes que facilitan descartes rápidos.` };
    return { diff: 'Medium', score: 2, reason: `Palabra equilibrada con consonantes estándar y vocales habituales.` };
  };

  const diffAnalysis = analyzeWordDifficulty(dailyData.word);

  const difficultyScore = {
    Easy: '2.8 / 6',
    Medium: '3.6 / 6',
    Hard: '4.5 / 6',
    'Ultra-Hard': '5.2 / 6'
  }[diffAnalysis.diff] || '3.8 / 6';

  const avgGuesses = {
    Easy: '3.4',
    Medium: '4.1',
    Hard: '4.8',
    'Ultra-Hard': '5.3'
  }[diffAnalysis.diff] || '4.0';

  const toggleHint = (index) => {
    setUnlockedHints(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const unlockNextHint = () => {
    for (let i = 0; i < structuredHints.length; i++) {
      if (!unlockedHints.has(i)) {
        setUnlockedHints(prev => new Set([...prev, i]));
        break;
      }
    }
  };

  const unlockAllHints = () => {
    setUnlockedHints(new Set(structuredHints.map((_, i) => i)));
  };

  const hideAllHints = () => {
    setUnlockedHints(new Set());
  };

  const handleCopyAnswer = () => {
    if (!dailyData?.word) return;
    navigator.clipboard.writeText(dailyData.word.toUpperCase());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="hints-container">
      {/* Top Breadcrumbs */}
      <div className="hints-breadcrumbs-wrap">
        <Breadcrumbs
          language="es"
          items={[
            { name: 'Wordle Español', path: '/' },
            { name: 'Palabra del Día', path: '/palabra-del-dia/' },
            { name: 'Pistas de Hoy' }
          ]}
        />
      </div>

      {/* Hero Card */}
      <div className="hints-hero">
        <div className="hints-hero__badge-row">
          <span className="hints-hero__badge hints-hero__badge--puzzle">
            🧩 {c.puzzleNumber} #{puzzleNumber}
          </span>
          <span 
            className="hints-hero__badge hints-hero__badge--diff"
            style={{ background: getDifficultyColor(diffAnalysis.diff) }}
          >
            <span className="diff-dot"></span>
            Dificultad: {translateDifficulty(diffAnalysis.diff)} ({difficultyScore})
          </span>
          <span className="hints-hero__badge hints-hero__badge--avg">
            📊 Promedio: {avgGuesses} intentos
          </span>
        </div>

        <h1 className="hints-hero__title">
          {c.titleWithDate(formattedDate)}
        </h1>

        <p className="hints-hero__desc">
          {c.intro}
        </p>

        <div className="hints-hero__cta-row">
          {onBack ? (
            <button onClick={onBack} className="hints-hero__play-btn">
              <span>🎮</span> {c.playToday}
            </button>
          ) : (
            <Link href="/palabra-del-dia/" className="hints-hero__play-btn">
              <span>🎮</span> {c.playToday}
            </Link>
          )}

          <a href="#answer" className="hints-hero__jump-btn">
            👁️ Ir a la Solución
          </a>
        </div>

        {/* Date Navigation Bar (Yesterday / Tomorrow / Archive) */}
        <div className="hints-date-nav-row" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
          <Link href={`/wordle-respuesta-hoy/?seed=${getDateSeed(prevDate)}`} className="hints-chip" style={{ textDecoration: 'none' }}>
            ⬅️ Pistas de Ayer (#{puzzleNumber - 1})
          </Link>
          <Link href="/archive/" className="hints-chip" style={{ textDecoration: 'none' }}>
            📅 Archivo Completo
          </Link>
          {hasNextDay ? (
            <Link href={`/wordle-respuesta-hoy/?seed=${getDateSeed(nextDate)}`} className="hints-chip" style={{ textDecoration: 'none' }}>
              ➡️ Día Siguiente (#{puzzleNumber + 1})
            </Link>
          ) : (
            <Link href="/palabra-del-dia/" className="hints-chip" style={{ textDecoration: 'none', background: 'rgba(106, 170, 100, 0.15)', borderColor: '#6aaa64', color: '#538d4e' }}>
              🎯 Jugar Reto de Hoy en Vivo
            </Link>
          )}
        </div>
      </div>

      {/* Sticky Sub-nav / Quick Jump Chips */}
      <nav aria-label="Navegación de secciones" className="hints-nav-bar">
        <span className="hints-nav-bar__label">Saltar a:</span>
        <div className="hints-nav-bar__chips">
          <a href="#hints" className="hints-chip">💡 Pistas ({unlockedHints.size}/{structuredHints.length})</a>
          <a href="#answer" className="hints-chip">🔓 Solución</a>
          <a href="#meaning" className="hints-chip">📖 Significado</a>
          <a href="#yesterday" className="hints-chip">⏮️ Ayer</a>
          <a href="#past" className="hints-chip">📚 Historial</a>
          <a href="#starters" className="hints-chip">🚀 Aperturas</a>
          <a href="#tips" className="hints-chip">⚡ Consejos</a>
          <a href="#faq" className="hints-chip">❓ Preguntas</a>
        </div>
      </nav>

      {/* Main Progressive Clues Section */}
      <section id="hints" className="hints-card hints-card--highlight">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Desbloqueo Inteligente</div>
            <h2 className="hints-card__title">{c.structuredHintsTitle}</h2>
          </div>
          <div className="hints-progress-pill">
            <span className="hints-progress-pill__count">{unlockedHints.size} de {structuredHints.length}</span>
            <span className="hints-progress-pill__text">desbloqueadas</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="hints-meter">
          <div 
            className="hints-meter__fill" 
            style={{ width: `${(unlockedHints.size / structuredHints.length) * 100}%` }}
          />
        </div>

        {/* Quick Action Buttons */}
        <div className="hints-actions-bar">
          <button 
            type="button" 
            onClick={unlockNextHint}
            disabled={unlockedHints.size === structuredHints.length}
            className="hints-btn hints-btn--primary"
          >
            <span>🔓</span> {c.unlockNext}
          </button>
          
          {unlockedHints.size < structuredHints.length ? (
            <button 
              type="button" 
              onClick={unlockAllHints}
              className="hints-btn hints-btn--secondary"
            >
              {c.unlockAll}
            </button>
          ) : (
            <button 
              type="button" 
              onClick={hideAllHints}
              className="hints-btn hints-btn--secondary"
            >
              {c.hideAll}
            </button>
          )}
        </div>

        {/* Clues Grid */}
        <div className="hints-grid">
          {structuredHints.map((hint, idx) => {
            const isUnlocked = unlockedHints.has(idx);
            return (
              <div 
                key={hint.id} 
                className={`hint-item ${isUnlocked ? 'hint-item--unlocked' : 'hint-item--locked'}`}
                onClick={() => toggleHint(idx)}
              >
                <div className="hint-item__top">
                  <div className="hint-item__badge-box">
                    <span className="hint-item__num">Pista #{hint.num}</span>
                    <span className="hint-item__icon">{hint.icon}</span>
                  </div>
                  <div className="hint-item__status">
                    {isUnlocked ? (
                      <span className="status-tag status-tag--open">Revelada ✓</span>
                    ) : (
                      <span className="status-tag status-tag--locked">🔒 Toca para ver</span>
                    )}
                  </div>
                </div>

                <div className="hint-item__title">{hint.title}</div>

                {isUnlocked ? (
                  <div className="hint-item__content">
                    <p className="hint-item__text">{hint.text}</p>
                    {hint.visualPattern && (
                      <div className="hint-tiles-preview">
                        {hint.visualPattern.map((char, i) => (
                          <div 
                            key={i} 
                            className={`hint-tile ${char !== '·' ? 'hint-tile--correct' : 'hint-tile--empty'}`}
                          >
                            {char !== '·' ? char : ''}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="hint-item__detail">{hint.detail}</div>
                  </div>
                ) : (
                  <div className="hint-item__placeholder">
                    <div className="hint-placeholder-bar"></div>
                    <div className="hint-placeholder-bar hint-placeholder-bar--short"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Custom Hints from DB */}
        {Array.isArray(dailyData.hints) && dailyData.hints.length > 0 && (
          <div className="hints-extra">
            <h3 className="hints-extra__title">💡 Pistas Adicionales de la Comunidad:</h3>
            <ul className="hints-extra__list">
              {dailyData.hints.map((h, i) => (
                <li key={i} className="hints-extra__item">{h}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Answer Spoiler Section */}
      <section id="answer" className="hints-card hints-card--spoiler">
        <div className="spoiler-box">
          <div className="spoiler-box__icon">🛡️</div>
          <div className="spoiler-box__info">
            <h2 className="spoiler-box__title">Respuesta del Wordle de Hoy</h2>
            <p className="spoiler-box__desc">
              Zona protegida contra spoilers. Pulsa el botón únicamente si deseas ver la palabra resuelta directamente.
            </p>
          </div>

          <button 
            type="button"
            onClick={() => setShowAnswer(!showAnswer)}
            className={`spoiler-toggle-btn ${showAnswer ? 'spoiler-toggle-btn--active' : ''}`}
          >
            {showAnswer ? '🙈 Ocultar Respuesta' : '👁️ Mostrar Respuesta de Hoy'}
          </button>
        </div>

        {showAnswer && (
          <div className="spoiler-reveal-area" data-nosnippet>
            <div className="spoiler-tiles-row">
              {dailyData.word.toUpperCase().split('').map((letter, idx) => (
                <div 
                  key={idx} 
                  className="spoiler-tile"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  {letter}
                </div>
              ))}
            </div>

            <div className="spoiler-actions">
              <button 
                type="button" 
                onClick={handleCopyAnswer}
                className="spoiler-btn spoiler-btn--copy"
              >
                {copied ? '✓ ¡Copiada!' : '📋 Copiar Palabra'}
              </button>

              {onBack ? (
                <button onClick={onBack} className="spoiler-btn spoiler-btn--play">
                  🎮 Resolver en el Tablero
                </button>
              ) : (
                <Link href="/palabra-del-dia/" className="spoiler-btn spoiler-btn--play">
                  🎮 Resolver en el Tablero
                </Link>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Word Meaning & Linguistic Breakdown */}
      <section id="meaning" className="hints-card">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Lingüística y Contexto</div>
            <h2 className="hints-card__title">{c.meaningTitle}</h2>
          </div>
          <span className="diff-badge" style={{ background: getDifficultyColor(diffAnalysis.diff) }}>
            {translateDifficulty(diffAnalysis.diff)}
          </span>
        </div>

        <div className="word-analysis-box">
          <div className="word-analysis-grid">
            <div className="analysis-card">
              <div className="analysis-card__label">Longitud</div>
              <div className="analysis-card__val">5 Letras</div>
            </div>
            <div className="analysis-card">
              <div className="analysis-card__label">Vocales</div>
              <div className="analysis-card__val">{analyseWord(dailyData.word).vowelCount} de 5</div>
            </div>
            <div className="analysis-card">
              <div className="analysis-card__label">Letras Repetidas</div>
              <div className="analysis-card__val">
                {analyseWord(dailyData.word).repeated ? 'Sí' : 'Ninguna'}
              </div>
            </div>
            <div className="analysis-card">
              <div className="analysis-card__label">Dificultad Estimada</div>
              <div className="analysis-card__val">{difficultyScore}</div>
            </div>
          </div>

          <div className="analysis-explanation">
            <h3 className="analysis-explanation__title">¿Por qué este nivel de dificultad?</h3>
            <p className="analysis-explanation__text">{diffAnalysis.reason}</p>
          </div>

          {dailyData.definition && (
            <div className="analysis-definition">
              <h3 className="analysis-definition__title">Definición General:</h3>
              <p className="analysis-definition__text">"{dailyData.definition}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Yesterday's Word Spotlight */}
      <section id="yesterday" className="hints-card hints-card--yesterday">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Edición Anterior</div>
            <h2 className="hints-card__title">{c.yesterdayTitle}</h2>
          </div>
          <span className="yesterday-date">
            {yesterday?.puzzle_date ? formatShortDate(new Date(yesterday.puzzle_date)) : 'Ayer'}
          </span>
        </div>

        {yesterday ? (
          <div className="yesterday-box">
            <div className="yesterday-tiles-wrap">
              {(yesterday.word || '').toUpperCase().split('').map((letter, idx) => (
                <div key={idx} className="yesterday-tile">
                  {letter}
                </div>
              ))}
            </div>
            <div className="yesterday-meta">
              <span className="yesterday-badge">
                Dificultad: {translateDifficulty(analyzeWordDifficulty(yesterday.word).diff)}
              </span>
              <span className="yesterday-sub">
                {c.puzzleNumber} #{getWordleNumber(new Date(yesterday.puzzle_date || targetDate))}
              </span>
            </div>
          </div>
        ) : (
          <p className="loading-text">Cargando datos de ayer...</p>
        )}
      </section>

      {/* Past 14 Days History Archive */}
      <section id="past" className="hints-card">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Archivo Histórico</div>
            <h2 className="hints-card__title">{c.pastAnswers} (Últimos 14 Días)</h2>
          </div>
        </div>

        <div className="history-list">
          {history.map((item, idx) => {
            const dateObj = item.puzzle_date 
              ? new Date(item.puzzle_date) 
              : (() => { const d = new Date(targetDate); d.setDate(d.getDate() - (idx + 1)); return d; })();
            const itemDiff = analyzeWordDifficulty(item.word).diff;

            return (
              <Link 
                key={(item.puzzle_date || idx) + '-' + (item.word || idx)} 
                href={`/wordle-respuesta-hoy/?seed=${getDateSeed(dateObj)}`}
                className="history-row history-row--link"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', cursor: 'pointer' }}
              >
                <div className="history-row__left">
                  <span className="history-row__num">#{getWordleNumber(dateObj)}</span>
                  <span className="history-row__date">{formatDate(dateObj)}</span>
                </div>
                <div className="history-row__right">
                  <span 
                    className="history-row__diff"
                    style={{ color: getDifficultyColor(itemDiff) }}
                  >
                    {translateDifficulty(itemDiff)}
                  </span>
                  <span className="history-row__word">
                    {(item.word || '').toUpperCase()}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Best Starter Words */}
      <section id="starters" className="hints-card">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Optimiza tus Partidas</div>
            <h2 className="hints-card__title">{c.bestStartersTitle}</h2>
          </div>
        </div>

        <p className="starters-intro">
          Una palabra inicial óptima debe contener consonantes frecuentes (R, S, T, C, L) y al menos 3 vocales distintas:
        </p>

        <div className="starters-grid">
          {BEST_STARTERS.es.map((item) => (
            <div key={item.word} className="starter-card">
              <div className="starter-tiles">
                {item.word.split('').map((char, i) => (
                  <span key={i} className="starter-mini-tile">{char}</span>
                ))}
              </div>
              <p className="starter-why">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Tips */}
      <section id="tips" className="hints-card">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Guía Táctica</div>
            <h2 className="hints-card__title">{c.tipsTitle}</h2>
          </div>
        </div>

        <div className="tips-grid">
          {STRATEGY_TIPS.map((tip, idx) => (
            <div key={idx} className="tip-card">
              <div className="tip-card__icon">{tip.icon}</div>
              <div className="tip-card__body">
                <h3 className="tip-card__title">{tip.title}</h3>
                <p className="tip-card__desc">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Modes & Games */}
      <section id="related" className="hints-card">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Modos Disponibles</div>
            <h2 className="hints-card__title">{c.relatedGamesTitle}</h2>
          </div>
        </div>

        <div className="related-grid">
          {RELATED_GAMES.map((g) => (
            <Link key={g.to} href={g.to} className="related-card">
              <div className="related-card__name">{g.name} →</div>
              <div className="related-card__desc">{g.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faq" className="hints-card">
        <div className="hints-card__header">
          <div>
            <div className="hints-card__subtitle">Dudas Comunes</div>
            <h2 className="hints-card__title">{c.faqTitle}</h2>
          </div>
        </div>

        <div className="faq-accordion">
          {FAQS.es.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-trigger"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-chevron">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Toast Notification */}
      {copied && (
        <div className="hints-toast">
          ✓ {c.copiedSuccess}
        </div>
      )}

      {/* Scoped Clean CSS Styles (Flat, No Box Shadows, Matching Homepage Green #63AF4E) */}
      <style>{`
        .hints-container {
          max-width: 880px;
          margin: 0 auto;
          padding: 10px 16px 80px;
          font-family: inherit;
          color: var(--color-text-dark, #252A34);
          line-height: 1.6;
          position: relative;
        }

        .hints-breadcrumbs-wrap {
          margin-bottom: 16px;
        }

        /* Hero Header */
        .hints-hero {
          position: relative;
          background: rgba(99, 175, 78, 0.08);
          border: 1px solid rgba(99, 175, 78, 0.3);
          border-radius: 14px;
          padding: 24px 20px;
          margin-bottom: 20px;
          box-shadow: none;
        }

        .hints-hero__badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }

        .hints-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          box-shadow: none;
        }

        .hints-hero__badge--diff {
          color: #ffffff;
          border: none;
        }

        .diff-dot {
          width: 7px;
          height: 7px;
          background: #ffffff;
          border-radius: 50%;
          display: inline-block;
        }

        .hints-hero__title {
          font-size: clamp(1.5rem, 3.5vw, 1.9rem);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 10px 0;
          color: var(--color-text-dark, #252A34);
        }

        .hints-hero__desc {
          font-size: 1rem;
          color: var(--color-text-secondary, #7A8199);
          margin: 0 0 18px 0;
          max-width: 720px;
        }

        .hints-hero__cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hints-hero__play-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff !important;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-correct, #63AF4E);
          cursor: pointer;
          transition: background 0.15s ease, opacity 0.15s ease;
          box-shadow: none;
        }

        .hints-hero__play-btn:hover {
          background: #549a41;
          opacity: 0.95;
          box-shadow: none;
        }

        .hints-hero__jump-btn {
          display: inline-flex;
          align-items: center;
          background: var(--color-surface, #ffffff);
          color: var(--color-text-dark, #252A34) !important;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-border, #DCE1ED);
          transition: background 0.15s ease;
          box-shadow: none;
        }

        .hints-hero__jump-btn:hover {
          background: var(--color-tab-bg, #EBEDF3);
          box-shadow: none;
        }

        /* Nav Quick Chips */
        .hints-nav-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          padding: 6px 0;
          margin-bottom: 20px;
          scrollbar-width: none;
        }

        .hints-nav-bar::-webkit-scrollbar {
          display: none;
        }

        .hints-nav-bar__label {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-secondary, #7A8199);
          white-space: nowrap;
        }

        .hints-nav-bar__chips {
          display: flex;
          gap: 6px;
        }

        .hints-chip {
          display: inline-block;
          padding: 5px 12px;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text, #414A5E) !important;
          text-decoration: none !important;
          white-space: nowrap;
          transition: border-color 0.15s ease, color 0.15s ease;
          box-shadow: none;
        }

        .hints-chip:hover {
          border-color: var(--color-correct, #63AF4E);
          color: var(--color-correct, #63AF4E) !important;
          box-shadow: none;
        }

        /* Common Card Style */
        .hints-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 14px;
          padding: 22px 20px;
          margin-bottom: 20px;
          box-shadow: none;
        }

        .hints-card--highlight {
          border-color: rgba(99, 175, 78, 0.45);
        }

        .hints-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .hints-card__subtitle {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-correct, #63AF4E);
          margin-bottom: 2px;
        }

        .hints-card__title {
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0;
          color: var(--color-text-dark, #252A34);
        }

        /* Progress Pill */
        .hints-progress-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(99, 175, 78, 0.12);
          border: 1px solid rgba(99, 175, 78, 0.3);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          box-shadow: none;
        }

        .hints-progress-pill__count {
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
        }

        .hints-progress-pill__text {
          font-weight: 600;
          color: var(--color-text-secondary, #7A8199);
        }

        /* Meter */
        .hints-meter {
          width: 100%;
          height: 6px;
          background: var(--color-tab-bg, #EBEDF3);
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 16px;
          box-shadow: none;
        }

        .hints-meter__fill {
          height: 100%;
          background: var(--color-correct, #63AF4E);
          transition: width 0.3s ease;
        }

        /* Actions Bar */
        .hints-actions-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .hints-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease, opacity 0.15s ease;
          border: none;
          box-shadow: none;
        }

        .hints-btn--primary {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border: 1px solid var(--color-correct, #63AF4E);
        }

        .hints-btn--primary:hover:not(:disabled) {
          background: #549a41;
          box-shadow: none;
        }

        .hints-btn--primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .hints-btn--secondary {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34);
          border: 1px solid var(--color-border, #DCE1ED);
        }

        .hints-btn--secondary:hover {
          background: #dfe2ea;
          box-shadow: none;
        }

        /* Clues Grid */
        .hints-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }

        .hint-item {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 10px;
          padding: 14px;
          cursor: pointer;
          transition: border-color 0.15s ease;
          display: flex;
          flex-direction: column;
          box-shadow: none;
        }

        .hint-item:hover {
          border-color: var(--color-correct, #63AF4E);
          box-shadow: none;
        }

        .hint-item--unlocked {
          background: var(--color-surface, #ffffff);
          border-color: rgba(99, 175, 78, 0.45);
        }

        .hint-item__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .hint-item__badge-box {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hint-item__num {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--color-correct, #63AF4E);
          background: rgba(99, 175, 78, 0.12);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .hint-item__icon {
          font-size: 15px;
        }

        .status-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          box-shadow: none;
        }

        .status-tag--open {
          background: #dcfce7;
          color: #15803d;
        }

        .status-tag--locked {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-secondary, #7A8199);
        }

        .hint-item__title {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
          margin-bottom: 6px;
        }

        .hint-item__content {
          animation: fadeIn 0.25s ease-out;
        }

        .hint-item__text {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text, #414A5E);
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .hint-item__detail {
          font-size: 12px;
          color: var(--color-text-secondary, #7A8199);
        }

        .hint-tiles-preview {
          display: flex;
          gap: 4px;
          margin-bottom: 8px;
        }

        .hint-tile {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 800;
          text-transform: uppercase;
          box-shadow: none;
        }

        .hint-tile--correct {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
        }

        .hint-tile--empty {
          background: var(--color-tab-bg, #EBEDF3);
          border: 1px dashed var(--color-border, #DCE1ED);
        }

        .hint-item__placeholder {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding-top: 4px;
        }

        .hint-placeholder-bar {
          height: 10px;
          background: var(--color-tab-bg, #EBEDF3);
          border-radius: 4px;
          width: 100%;
        }

        .hint-placeholder-bar--short {
          width: 60%;
        }

        .hints-extra {
          margin-top: 20px;
          padding: 14px;
          background: var(--color-bg, #F5F5F4);
          border-radius: 8px;
          border-left: 4px solid var(--color-correct, #63AF4E);
          box-shadow: none;
        }

        .hints-extra__title {
          font-size: 13px;
          font-weight: 700;
          margin: 0 0 6px 0;
        }

        .hints-extra__list {
          margin: 0;
          padding-left: 18px;
          font-size: 13px;
          color: var(--color-text, #414A5E);
        }

        .hints-extra__item {
          margin-bottom: 3px;
        }

        /* Spoiler Section */
        .hints-card--spoiler {
          border: 1px dashed rgba(224, 93, 82, 0.4);
          background: rgba(224, 93, 82, 0.03);
          box-shadow: none;
        }

        .spoiler-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .spoiler-box__icon {
          font-size: 2rem;
        }

        .spoiler-box__info {
          flex: 1;
          min-width: 220px;
        }

        .spoiler-box__title {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0 0 3px 0;
          color: var(--color-text-dark, #252A34);
        }

        .spoiler-box__desc {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
          margin: 0;
        }

        .spoiler-toggle-btn {
          background: #E05D52;
          color: #ffffff;
          border: 1px solid #E05D52;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease;
          box-shadow: none;
        }

        .spoiler-toggle-btn:hover {
          background: #cc493e;
          box-shadow: none;
        }

        .spoiler-toggle-btn--active {
          background: var(--color-text-secondary, #7A8199);
          border-color: var(--color-text-secondary, #7A8199);
        }

        .spoiler-reveal-area {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border, #DCE1ED);
          text-align: center;
          animation: slideDown 0.25s ease-out;
        }

        .spoiler-tiles-row {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .spoiler-tile {
          width: 52px;
          height: 52px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 800;
          box-shadow: none;
          animation: flipTile 0.4s ease-out both;
        }

        .spoiler-actions {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .spoiler-btn {
          padding: 9px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease;
          text-decoration: none !important;
          box-shadow: none;
        }

        .spoiler-btn--copy {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34);
          border: 1px solid var(--color-border, #DCE1ED);
        }

        .spoiler-btn--copy:hover {
          background: #dfe2ea;
          box-shadow: none;
        }

        .spoiler-btn--play {
          background: var(--color-correct, #63AF4E);
          color: #ffffff !important;
          border: 1px solid var(--color-correct, #63AF4E);
        }

        .spoiler-btn--play:hover {
          background: #549a41;
          box-shadow: none;
        }

        /* Word Analysis Grid */
        .word-analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
          margin-bottom: 16px;
        }

        .analysis-card {
          background: var(--color-bg, #F5F5F4);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid var(--color-border, #DCE1ED);
          text-align: center;
          box-shadow: none;
        }

        .analysis-card__label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-secondary, #7A8199);
          margin-bottom: 2px;
        }

        .analysis-card__val {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-text-dark, #252A34);
        }

        .analysis-explanation,
        .analysis-definition {
          background: var(--color-bg, #F5F5F4);
          padding: 14px;
          border-radius: 8px;
          border-left: 4px solid var(--color-correct, #63AF4E);
          margin-top: 10px;
          box-shadow: none;
        }

        .analysis-explanation__title,
        .analysis-definition__title {
          font-size: 13px;
          font-weight: 800;
          margin: 0 0 3px 0;
        }

        .analysis-explanation__text,
        .analysis-definition__text {
          font-size: 13px;
          color: var(--color-text, #414A5E);
          margin: 0;
        }

        .diff-badge {
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          box-shadow: none;
        }

        /* Yesterday's Card */
        .yesterday-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          padding: 14px;
          background: rgba(99, 175, 78, 0.08);
          border: 1px solid rgba(99, 175, 78, 0.25);
          border-radius: 10px;
          box-shadow: none;
        }

        .yesterday-tiles-wrap {
          display: flex;
          gap: 5px;
        }

        .yesterday-tile {
          width: 40px;
          height: 40px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          box-shadow: none;
        }

        .yesterday-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
        }

        .yesterday-badge {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          box-shadow: none;
        }

        .yesterday-sub {
          font-size: 11px;
          color: var(--color-text-secondary, #7A8199);
          font-weight: 600;
        }

        /* History List */
        .history-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .history-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .history-row:hover {
          border-color: var(--color-correct, #63AF4E);
          background: var(--color-surface, #ffffff);
          box-shadow: none;
        }

        .history-row__left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .history-row__num {
          font-size: 11px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          background: rgba(99, 175, 78, 0.12);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .history-row__date {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-text, #414A5E);
        }

        .history-row__right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .history-row__diff {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .history-row__word {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--color-text-dark, #252A34);
        }

        /* Best Starters */
        .starters-intro {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
          margin-bottom: 12px;
        }

        .starters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
        }

        .starter-card {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          padding: 12px;
          box-shadow: none;
        }

        .starter-tiles {
          display: flex;
          gap: 4px;
          margin-bottom: 6px;
        }

        .starter-mini-tile {
          width: 26px;
          height: 26px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          box-shadow: none;
        }

        .starter-why {
          font-size: 12px;
          color: var(--color-text, #414A5E);
          margin: 0;
          line-height: 1.4;
        }

        /* Tips */
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 10px;
        }

        .tip-card {
          display: flex;
          gap: 10px;
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          padding: 12px;
          box-shadow: none;
        }

        .tip-card__icon {
          font-size: 1.6rem;
        }

        .tip-card__title {
          font-size: 13px;
          font-weight: 800;
          margin: 0 0 3px 0;
          color: var(--color-text-dark, #252A34);
        }

        .tip-card__desc {
          font-size: 12px;
          color: var(--color-text-secondary, #7A8199);
          margin: 0;
          line-height: 1.4;
        }

        /* Related Grid */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
        }

        .related-card {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 10px;
          padding: 14px;
          text-decoration: none !important;
          color: inherit !important;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .related-card:hover {
          border-color: var(--color-correct, #63AF4E);
          box-shadow: none;
        }

        .related-card__name {
          font-size: 14px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          margin-bottom: 3px;
        }

        .related-card__desc {
          font-size: 12px;
          color: var(--color-text-secondary, #7A8199);
        }

        /* FAQ */
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .faq-item--open {
          border-color: var(--color-correct, #63AF4E);
          background: var(--color-surface, #ffffff);
          box-shadow: none;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px;
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
          cursor: pointer;
        }

        .faq-chevron {
          font-size: 16px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          margin-left: 10px;
        }

        .faq-answer {
          padding: 0 14px 14px;
          font-size: 13px;
          color: var(--color-text, #414A5E);
          line-height: 1.5;
        }

        .faq-answer p {
          margin: 0;
        }

        /* Toast */
        .hints-toast {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: #252A34;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: none;
          z-index: 9999;
          animation: toastIn 0.25s ease-out;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flipTile {
          0% { transform: rotateX(-90deg); opacity: 0; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @media (max-width: 600px) {
          .hints-hero {
            padding: 18px 14px;
          }
          .hints-card {
            padding: 16px 12px;
          }
          .spoiler-tile {
            width: 44px;
            height: 44px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
