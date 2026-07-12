import { getDailyWord } from './words';
import { getNYTDate } from './dateUtils';

const formatDateISO = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const buildRecord = (language, date) => {
  const data = getDailyWord(language, date);
  return {
    puzzle_date: formatDateISO(date),
    language,
    word: (data.word || '').toUpperCase(),
    day_number: data.dayNumber ?? null,
    difficulty: data.difficulty ?? null,
    category: data.category ?? null,
    definition: data.definition ?? null,
    usage: data.usage ?? null,
    hints: Array.isArray(data.hints) ? data.hints : null
  };
};

export async function recordTodayWord(language, date = getNYTDate()) {
  return buildRecord(language, date);
}

export async function fetchPastWords(language, fromDate, days = 14) {
  const fallback = [];
  for (let i = 1; i <= days; i++) {
    const d = new Date(fromDate);
    d.setDate(d.getDate() - i);
    fallback.push(buildRecord(language, d));
  }
  return fallback;
}

export function getYesterdayWord(language, fromDate = getNYTDate()) {
  const d = new Date(fromDate);
  d.setDate(d.getDate() - 1);
  return buildRecord(language, d);
}
