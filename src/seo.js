// Single source of truth for per-route SEO metadata.
//
// Keep the keys here EXACTLY in the canonical (trailing-slash) form. The
// `normalizePath()` helper folds any incoming `useLocation().pathname` (with
// or without trailing slash, query string, hash, mixed case) into a key in
// this table. If a path doesn't match a known route we fall back to the
// homepage entry — that way unknown query strings, share/challenge links and
// missing trailing slashes can never produce a wrong canonical for Google.

export const BASE_URL = 'https://lapalabradeldia.co';
import { getNYTDate } from './dateUtils';
export const OG_IMAGE = `${BASE_URL}/og-image.png`;

// Map each "view" to its sibling URLs across locales. Used for hreflang
// alternates and the JSON-LD breadcrumb.
export const ROUTE_GROUPS = {
  unlimited: {
    'es': '/',
    'es-ES': '/',
  },
  today: {
    'es': '/palabra-del-dia/',
    'es-ES': '/palabra-del-dia/',
  },
  hints: {
    'es': '/wordle-respuesta-hoy/',
    'es-ES': '/wordle-respuesta-hoy/',
  },
  archive: {
    'es': '/archive/',
    'es-ES': '/archive/',
  },
  privacy: {
    'es': '/privacy/',
    'es-ES': '/privacy/',
  },
};

export const SEO_DATA = {
  '/': {
    title: 'Wordle Español - Juego de Palabras Ilimitado Gratis Online',
    description: 'Juega a Wordle en español gratis — adivina palabras ilimitadas de 5 letras en español sin descargas ni registros. ¡Resuelve el desafío en 6 intentos!',
    isoLang: 'es-ES',
    group: 'unlimited',
  },
  '/palabra-del-dia/': {
    title: 'Palabra del Día - Juega al Wordle de Hoy en Español',
    description: 'Juega a la Palabra del Día en español y resuelve el puzle diario. Un nuevo reto de Wordle en español disponible cada día.',
    isoLang: 'es-ES',
    group: 'today',
  },
  '/wordle-respuesta-hoy/': {
    title: 'Wordle Respuesta Hoy - Solución y Pistas de la Palabra del Día',
    description: 'Descubre la respuesta y pistas sin spoilers del Wordle en español de hoy. Solución diaria, número de vocales, letra inicial y más.',
    isoLang: 'es-ES',
    group: 'hints',
  },
  '/archive/': {
    title: 'Archivo Wordle Español - Juega Puzles y Días Anteriores',
    description: 'Explora el archivo completo de Wordle en español. Juega cualquier reto del pasado por fecha o número de puzle sin límites.',
    isoLang: 'es-ES',
    group: 'archive',
  },
  '/wordle-archive/': {
    title: 'Archivo Wordle Español - Juega Puzles y Días Anteriores',
    description: 'Explora el archivo completo de Wordle en español. Juega cualquier reto del pasado por fecha o número de puzle sin límites.',
    isoLang: 'es-ES',
    group: 'archive',
  },
  '/privacy/': {
    title: 'Política de Privacidad - La Palabra del Día',
    description: 'Consulta la política de privacidad de La Palabra del Día. Conoce cómo gestionamos los datos locales y tus derechos de privacidad.',
    isoLang: 'es-ES',
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

function formatDate(d, isoLang = 'es-ES') {
  return d.toLocaleDateString(isoLang, {
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
      title: `Palabras de ${length} Letras para Wordle Español`,
      description: `Explora la lista completa de palabras en español de ${length} letras. Ideal para variantes de Wordle y enriquecer tu vocabulario.`,
      isoLang: 'es-ES',
      group: 'unlimited',
    };
  }

  const matched = SEO_DATA[key] || dynamicData;
  const canonicalKey = matched ? key : '/';
  const data = matched || SEO_DATA['/'];
  const siblings = ROUTE_GROUPS[data.group] || { 'es': canonicalKey, 'es-ES': canonicalKey };

  const isPrivacy = data.group === 'privacy' || canonicalKey.includes('privacy') || canonicalKey.includes('privacidad');
  const isHints = data.group === 'hints';
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
    title = `Pistas Wordle de Hoy (#${puzzleNumber}) – Claves y Solución para ${formattedDate}`;
    description = `Pistas sin spoilers para el Wordle #${puzzleNumber} del ${formattedDate}: letra inicial, número de vocales, letras repetidas, dificultad y la respuesta de hoy.`;
  }

  return {
    title,
    description,
    isoLang: data.isoLang,
    group: data.group,
    canonicalPath: canonicalKey,
    canonical: `${BASE_URL}${canonicalKey}`,
    hreflang: {
      'es': `${BASE_URL}${siblings['es'] || canonicalKey}`,
      'es-ES': `${BASE_URL}${siblings['es-ES'] || canonicalKey}`
    },
    modifiedDate,
    isDaily,
  };
}
