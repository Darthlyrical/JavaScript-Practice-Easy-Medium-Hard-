// @ts-check
//
// Easy Bird Watcher drills: arrays + for loops.
// Implement each function. Tests are in `bird-basics.spec.js`.

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
 * Count how many days have bird counts greater than or equal to `threshold`.
 *
 * @param {number[]} birdsPerDay
 * @param {number} threshold
 * @returns {number}
 */
export function countDaysAtOrAbove(birdsPerDay, threshold) {
  throw new Error('Implement countDaysAtOrAbove');
}

/**
 * Return total birds for the first `n` days.
 *
 * Rules:
 * - If n <= 0, return 0.
 * - If n is larger than list length, sum all days.
 *
 * @param {number[]} birdsPerDay
 * @param {number} n
 * @returns {number}
 */
export function firstNDaysTotal(birdsPerDay, n) {
  throw new Error('Implement firstNDaysTotal');
}

/**
 * Fix log by adding 1 bird on every second day starting with day 1
 * (index 0, 2, 4, ...).
 *
 * Mutate the given array.
 *
 * @param {number[]} birdsPerDay
 * @returns {void}
 */
export function fixAlternatingDays(birdsPerDay) {
  throw new Error('Implement fixAlternatingDays');
}

/**
 * Return true if there is at least one quiet day (0 birds).
 *
 * @param {number[]} birdsPerDay
 * @returns {boolean}
 */
export function hasQuietDay(birdsPerDay) {
  throw new Error('Implement hasQuietDay');
}
