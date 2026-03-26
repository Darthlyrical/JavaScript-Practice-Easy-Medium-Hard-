// @ts-check
//
// Practice Pack: loops, switch, arrays, and objects.
// Implement each function. All tests live in `juice-practice.spec.js`.

/**
 * Return minutes needed to complete one stand task.
 *
 * Task durations:
 * - 'wash-pitcher' -> 0.75
 * - 'slice-fruit' and 'prep-garnish' -> 1.25
 * - 'blend-base' -> 2.5
 * - 'sanitize-station' -> 4
 * - any other task -> 1.5
 *
 * @param {string} task
 * @returns {number}
 */
export function standTaskMinutes(task) {
  throw new Error('Implement standTaskMinutes');
}

/**
 * Return cone count by box size.
 * - 'starter' -> 3
 * - 'standard' -> 5
 * - 'party' -> 9
 * - unknown sizes -> 0
 *
 * @param {string} size
 * @returns {number}
 */
export function conesFromBoxSize(size) {
  throw new Error('Implement conesFromBoxSize');
}

/**
 * Return how many boxes must be opened to reach at least `conesNeeded`.
 * Boxes are opened in order from the front of the list.
 * Stop when:
 * - enough cones exist, or
 * - no boxes remain.
 *
 * Notes:
 * - Opening a box always counts as 1 opened box.
 * - Unknown sizes contribute 0 cones, but still count as opened.
 *
 * @param {number} conesNeeded
 * @param {string[]} boxes
 * @returns {number} number of boxes opened
 */
export function boxesToOpen(conesNeeded, boxes) {
  throw new Error('Implement boxesToOpen');
}

/**
 * Return a frequency object for shift event types.
 *
 * Example:
 * ['rush', 'rush', 'restock']
 * becomes
 * { rush: 2, restock: 1 }
 *
 * Rules:
 * - Ignore the event 'idle' completely.
 * - Count all other events exactly as provided.
 *
 * @param {string[]} events
 * @returns {Record<string, number>}
 */
export function countShiftEvents(events) {
  throw new Error('Implement countShiftEvents');
}

/**
 * Return tasks not started before the shift handoff.
 *
 * Rules:
 * - Tasks are processed from the front of the list.
 * - If a task is started, it is always finished.
 * - Always start the first task when at least one task exists,
 *   even when `timeBudget` is 0 or negative.
 *
 * @param {number} timeBudget
 * @param {string[]} tasks
 * @returns {string[]} tasks not started
 */
export function remainingTasks(timeBudget, tasks) {
  throw new Error('Implement remainingTasks');
}
