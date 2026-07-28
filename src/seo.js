// Single source of truth for per-route SEO metadata.
//
// Keep the keys here EXACTLY in the canonical (trailing-slash) form. The
// `normalizePath()` helper folds any incoming `useLocation().pathname` (with
// or without trailing slash, query string, hash, mixed case) into a key in
// this table. If a path doesn't match a known route we fall back to the
// homepage entry — that way unknown query strings, share/challenge links and
// missing trailing slashes can never produce a wrong canonical for Google.

export const BASE_URL = 'https://wordlegame.co.uk';
import { getNYTDate } from './dateUtils';
export const OG_IMAGE = `${BASE_URL}/og-image.png`;

// Map each "view" to its sibling URLs across locales. Used for hreflang
// alternates and the JSON-LD breadcrumb.
export const ROUTE_GROUPS = {
  unlimited: {
    'en-US': '/',
  },
  today: {
    'en-US': '/wordle-today/',
  },
  hints: {
    'en-US': '/wordle-hints-today/',
  },
  privacy: {
    'en-US': '/privacy/',
  },
};

export const SEO_DATA = {
  '/': {
    title: 'Wordle UK - Unlimited Free Word Puzzle Game Online',
    description: 'Play Wordle UK free — unlimited daily word puzzles with British English spelling. No downloads, no sign-up. Guess the 5-letter word in 6 tries!',
    isoLang: 'en_GB',
    group: 'unlimited',
  },
  '/wordle-today/': {
    title: "Wordle Today - Play Today's Wordle",
    description: 'Play Wordle Today and solve the daily word puzzle. A new Wordle challenge is available every day.',
    isoLang: 'en-US',
    group: 'today',
  },
  '/wordle-hints-today/': {
    title: "Daily Wordle Hints UK - Today's Word of the Day",
    description: "Get the best hints and clues for today's UK Word of the Day. We provide categorized hints to help you solve today's puzzle.",
    isoLang: 'en-US',
    group: 'hints',
  },
  '/privacy/': {
    title: 'Privacy Policy - Wordle',
    description: 'Read the Wordle Privacy Policy. Learn how we handle your data, what we collect, and your rights under UK GDPR.',
    isoLang: 'en-US',
    group: 'privacy',
  },
};

// Normalize any pathname to a key that exists in SEO_DATA:
//   - drop query string / hash (callers should pass pathname only, but be safe)
//   - lowercase
//   - collapse repeated slashes
//   - ensure exactly one trailing slash (except for "/")
export function normalizePath(pathname) {
  if (!pathname) return '/';
  let p = String(pathname);
  const qIdx = p.search(/[?#]/);
  if (qIdx >= 0) p = p.slice(0, qIdx);
  p = p.toLowerCase().replace(/\/{2,}/g, '/');
  if (p === '' || p === '/') return '/';
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p = p + '/';
  return p;
}

import { getWordleNumber } from './dateUtils';

function formatDate(d, isoLang) {
  return d.toLocaleDateString(isoLang === 'es' ? 'es-ES' : isoLang === 'en-US' ? 'en-US' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

// Resolve a pathname to its full SEO descriptor: copy, canonical URL, hreflang
// siblings, isoLang. Unknown routes fall back to the homepage so we never emit
// a canonical pointing at a route that doesn't exist in our sitemap.
export function getSEO(pathname) {
  const key = normalizePath(pathname);
  
  // Dynamic route handling
  let dynamicData = null;
  const letterWordsMatch = key.match(/^\/(\d+)-letter-words\/$/);
  if (letterWordsMatch) {
    const length = letterWordsMatch[1];
    dynamicData = {
      title: `${length}-Letter Words for Wordle UK - British English List`,
      description: `Explore the complete list of ${length}-letter British English words. Perfect for Wordle variants and improving your vocabulary.`,
      isoLang: 'en_GB',
      group: 'unlimited',
    };
  }

  const matched = SEO_DATA[key] || dynamicData;
  const canonicalKey = matched ? key : '/';
  const data = matched || SEO_DATA['/'];
  const siblings = ROUTE_GROUPS[data.group] || { 'en-US': canonicalKey };

  const isPrivacy = data.group === 'privacy' || canonicalKey.includes('privacy') || canonicalKey.includes('privacidad');
  const isDaily = !isPrivacy;

  let modifiedDate = null;
  let targetDateForMeta = getNYTDate();

  if (isHints && typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const seed = params.get('seed');
    if (seed && /^\d{8}$/.test(seed)) {
      const y = seed.substring(0, 4);
      const m = seed.substring(4, 6);
      const d = seed.substring(6, 8);
      targetDateForMeta = new Date(y, m - 1, d);
    }
  }

  if (isDaily) {
    const year = targetDateForMeta.getFullYear();
    const month = String(targetDateForMeta.getMonth() + 1).padStart(2, '0');
    const day = String(targetDateForMeta.getDate()).padStart(2, '0');
    modifiedDate = `${year}-${month}-${day}T04:05:00.000Z`;
  } else {
    // Static privacy pages: do not update daily. Use fixed baseline date.
    modifiedDate = '2026-05-15T04:05:00.000Z';
  }

  let title = data.title;
  let description = data.description;

  if (isHints) {
    const puzzleNumber = getWordleNumber(targetDateForMeta);
    const formattedDate = formatDate(targetDateForMeta, data.isoLang);
    if (data.isoLang === 'es') {
      title = `Pistas Wordle de Hoy (#${puzzleNumber}) – Clues y Respuesta para ${formattedDate}`;
      description = `Obtén pistas sin spoilers para Wordle #${puzzleNumber} el ${formattedDate}, incluyendo la letra inicial, vocales, letras repetidas, dificultad y la respuesta de hoy.`;
    } else if (data.isoLang === 'en-US') {
      title = `Wordle Hints Today UK (#${puzzleNumber}) – Clues & Answer for ${formattedDate}`;
      description = `Get spoiler-free hints for Wordle #${puzzleNumber} on ${formattedDate}, including the starting letter, vowels, repeated letters, difficulty and today's answer.`;
    } else {
      title = `Wordle Hints Today (#${puzzleNumber}) – Clues & Answer for ${formattedDate}`;
      description = `Get spoiler-free hints for Wordle #${puzzleNumber} on ${formattedDate}, including the starting letter, vowels, repeated letters, difficulty and today's answer.`;
    }
  }

  return {
    title,
    description,
    isoLang: data.isoLang,
    group: data.group,
    canonicalPath: canonicalKey,
    canonical: `${BASE_URL}${canonicalKey}`,
    hreflang: { 'en-US': `${BASE_URL}${siblings['en-US']}` },
    modifiedDate,
    isDaily,
  };
}
