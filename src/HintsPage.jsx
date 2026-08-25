'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getDailyWord } from './words';
import Breadcrumbs from './components/Breadcrumbs';
import { recordTodayWord, fetchPastWords } from './dailyWordleService';
import { getNYTDate, getWordleNumber } from './dateUtils';

const CONTENT = {
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
  es: [
    { word: 'AIRES', why: 'Cubre cuatro vocales y la consonante R, muy común.' },
    { word: 'CASOS', why: 'Letras de alta frecuencia en español.' },
    { word: 'OREAS', why: 'Cuatro vocales para descartar rápidamente.' },
    { word: 'TENIA', why: 'Mezcla letras frecuentes T, N y vocales.' },
    { word: 'PARLO', why: 'Buen segundo intento con consonantes fuertes.' }
  ]
};

const TIPS = {
  es: [
    'Empieza con una palabra con muchas vocales: AIRES, OUIJA, TENIA, para mapear el esqueleto rápido.',
    'Evita gastar dos intentos con letras repetidas al inicio.',
    'Después de dos intentos, descarta consonantes en bloque.',
    'Aprovecha las letras amarillas para reposicionarlas, no para repetir el mismo patrón.',
    'En modo difícil, bloquea verdes y amarillas — fuerza deducciones más afiladas.'
  ]
};

const RELATED_GAMES = [
  { name: 'Palabra del Día', to: '/wordle-today/', desc: 'Juega al desafío diario de Wordle en español.' },
  { name: 'Wordle Ilimitado', to: '/', desc: 'Partidas infinitas sin límite de espera diario.' },
  { name: 'Pistas de Hoy', to: '/wordle-hints-today/', desc: 'Pistas y solución guiada del reto de hoy.' }
];

const FAQS = {
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
      a: 'AIRES, CASOS, OREAS y TENIA son aperturas populares con muchas vocales y consonantes frecuentes.'
    },
    {
      q: '¿Es el Wordle oficial del NYT?',
      a: 'No. Es un Wordle independiente en español con las mismas reglas, actualizado a diario.'
    }
  ]
};

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
  
  const posEs = dictData?.partOfSpeech === 'noun' ? 'sustantivo' : dictData?.partOfSpeech === 'verb' ? 'verbo' : dictData?.partOfSpeech === 'adjective' ? 'adjetivo' : 'sustantivo / verbo / adjetivo';
  const defEs = dictData?.definition || 'Una palabra común de cinco letras usada en la conversación diaria.';

  return [
    { label: labels.category, text: `La respuesta se usa comúnmente como un ${posEs}.` },
    { label: labels.vowels, text: `Contiene ${info.vowelCount} vocal${info.vowelCount === 1 ? '' : 'es'} y ${info.consonantCount} consonante${info.consonantCount === 1 ? '' : 's'}.` },
    { label: labels.start, text: `La palabra comienza con la letra "${info.first}".` },
    { label: labels.end, text: `La palabra termina con la letra "${info.last}".` },
    { label: labels.repeat, text: info.repeated ? 'Sí — contiene una letra repetida.' : 'No — todas las letras son únicas.' },
    { label: labels.length, text: `Significado: ${defEs}` }
  ];
}

function formatDate(d, language) {
  return d.toLocaleDateString('es-ES', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatShortDate(d, language) {
  return d.toLocaleDateString('es-ES', {
    month: 'short',
    day: 'numeric'
  });
}

export default function HintsPage({ language = 'es' }) {
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

    const data = getDailyWord('es', target);
    setDailyData(data);

    recordTodayWord('es', target);

    fetchPastWords('es', target, 14).then((rows) => {
      setHistory(rows);
      setYesterday(rows[0] || null);
    });
  }, [language]);

  const c = CONTENT.es;

  const structuredHints = useMemo(() => {
    if (!dailyData) return [];
    return buildStructuredHints(dailyData.word, 'es', c.hintLabels, dictionaryData);
  }, [dailyData, c.hintLabels, dictionaryData]);

  const formattedDate = useMemo(() => formatDate(targetDate, 'es'), [targetDate]);

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
    switch (diff) {
      case 'Easy': return 'Fácil';
      case 'Medium': return 'Medio';
      case 'Hard': return 'Difícil';
      case 'Ultra-Hard': return 'Ultra-Difícil';
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
    
    if (rareCount > 0 && hasDuplicate) return { diff: 'Ultra-Hard', reason: `Contiene la letra poco común "${upper.split('').find(l => rareLetters.includes(l))}" y tiene letras repetidas.` };
    if (rareCount > 0) return { diff: 'Hard', reason: `Contiene la letra poco común "${upper.split('').find(l => rareLetters.includes(l))}".` };
    if (hasDuplicate) return { diff: 'Medium', reason: `Tiene una letra repetida, lo que añade dificultad.` };
    if (vowels >= 3) return { diff: 'Easy', reason: `Contiene múltiples vocales facilitando los aciertos.` };
    return { diff: 'Medium', reason: `Palabra equilibrada con consonantes habituales y sin duplicados.` };
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

  const tips = TIPS.es;
  const starters = BEST_STARTERS.es;
  const faqs = FAQS.es;

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
          language="es"
          items={[
            { name: 'Palabra del Día', path: '/wordle-today/' },
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
        }}>Promedio de intentos: {avgGuesses}</span>
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
          En esta página:
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
          Cada pista revela una propiedad sin spoiler. Haz clic para desbloquearlas una a una.
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
              Pistas adicionales
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
          La palabra del día pertenece a la categoría "{dailyData.category || 'general'}".
        </p>
        
        <details style={{
            background: 'var(--color-tab-bg)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid rgba(106,170,100,0.4)',
            marginTop: '16px'
        }}>
            <summary style={{ cursor: 'pointer', fontWeight: '800', color: '#6aaa64', fontSize: '1.1rem' }}>
              Revelar Significado Completo (Spoiler)
            </summary>
            
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '20px', marginBottom: '6px' }}>Definición</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', margin: 0 }}>
              {dailyData.definition || 'Consulta el diccionario de la Real Academia Española (RAE) para la definición completa.'}
            </p>
            
            <div style={{marginTop: '20px', padding: '16px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 8px 0' }}>¿Por qué la palabra de hoy es de dificultad {translateDifficulty(diffAnalysis.diff)}?</h3>
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
                {c.puzzleNumber} #{getWordleNumber(new Date(yesterday.puzzle_date || (() => { const d = new Date(targetDate); d.setDate(d.getDate() - 1); return d; })()))} · {formatShortDate(new Date(yesterday.puzzle_date || (() => { const d = new Date(targetDate); d.setDate(d.getDate() - 1); return d; })()), 'es')}
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
          <p>Cargando…</p>
        )}
        <p style={{ marginTop: '12px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
          Cada respuesta de Wordle se guarda para que puedas consultar la palabra de cualquier día anterior.
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
                  {c.puzzleNumber} #{getWordleNumber(dateObj)} · {formatShortDate(dateObj, 'es')}
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
          Una buena palabra inicial cubre vocales frecuentes y consonantes de alta frecuencia. Estas son las aperturas más recomendadas:
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
          Wordle es un juego diario de adivinanza de palabras de 5 letras. Cada día se presenta una nueva palabra secreta y los jugadores tienen 6 intentos para descubrirla usando las pistas de color.
        </p>
        <p style={{ marginTop: '10px' }}>
          En esta página actualizamos las pistas y la respuesta de la Palabra del Día para que puedas resolver el reto sin spoilers — o consultar palabras de días anteriores.
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
