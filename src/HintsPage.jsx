'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getDailyWord } from './words';
import Breadcrumbs from './components/Breadcrumbs';
import { recordTodayWord, fetchPastWords } from './dailyWordleService';


import { getNYTDate, getWordleNumber } from './dateUtils';

const CONTENT = {
  en: {
    title: 'Wordle Hints Today',
    titleWithDate: (date) => `Wordle Hints Today – Clues & Answer for ${date}`,
    intro:
      "Need today's Wordle hints without spoilers? Get categorized clues, a starting-letter hint, a vowel hint, a difficulty score and today's Wordle answer — all updated daily.",
    difficulty: "Today's Difficulty",
    unlockHint: (n) => `Click to unlock Hint #${n}`,
    hideAnswer: 'Hide Answer',
    revealAnswer: 'Show Today\'s Wordle Answer',
    pastAnswers: 'Past Wordle Answers',
    yesterdayTitle: "Yesterday's Wordle Answer",
    puzzleNumber: 'Wordle',
    structuredHintsTitle: 'Today\'s Wordle Hints (No Spoilers)',
    meaningTitle: 'Meaning of Today\'s Wordle Answer',
    bestStartersTitle: 'Best Wordle Starting Words',
    tipsTitle: 'Wordle Tips & Strategy',
    relatedGamesTitle: 'More Word Games to Try',
    historyTitle: 'About Wordle & The Daily Puzzle',
    faqTitle: 'Wordle Today – FAQs',
    hintLabels: {
      category: 'Hint 1 — Part of Speech',
      vowels: 'Hint 2 — Vowel Count',
      start: 'Hint 3 — Starting Letter',
      end: 'Hint 4 — Ending Letter',
      repeat: 'Hint 5 — Repeated Letters?',
      length: 'Hint 6 — Meaning'
    }
  },
  uk: {
    title: 'Wordle Hints Today',
    titleWithDate: (date) => `Wordle Hints Today – Clues & Answer for ${date}`,
    intro:
      "Need today's UK Wordle hints without spoilers? Get clues, starting-letter hints, vowel hints, the difficulty score and today's Wordle answer — refreshed every day for British English players.",
    difficulty: "Today's Difficulty",
    unlockHint: (n) => `Click to unlock Hint #${n}`,
    hideAnswer: 'Hide Answer',
    revealAnswer: 'Show Today\'s Wordle Answer',
    pastAnswers: 'Past Wordle Answers',
    yesterdayTitle: "Yesterday's Wordle Answer",
    puzzleNumber: 'Wordle',
    structuredHintsTitle: 'Today\'s Wordle Hints (No Spoilers)',
    meaningTitle: 'Meaning of Today\'s Wordle Answer',
    bestStartersTitle: 'Best Wordle Starting Words',
    tipsTitle: 'Wordle Tips & Strategy',
    relatedGamesTitle: 'More Word Games to Try',
    historyTitle: 'About Wordle & The Daily Puzzle',
    faqTitle: 'Wordle Today – FAQs',
    hintLabels: {
      category: 'Hint 1 — Part of Speech',
      vowels: 'Hint 2 — Vowel Count',
      start: 'Hint 3 — Starting Letter',
      end: 'Hint 4 — Ending Letter',
      repeat: 'Hint 5 — Repeated Letters?',
      length: 'Hint 6 — Meaning'
    }
  },
  es: {
    title: 'Pistas Wordle de Hoy',
    titleWithDate: (date) => `Pistas Wordle de Hoy – Pistas y Respuesta para ${date}`,
    intro:
      'Pistas de la Palabra del Día sin spoilers: categoría, número de vocales, letra inicial, dificultad y la respuesta del Wordle de hoy. Actualizado todos los días.',
    difficulty: 'Dificultad de Hoy',
    unlockHint: (n) => `Haz clic para desbloquear Pista #${n}`,
    hideAnswer: 'Ocultar Respuesta',
    revealAnswer: 'Mostrar Respuesta de Hoy',
    pastAnswers: 'Respuestas Anteriores de Wordle',
    yesterdayTitle: 'Wordle de Ayer',
    puzzleNumber: 'Wordle',
    structuredHintsTitle: 'Pistas de Hoy (Sin Spoilers)',
    meaningTitle: 'Significado de la Palabra de Hoy',
    bestStartersTitle: 'Mejores Palabras para Empezar',
    tipsTitle: 'Consejos y Estrategia',
    relatedGamesTitle: 'Más Juegos de Palabras',
    historyTitle: 'Sobre Wordle y el Puzle Diario',
    faqTitle: 'Wordle de Hoy – Preguntas Frecuentes',
    hintLabels: {
      category: 'Pista 1 — Tipo de palabra',
      vowels: 'Pista 2 — Número de Vocales',
      start: 'Pista 3 — Letra Inicial',
      end: 'Pista 4 — Letra Final',
      repeat: 'Pista 5 — ¿Letras Repetidas?',
      length: 'Pista 6 — Significado'
    }
  }
};

const BEST_STARTERS = {
  en: [
    { word: 'CRANE', why: 'Covers common consonants C, R, N plus 2 well-placed vowels.' },
    { word: 'SLATE', why: 'High-frequency letters and a strong vowel pair (A, E).' },
    { word: 'TRACE', why: 'Hits the most common English letters by frequency.' },
    { word: 'AUDIO', why: 'Best vowel-heavy opener — eliminates 4 vowels in one go.' },
    { word: 'RAISE', why: 'Strong second guess after a vowel-heavy opener.' }
  ],
  uk: [
    { word: 'CRANE', why: 'Covers common consonants C, R, N plus 2 well-placed vowels.' },
    { word: 'SLATE', why: 'High-frequency letters and a strong vowel pair (A, E).' },
    { word: 'STARE', why: 'Excellent UK English opener, hits 4 top-10 letters.' },
    { word: 'AUDIO', why: 'Best vowel-heavy opener — eliminates 4 vowels in one go.' },
    { word: 'RAISE', why: 'Strong second guess after a vowel-heavy opener.' }
  ],
  es: [
    { word: 'AIRES', why: 'Cubre cuatro vocales y la consonante R, muy común.' },
    { word: 'CASOS', why: 'Letras de alta frecuencia en español.' },
    { word: 'OREAS', why: 'Cuatro vocales para descartar rápidamente.' },
    { word: 'TENIA', why: 'Mezcla letras frecuentes T, N y vocales.' },
    { word: 'PARLO', why: 'Buen segundo intento con consonantes fuertes.' }
  ]
};

const TIPS = {
  en: [
    'Open with a word that has at least 3 unique vowels — AUDIO, ADIEU, OUIJA — to map the skeleton fast.',
    'Avoid burning two guesses on words that share repeated letters early in the game.',
    'After two guesses, eliminate consonants aggressively (try CHUNK, GLYPH, JUMPY).',
    'Use yellow letters to reposition rather than re-guessing the same pattern.',
    'In hard mode, keep every confirmed green/yellow locked — it forces sharper deductions.'
  ],
  uk: [
    'Open with a word that has at least 3 unique vowels — AUDIO, ADIEU, OUIJA — to map the skeleton fast.',
    'Avoid burning two guesses on words that share repeated letters early in the game.',
    'After two guesses, eliminate consonants aggressively (try CHUNK, GLYPH, JUMPY).',
    'Use yellow letters to reposition rather than re-guessing the same pattern.',
    'In hard mode, keep every confirmed green/yellow locked — it forces sharper deductions.'
  ],
  es: [
    'Empieza con una palabra con muchas vocales: AIRES, OUIJA, AÚLLA, para mapear el esqueleto rápido.',
    'Evita gastar dos intentos con letras repetidas al inicio.',
    'Después de dos intentos, descarta consonantes en bloque.',
    'Aprovecha las letras amarillas para reposicionarlas, no para repetir el mismo patrón.',
    'En modo difícil, bloquea verdes y amarillas — fuerza deducciones más afiladas.'
  ]
};

const RELATED_GAMES = [
  { name: 'Wordle Today', to: '/wordle-today/', desc: 'Play today\'s daily Wordle puzzle.' },
  { name: 'Wordle Unlimited', to: '/', desc: 'Unlimited rounds — no daily cap.' },
  { name: 'UK Wordle', to: '/', desc: 'British English version of Wordle.' },
  { name: 'Wordle Español', to: '/es/', desc: 'Palabra del día en español.' }
];

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

function analyseWord(word) {
  const upper = (word || '').toUpperCase();
  const letters = upper.split('');
  const vowelCount = letters.filter((l) => VOWELS.has(l)).length;
  const consonantCount = letters.length - vowelCount;
  const counts = letters.reduce((acc, l) => {
    acc[l] = (acc[l] || 0) + 1;
    return acc;
  }, {});
  const repeated = Object.values(counts).some((c) => c > 1);
  const uniqueLetters = Object.keys(counts).length;
  return {
    upper,
    first: letters[0] || '',
    last: letters[letters.length - 1] || '',
    vowelCount,
    consonantCount,
    repeated,
    uniqueLetters,
    length: letters.length
  };
}

function buildStructuredHints(word, language, labels, dictData) {
  const info = analyseWord(word);
  
  const posEn = dictData?.partOfSpeech || 'noun / verb / adjective';
  const defEn = dictData?.definition || 'A common five-letter word used in everyday conversation.';
  const posEs = dictData?.partOfSpeech === 'noun' ? 'sustantivo' : dictData?.partOfSpeech === 'verb' ? 'verbo' : dictData?.partOfSpeech === 'adjective' ? 'adjetivo' : 'sustantivo / verbo / adjetivo';
  const defEs = dictData?.definition || 'Una palabra común de cinco letras usada en la conversación diaria.';

  if (language === 'es') {
    return [
      { label: labels.category, text: `La respuesta se usa comúnmente como un ${posEs}.` },
      { label: labels.vowels, text: `Contiene ${info.vowelCount} vocal${info.vowelCount === 1 ? '' : 'es'} y ${info.consonantCount} consonante${info.consonantCount === 1 ? '' : 's'}.` },
      { label: labels.start, text: `La palabra comienza con la letra "${info.first}".` },
      { label: labels.end, text: `La palabra termina con la letra "${info.last}".` },
      { label: labels.repeat, text: info.repeated ? 'Sí — contiene una letra repetida.' : 'No — todas las letras son únicas.' },
      { label: labels.length, text: `Significado: ${defEs}` }
    ];
  }

  return [
    { label: labels.category, text: `The answer is commonly used as a ${posEn}.` },
    { label: labels.vowels, text: `It contains ${info.vowelCount} vowel${info.vowelCount === 1 ? '' : 's'} and ${info.consonantCount} consonant${info.consonantCount === 1 ? '' : 's'}.` },
    { label: labels.start, text: `Today's Wordle starts with the letter "${info.first}".` },
    { label: labels.end, text: `Today's Wordle ends with the letter "${info.last}".` },
    { label: labels.repeat, text: info.repeated ? 'Yes — today\'s word has a repeated letter.' : 'No — every letter in today\'s word is unique.' },
    { label: labels.length, text: `Meaning: ${defEn}` }
  ];
}

function formatDate(d, language) {
  return d.toLocaleDateString(language === 'es' ? 'es-ES' : language === 'uk' ? 'en-GB' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatShortDate(d, language) {
  return d.toLocaleDateString(language === 'es' ? 'es-ES' : language === 'uk' ? 'en-GB' : 'en-US', {
    month: 'short',
    day: 'numeric'
  });
}

const FAQS = {
  en: [
    {
      q: 'What is today\'s Wordle answer?',
      a: 'Today\'s Wordle answer is hidden by default on this page. Use the structured hints first (category, vowel count, starting letter), then click "Show Today\'s Wordle Answer" to reveal the word.'
    },
    {
      q: 'How are the Wordle hints chosen?',
      a: 'Each hint reveals a single, non-spoiler property of today\'s word — its category, vowel count, starting letter, ending letter, whether letters repeat, and word length. They are designed to nudge you toward the answer without giving it away.'
    },
    {
      q: 'When does the daily Wordle update?',
      a: 'A new Wordle puzzle drops every day at midnight in your local time zone. This hints page refreshes automatically with today\'s puzzle number, difficulty and clues.'
    },
    {
      q: 'What\'s yesterday\'s Wordle answer?',
      a: 'Scroll down to the "Yesterday\'s Wordle Answer" section to see the previous day\'s word. We also list the past 14 daily Wordle answers further down the page.'
    },
    {
      q: 'What are the best starting words?',
      a: 'CRANE, SLATE, TRACE, AUDIO and RAISE are widely considered the strongest openers. They cover the most common English letters and vowel combinations.'
    },
    {
      q: 'Is this the official NYT Wordle?',
      a: 'No — this is an independent unlimited Wordle clone. Our daily word rotates on a different schedule from the NYT Wordle, but the rules are identical.'
    }
  ],
  uk: [
    {
      q: 'What is today\'s Wordle answer?',
      a: 'Today\'s Wordle answer is hidden by default. Use the structured hints first (category, vowel count, starting letter), then tap "Show Today\'s Wordle Answer" to reveal the word.'
    },
    {
      q: 'How are the Wordle hints chosen?',
      a: 'Each hint reveals a single, non-spoiler property of today\'s word — its category, vowel count, starting letter, ending letter, whether letters repeat, and word length.'
    },
    {
      q: 'When does the daily Wordle update?',
      a: 'A new puzzle drops every day at midnight in your local time zone (UK time for British players). The hints page refreshes automatically.'
    },
    {
      q: 'What\'s yesterday\'s Wordle answer?',
      a: 'See the "Yesterday\'s Wordle Answer" section just below today\'s puzzle, plus a list of the past 14 daily answers.'
    },
    {
      q: 'What are the best starting words?',
      a: 'CRANE, SLATE, STARE, AUDIO and RAISE are popular openers — they cover the most common English letters.'
    },
    {
      q: 'Is this the official NYT Wordle?',
      a: 'No. This is an independent Wordle clone with the same rules, refreshed daily for British English players.'
    }
  ],
  es: [
    {
      q: '¿Cuál es la respuesta del Wordle de hoy?',
      a: 'La respuesta está oculta por defecto. Usa primero las pistas estructuradas (categoría, vocales, letra inicial) y luego pulsa "Mostrar Respuesta de Hoy" para revelarla.'
    },
    {
      q: '¿Cómo se eligen las pistas?',
      a: 'Cada pista revela una propiedad sin spoiler: categoría, vocales, letra inicial, letra final, letras repetidas y longitud.'
    },
    {
      q: '¿Cuándo se actualiza el Wordle?',
      a: 'Cada día a medianoche en tu zona horaria local. Esta página se actualiza automáticamente.'
    },
    {
      q: '¿Cuál fue la palabra de ayer?',
      a: 'Mira la sección "Wordle de Ayer" y la lista de las últimas 14 palabras más abajo.'
    },
    {
      q: '¿Cuáles son las mejores palabras para empezar?',
      a: 'AIRES, OUIJA, TENIA y CASOS son aperturas populares con muchas vocales y consonantes frecuentes.'
    },
    {
      q: '¿Es el Wordle oficial del NYT?',
      a: 'No. Es un Wordle independiente con las mismas reglas, actualizado a diario.'
    }
  ]
};

export default function HintsPage({ language = 'en' }) {
  const [dailyData, setDailyData] = useState(null);
  const [unlockedHints, setUnlockedHints] = useState([]);
  const [history, setHistory] = useState([]);
  const [yesterday, setYesterday] = useState(null);
  const [targetDate, setTargetDate] = useState(() => getNYTDate());
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

    const data = getDailyWord(language, target);
    setDailyData(data);

    if (language === 'en') {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${(data.word || '').toLowerCase()}`)
        .then(res => res.json())
        .then(json => {
          if (Array.isArray(json) && json[0] && json[0].meanings) {
            const meaning = json[0].meanings[0];
            const def = meaning.definitions[0];
            setDictionaryData({
              partOfSpeech: meaning.partOfSpeech || '',
              definition: def.definition || '',
              example: def.example || ''
            });
          }
        })
        .catch(() => {});
    }

    recordTodayWord(language, target);

    fetchPastWords(language, target, 14).then((rows) => {
      setHistory(rows);
      setYesterday(rows[0] || null);
    });
  }, [language]);

  const c = CONTENT[language] || CONTENT.en;

  const structuredHints = useMemo(() => {
    if (!dailyData) return [];
    return buildStructuredHints(dailyData.word, language, c.hintLabels, dictionaryData);
  }, [dailyData, language, c.hintLabels, dictionaryData]);

  const formattedDate = useMemo(() => formatDate(targetDate, language), [targetDate, language]);

  if (!dailyData) return null;

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Easy': return '#4ade80';
      case 'Medium': return '#fbbf24';
      case 'Hard': return '#f87171';
      case 'Ultra-Hard': return '#a855f7';
      default: return '#94a3b8';
    }
  };

  const translateDifficulty = (diff) => {
    if (language === 'es') {
      switch (diff) {
        case 'Easy': return 'Fácil';
        case 'Medium': return 'Medio';
        case 'Hard': return 'Difícil';
        case 'Ultra-Hard': return 'Ultra-Difícil';
        default: return diff;
      }
    }
    return diff;
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
    
    if (rareCount > 0 && hasDuplicate) return { diff: 'Ultra-Hard', reason: `Contains the rare letter "${upper.split('').find(l => rareLetters.includes(l))}" and has duplicate letters.` };
    if (rareCount > 0) return { diff: 'Hard', reason: `Contains the uncommon letter "${upper.split('').find(l => rareLetters.includes(l))}".` };
    if (hasDuplicate) return { diff: 'Medium', reason: `Has a duplicate letter which makes it slightly tricky.` };
    if (vowels >= 3) return { diff: 'Easy', reason: `Contains multiple vowels making it easier to guess.` };
    return { diff: 'Medium', reason: `A standard word with common consonants and no duplicate letters.` };
  };

  const diffAnalysis = analyzeWordDifficulty(dailyData.word);

  const difficultyScore = {
    Easy: '2.8 / 6',
    Medium: '3.6 / 6',
    Hard: '4.5 / 6',
    'Ultra-Hard': '5.2 / 6'
  }[diffAnalysis.diff] || '4.0 / 6';

  const avgGuesses = {
    Easy: '3.4',
    Medium: '4.1',
    Hard: '4.8',
    'Ultra-Hard': '5.3'
  }[diffAnalysis.diff] || '4.2';

  const tips = TIPS[language] || TIPS.en;
  const starters = BEST_STARTERS[language] || BEST_STARTERS.en;
  const faqs = FAQS[language] || FAQS.en;

  const dynamicTitle = language === 'es'
    ? `Pistas Wordle de Hoy (#${puzzleNumber}) – Clues y Respuesta para ${formattedDate}`
    : language === 'uk'
    ? `Wordle Hints Today UK (#${puzzleNumber}) – Clues & Answer for ${formattedDate}`
    : `Wordle Hints Today (#${puzzleNumber}) – Clues & Answer for ${formattedDate}`;

  const dynamicDescription = language === 'es'
    ? `Obtén pistas sin spoilers para Wordle #${puzzleNumber} el ${formattedDate}, incluyendo la letra inicial, vocales, letras repetidas, dificultad y la respuesta de hoy.`
    : `Get spoiler-free hints for Wordle #${puzzleNumber} on ${formattedDate}, including the starting letter, vowels, repeated letters, difficulty and today's answer.`;

  return (
    <div className="hints-page" style={{
      padding: '20px 20px 60px',
      maxWidth: '860px',
      margin: '0 auto',
      animation: 'fadeIn 0.5s ease-out',
      lineHeight: '1.7'
    }}>
      

      <div style={{ marginTop: '40px' }}>
        <Breadcrumbs
          language={language}
          items={[
            { name: language === 'es' ? 'Wordle Diario' : 'Daily Wordle', path: language === 'en' ? '/wordle-today/' : `/${language}/${language === 'es' ? 'palabra-del-dia' : 'wordle-today'}/` },
            { name: c.title }
          ]}
        />
      </div>

      <h1 style={{
        margin: '16px 0 12px',
        fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
        fontWeight: '800',
        lineHeight: '1.25'
      }}>
        {c.titleWithDate(formattedDate)}
      </h1>

      <p style={{
        marginTop: 0,
        marginBottom: '24px',
        fontSize: '1.05rem',
        color: 'var(--color-text-secondary)'
      }}>{c.intro}</p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '24px'
      }}>
        <span style={{
          padding: '6px 14px',
          borderRadius: '999px',
          background: 'var(--color-tab-bg)',
          fontSize: '13px',
          fontWeight: '700'
        }}>{c.puzzleNumber} #{puzzleNumber}</span>
        <span style={{
          padding: '6px 14px',
          borderRadius: '999px',
          background: getDifficultyColor(diffAnalysis.diff),
          color: 'white',
          fontSize: '13px',
          fontWeight: '800'
        }}>{translateDifficulty(diffAnalysis.diff)} · {difficultyScore}</span>
        <span style={{
          padding: '6px 14px',
          borderRadius: '999px',
          background: 'var(--color-tab-bg)',
          fontSize: '13px',
          fontWeight: '700'
        }}>{language === 'es' ? 'Promedio de intentos' : 'Avg. guesses'}: {avgGuesses}</span>
      </div>

      <nav aria-label="Table of contents" style={{
        background: 'rgba(106,170,100,0.08)',
        border: '1px solid rgba(106,170,100,0.25)',
        borderRadius: '12px',
        padding: '14px 18px',
        marginBottom: '32px',
        fontSize: '14px'
      }}>
        <strong style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-dark)' }}>
          {language === 'es' ? 'En esta página:' : 'On this page:'}
        </strong>
        <ul style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '4px', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
          <li><a href="#hints">{c.structuredHintsTitle}</a></li>
          <li><a href="#answer">{c.revealAnswer}</a></li>
          <li><a href="#meaning">{c.meaningTitle}</a></li>
          <li><a href="#yesterday">{c.yesterdayTitle}</a></li>
          <li><a href="#past">{c.pastAnswers}</a></li>
          <li><a href="#starters">{c.bestStartersTitle}</a></li>
          <li><a href="#tips">{c.tipsTitle}</a></li>
          <li><a href="#related">{c.relatedGamesTitle}</a></li>
          <li><a href="#history">{c.historyTitle}</a></li>
          <li><a href="#faq">{c.faqTitle}</a></li>
        </ul>
      </nav>

      <section id="hints" style={{
        background: 'var(--color-bg)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid var(--color-tab-bg)',
        marginBottom: '32px'
      }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: 0, marginBottom: '16px' }}>{c.structuredHintsTitle}</h2>
        <p style={{ marginTop: 0, marginBottom: '20px', color: 'var(--color-text-secondary)' }}>
          {language === 'es'
            ? 'Cada pista revela una propiedad sin spoiler. Haz clic para desbloquear una a una.'
            : 'Each hint reveals one non-spoiler property of today\'s Wordle answer. Click to unlock them one at a time.'}
        </p>

        <div className="hints-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {structuredHints.map((hint, idx) => {
            return (
              <details
                key={idx}
                style={{
                  background: 'rgba(128,128,128,0.05)',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '1px solid var(--color-tab-bg)',
                  transition: 'all 0.2s'
                }}
              >
                <summary style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                  {hint.label}
                </summary>
                <p style={{ margin: '10px 0 0', fontSize: '15px', fontWeight: '600' }}>{hint.text}</p>
              </details>
            );
          })}
        </div>

        {Array.isArray(dailyData.hints) && dailyData.hints.length > 0 && (
          <details style={{ marginTop: '20px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '700', color: 'var(--color-text-secondary)' }}>
              {language === 'es' ? 'Pistas adicionales del editor' : 'Editor\'s extra hints'}
            </summary>
            <ul style={{ marginTop: '12px', paddingLeft: '20px' }}>
              {dailyData.hints.map((h, i) => <li key={i} style={{ marginBottom: '6px' }}>{h}</li>)}
            </ul>
          </details>
        )}

        <details id="answer" style={{ marginTop: '28px' }}>
          <summary style={{
            background: '#6aaa64',
            color: 'white',
            border: '1px solid #6aaa64',
            padding: '12px 24px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '800',
            textAlign: 'center',
            display: 'inline-block',
            transition: 'all 0.2s',
            listStyle: 'none'
          }}>
            {c.revealAnswer}
          </summary>
          <div data-nosnippet style={{
              marginTop: '20px',
              fontSize: '2.6rem',
              fontWeight: '900',
              letterSpacing: '10px',
              color: '#6aaa64',
              animation: 'slideUp 0.3s ease-out',
              textAlign: 'center'
            }}>
              <strong className="wordle-answer">{dailyData.word.toUpperCase()}</strong>
          </div>
        </details>
      </section>

      <section id="meaning" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{c.meaningTitle}</h2>
        <p>
          {language === 'es'
            ? `La palabra del día pertenece a la categoría "${dailyData.category || 'general'}".`
            : `Today's Wordle answer is a strong example of common 5-letter English vocabulary. It falls under the "${dailyData.category || 'general'}" category.`}
        </p>
        
        <details style={{
            background: 'var(--color-tab-bg)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid rgba(106,170,100,0.4)',
            marginTop: '16px'
        }}>
            <summary style={{ cursor: 'pointer', fontWeight: '800', color: '#6aaa64', fontSize: '1.1rem' }}>
              {language === 'es' ? 'Revelar Significado Completo (Spoiler)' : 'Reveal Full Meaning (Spoiler)'}
            </summary>
            
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '20px', marginBottom: '6px' }}>{language === 'es' ? 'Definición' : 'Definition'}</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', margin: 0 }}>
              {dictionaryData.partOfSpeech && <span style={{fontWeight: 'bold', color: '#555', marginRight: '8px'}}>{dictionaryData.partOfSpeech}.</span>}
              {dictionaryData.definition || dailyData.definition || (language === 'es' ? 'Consulta un diccionario como la RAE para la definición completa.' : 'Look the word up in a dictionary like Merriam-Webster for the full definition.')}
            </p>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '20px', marginBottom: '6px' }}>{language === 'es' ? 'Ejemplo de uso' : 'Usage example'}</h3>
            <p style={{ background: 'rgba(0,0,0,0.03)', padding: '14px 16px', borderRadius: '8px', borderLeft: '4px solid #6aaa64', margin: 0 }}>
              "{dictionaryData.example || (language === 'es' ? 'No hay ejemplo disponible.' : 'No example available.')}"
            </p>
            
            <div style={{marginTop: '20px', padding: '16px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 8px 0' }}>Why is today's Wordle {diffAnalysis.diff}?</h3>
              <p style={{margin: 0, fontSize: '0.95rem', color: '#495057'}}>{diffAnalysis.reason}</p>
            </div>
        </details>
      </section>

      <section id="yesterday" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{c.yesterdayTitle}</h2>
        {yesterday ? (
          <div style={{
            padding: '18px 20px',
            borderRadius: '12px',
            background: 'rgba(106,170,100,0.08)',
            border: '1px solid rgba(106,170,100,0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
                {c.puzzleNumber} #{getWordleNumber(new Date(yesterday.puzzle_date || (() => { const d = new Date(targetDate); d.setDate(d.getDate() - 1); return d; })()))} · {formatShortDate(new Date(yesterday.puzzle_date || (() => { const d = new Date(targetDate); d.setDate(d.getDate() - 1); return d; })()), language)}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '6px', color: '#6aaa64' }}>
                {(yesterday.word || '').toUpperCase()}
              </div>
            </div>
            <span style={{
              padding: '6px 14px',
              borderRadius: '999px',
              background: getDifficultyColor(analyzeWordDifficulty(yesterday.word).diff),
              color: 'white',
              fontSize: '12px',
              fontWeight: '800'
            }}>{translateDifficulty(analyzeWordDifficulty(yesterday.word).diff)}</span>
          </div>
        ) : (
          <p>{language === 'es' ? 'Cargando…' : 'Loading…'}</p>
        )}
        <p style={{ marginTop: '12px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
          {language === 'es'
            ? 'Cada respuesta de Wordle se guarda automáticamente en nuestra base de datos para que puedas consultar la palabra de cualquier día anterior.'
            : 'Every daily Wordle answer is saved to our database so you can look up the answer for any previous day below.'}
        </p>
      </section>

      <section id="past" className="past-answers" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '16px' }}>{c.pastAnswers}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {history.map((item, idx) => {
            const dateObj = item.puzzle_date ? new Date(item.puzzle_date) : (() => { const d = new Date(targetDate); d.setDate(d.getDate() - (idx + 1)); return d; })();
            const itemDiff = analyzeWordDifficulty(item.word).diff;
            return (
              <div key={(item.puzzle_date || idx) + '-' + (item.word || idx)} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                background: 'var(--color-tab-bg)',
                borderRadius: '12px'
              }}>
                <span style={{ fontSize: '13px', fontWeight: '700' }}>
                  {c.puzzleNumber} #{getWordleNumber(dateObj)} · {formatShortDate(dateObj, language)}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    color: getDifficultyColor(itemDiff)
                  }}>{translateDifficulty(itemDiff).toUpperCase()}</span>
                  <span style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '1.5px' }}>{(item.word || '').toUpperCase()}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="starters" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{c.bestStartersTitle}</h2>
        <p>
          {language === 'es'
            ? 'Una buena palabra inicial cubre vocales frecuentes y consonantes de alta frecuencia. Estas son las aperturas más recomendadas:'
            : 'A strong opening word covers the most frequent vowels and high-frequency consonants. These are the most widely recommended Wordle openers:'}
        </p>
        <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'grid', gap: '10px', marginTop: '14px' }}>
          {starters.map((s) => (
            <li key={s.word} style={{
              display: 'flex',
              gap: '14px',
              alignItems: 'baseline',
              padding: '10px 14px',
              background: 'var(--color-tab-bg)',
              borderRadius: '10px'
            }}>
              <strong style={{ fontFamily: 'monospace', fontSize: '1.05rem', letterSpacing: '2px', minWidth: '70px' }}>{s.word}</strong>
              <span style={{ color: 'var(--color-text-secondary)' }}>{s.why}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="tips" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{c.tipsTitle}</h2>
        <ol style={{ paddingLeft: '20px', margin: 0 }}>
          {tips.map((tip, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>{tip}</li>
          ))}
        </ol>
      </section>

      <section id="related" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{c.relatedGamesTitle}</h2>
        <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {RELATED_GAMES.map((g) => (
            <Link
              key={g.to}
              href={g.to}
              style={{
                padding: '14px 16px',
                background: 'var(--color-tab-bg)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                border: '1px solid transparent',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontWeight: '800', marginBottom: '4px' }}>{g.name}</div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{g.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="history" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{c.historyTitle}</h2>
        <p>
          {language === 'es'
            ? 'Wordle es un juego diario de adivinanza de palabras de 5 letras creado por el ingeniero Josh Wardle en 2021. Fue adquirido por The New York Times y se convirtió en un fenómeno global. Cada día hay una sola palabra y los jugadores tienen 6 intentos.'
            : 'Wordle is a daily 5-letter word-guessing game created by software engineer Josh Wardle in 2021. It was acquired by The New York Times and grew into a global phenomenon. Each day there\'s a single hidden word and players have 6 guesses to find it.'}
        </p>
        <p style={{ marginTop: '10px' }}>
          {language === 'es'
            ? 'En esta página actualizamos las pistas y la respuesta del Wordle todos los días para que puedas resolver el puzle sin spoilers — y revisar respuestas anteriores como las de ayer o de la semana pasada.'
            : 'On this page we refresh the hints and answer for today\'s Wordle every day, so you can solve the puzzle without spoilers — and look up previous answers like yesterday\'s Wordle or last week\'s puzzles.'}
        </p>
      </section>

      <section id="faq" style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{c.faqTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => (
            <details key={i} style={{
              background: 'var(--color-tab-bg)',
              padding: '14px 16px',
              borderRadius: '10px'
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: '700' }}>{faq.q}</summary>
              <p style={{ marginTop: '10px', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hints-page a { color: var(--color-text-dark); text-decoration: underline; text-underline-offset: 2px; }
        .hints-page a:hover { color: #6aaa64; }
        .hints-page #related a { text-decoration: none; }
        .hints-page #related a:hover { border-color: #6aaa64 !important; transform: translateY(-2px); }
      `}</style>
    </div>
  );
}
