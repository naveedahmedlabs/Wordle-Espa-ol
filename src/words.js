import { WORDS_DB_ES, ALL_WORDS_ES, getDailyWordEs } from './wordDbEs';
import { getNYTDate } from './dateUtils';

export function getDailyWord(lang = 'es', targetDate = getNYTDate()) {
  return getDailyWordEs(targetDate);
}

export function getAllWords(lang = 'es') {
  return ALL_WORDS_ES;
}

export const VALID_WORDS = ALL_WORDS_ES.map(w => w.toLowerCase());
export const TARGET_WORDS = VALID_WORDS;

const ALL_WORDS_ES_SET = new Set(ALL_WORDS_ES.map(w => w.toUpperCase()));

export function getRandomWord(lang = 'es', length = 5) {
  const words = getAllWords(lang);
  return words[Math.floor(Math.random() * words.length)].toLowerCase();
}

export function isValidWord(word, lang = 'es') {
  if (!word) return false;
  return ALL_WORDS_ES_SET.has(word.toUpperCase());
}

export async function validateWordOnline(word, lang = 'es') {
  const cleanWord = word.toLowerCase();
  const upperWord = word.toUpperCase();

  // 1. Check local Spanish dictionary (Instant O(1))
  if (ALL_WORDS_ES_SET.has(upperWord)) {
    return { valid: true, reason: 'local' };
  }

  // 2. Fallback to Spanish Dictionary API
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout
    
    const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/es/${cleanWord}`, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const data = await response.json();
      if (data.entries && data.entries.length > 0) {
        return { valid: true, reason: 'api' };
      }
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.warn("Dictionary API lookup timed out");
    } else {
      console.error("Dictionary API Error:", error);
    }
  }

  return { valid: false, reason: 'invalid' };
}
