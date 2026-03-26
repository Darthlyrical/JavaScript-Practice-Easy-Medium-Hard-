// @ts-check
//
// Easy Pack: same concepts, lighter rules.
// Implement each function. Tests are in `counter-basics.spec.js`.

/**
 * Return minutes for a simple counter task.
 *
 * - 'wipe-counter' -> 0.5
 * - 'slice-apple' -> 1
 * - 'restock-napkins' -> 1.5
 * - unknown task -> 1.25
 *
 * @param {string} task
 * @returns {number}
 */
export function counterTaskMinutes(task) {
  throw new Error('Implement counterTaskMinutes');
}

/**
 * Return cookie count for pack size.
 *
 * - 'small' -> 2
 * - 'medium' -> 4
 * - 'large' -> 6
 * - unknown size -> 0
 *
 * @param {string} size
 * @returns {number}
 */
export function cookiesFromPackSize(size) {
  throw new Error('Implement cookiesFromPackSize');
}

/**
 * Return number of packs opened to reach at least `cookiesNeeded`.
 *
 * Rules:
 * - Open packs from the front of `packs`.
 * - Unknown sizes add 0 cookies but still count as opened.
 * - Stop when enough cookies are collected or packs run out.
 * - If `cookiesNeeded <= 0`, return 0.
 *
 * @param {number} cookiesNeeded
 * @param {string[]} packs
 * @returns {number}
 */
export function packsToOpen(cookiesNeeded, packs) {
  throw new Error('Implement packsToOpen');
}

/**
 * Count queue labels.
 *
 * Rules:
 * - Ignore label 'skip'.
 * - Count all other labels exactly as they appear.
 *
 * @param {string[]} queue
 * @returns {Record<string, number>}
 */
export function countQueueTypes(queue) {
  throw new Error('Implement countQueueTypes');
}

/**
 * Return tasks that were not started before handoff.
 *
 * Rules:
 * - Process tasks from the front of the queue.
 * - If queue is non-empty, always start the first task
 *   even when `timeLeft <= 0`.
 * - Started tasks always finish.
 * - Use `counterTaskMinutes` for task duration.
 *
 * @param {number} timeLeft
 * @param {string[]} queue
 * @returns {string[]}
 */
export function remainingQueueTasks(timeLeft, queue) {
  throw new Error('Implement remainingQueueTasks');
}

