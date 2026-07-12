/**
 * Utility functions for date and time calculations.
 */

/**
 * Returns a new Date object representing "Today" based on the America/New_York timezone.
 * This ensures that regardless of where the user (or the build server) is located,
 * the active date aligns with the official Wordle reset boundary.
 *
 * It returns a Date object set to local midnight of the target calendar date in New York.
 * For example, if it's June 15th 10PM in NY, but June 16th 7AM in Pakistan,
 * this function will return a Date representing June 15th (00:00:00 local time).
 */
export function getNYTDate() {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  
  const parts = formatter.formatToParts(new Date());
  const y = parseInt(parts.find(p => p.type === 'year').value, 10);
  const m = parseInt(parts.find(p => p.type === 'month').value, 10);
  const d = parseInt(parts.find(p => p.type === 'day').value, 10);
  
  // Create a new Date object for the calculated calendar day at midnight local time
  return new Date(y, m - 1, d);
}

/**
 * Calculates the official Wordle puzzle number based on the given date.
 * Epoch for Wordle #0 is June 19, 2021.
 */
export function getWordleNumber(targetDate = getNYTDate()) {
  const epoch = new Date(2021, 5, 19); // June 19, 2021
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  epoch.setHours(0, 0, 0, 0);
  const diffDays = Math.round((target - epoch) / (1000 * 60 * 60 * 24));
  return diffDays;
}
