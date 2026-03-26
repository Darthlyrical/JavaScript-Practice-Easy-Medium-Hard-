// @ts-check
//
// Hard Bird Watcher drills: array-like data + advanced for-loop logic.

/**
 * Return total birds from an array-like log.
 *
 * @param {{ length: number, [index: number]: number }} birdsPerDay
 * @returns {number}
 */
export function totalBirdsArrayLike(birdsPerDay) {
  throw new Error('Implement totalBirdsArrayLike');
}

/**
 * Return the 1-based week number with the highest total birds.
 *
 * Rules:
 * - Use complete weeks only (7 days each).
 * - Tie-breaker: earliest week wins.
 * - Return 0 if there are no complete weeks.
 *
 * @param {{ length: number, [index: number]: number }} birdsPerDay
 * @returns {number}
 */
export function weekWithMostBirds(birdsPerDay) {
  throw new Error('Implement weekWithMostBirds');
}

/**
 * Return the maximum bird total in any contiguous window of size `windowSize`.
 *
 * Rules:
 * - If windowSize <= 0, return 0.
 * - If windowSize > log length, return 0.
 *
 * @param {{ length: number, [index: number]: number }} birdsPerDay
 * @param {number} windowSize
 * @returns {number}
 */
export function rollingMaxBirds(birdsPerDay, windowSize) {
  throw new Error('Implement rollingMaxBirds');
}

/**
 * Mutate an array-like log by replacing missing values.
 *
 * Rules:
 * - A value equal to `missingValue` is considered missing.
 * - Replace missing day with previous day's value.
 * - If the first day is missing, replace with 0.
 *
 * @param {{ length: number, [index: number]: number }} birdsPerDay
 * @param {number} missingValue
 * @returns {void}
 */
export function repairMissingCounts(birdsPerDay, missingValue = -1) {
  throw new Error('Implement repairMissingCounts');
}

/**
 * Return a merged daily log by summing primary and secondary logs day-by-day.
 *
 * Rules:
 * - Length of output is max(primary.length, secondary.length).
 * - Missing day values count as 0.
 * - Return a new array.
 *
 * @param {{ length: number, [index: number]: number }} primary
 * @param {{ length: number, [index: number]: number }} secondary
 * @returns {number[]}
 */
export function mergeLogs(primary, secondary) {
  throw new Error('Implement mergeLogs');
}
