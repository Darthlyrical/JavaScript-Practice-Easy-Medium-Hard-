// @ts-check
//
// Medium Bird Watcher drills: arrays + for loops + index math.

/**
 * Return total birds counted across all days.
 *
 * @param {number[]} birdsPerDay
 * @returns {number}
 */
export function totalBirds(birdsPerDay) {
  throw new Error('Implement totalBirds');
}

/**
 * Return total birds for a given 1-based week number.
 *
 * Rules:
 * - Week 1 is days 0..6
 * - Week 2 is days 7..13, etc.
 * - If week is out of range, return 0.
 * - If final week is incomplete, sum available days in that week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number}
 */
export function birdsInWeek(birdsPerDay, week) {
  throw new Error('Implement birdsInWeek');
}

/**
 * Return the longest streak of consecutive quiet days (0 birds).
 *
 * @param {number[]} birdsPerDay
 * @returns {number}
 */
export function longestQuietStreak(birdsPerDay) {
  throw new Error('Implement longestQuietStreak');
}

/**
 * Fix log by adding 1 bird every third day, starting on day 1
 * (index 0, 3, 6, ...).
 *
 * Mutate the given array.
 *
 * @param {number[]} birdsPerDay
 * @returns {void}
 */
export function fixEveryThirdDay(birdsPerDay) {
  throw new Error('Implement fixEveryThirdDay');
}

/**
 * Return totals per complete week.
 *
 * Example:
 * 14 days -> return 2 totals
 * 10 days -> return 1 total (ignore trailing 3 days)
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]}
 */
export function weekTotals(birdsPerDay) {
  throw new Error('Implement weekTotals');
}
