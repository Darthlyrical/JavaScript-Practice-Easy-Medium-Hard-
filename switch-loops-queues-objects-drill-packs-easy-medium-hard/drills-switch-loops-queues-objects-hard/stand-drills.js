// @ts-check
//
// Practice Pack 2: same core concepts, slightly harder rules.
// Implement each function. Tests live in `stand-drills.spec.js`.

/**
 * Return minutes for a prep task.
 *
 * Base times:
 * - 'slice-citrus' -> 0.5
 * - 'wash-blender' and 'refill-ice' -> 1
 * - 'mix-syrup' -> 1.5
 * - 'deep-clean' -> 3.5
 * - unknown task -> 2
 *
 * Twist:
 * - If task ends with '*', add 0.25 minutes after base time.
 * - Example: 'mix-syrup*' -> 1.75
 *
 * @param {string} task
 * @returns {number}
 */
export function stationTaskMinutes(task) {
  throw new Error('Implement stationTaskMinutes');
}

/**
 * Return cup count for a sleeve size.
 *
 * - 'mini' -> 4
 * - 'standard' -> 7
 * - 'bulk' -> 12
 * - unknown -> 0
 *
 * @param {string} size
 * @returns {number}
 */
export function cupsFromSleeve(size) {
  throw new Error('Implement cupsFromSleeve');
}

/**
 * Return how many sleeves must be opened to reach at least `cupsNeeded`.
 *
 * Rules:
 * - You already have `cupsInBin` cups.
 * - Open sleeves in order from the front of `sleeves`.
 * - Unknown sleeve sizes add 0 cups, but still count as opened.
 * - Stop when enough cups exist or sleeves run out.
 *
 * @param {number} cupsNeeded
 * @param {string[]} sleeves
 * @param {number} cupsInBin
 * @returns {number}
 */
export function sleevesToOpen(cupsNeeded, sleeves, cupsInBin) {
  throw new Error('Implement sleevesToOpen');
}

/**
 * Count orders by flavor.
 *
 * Order format:
 * - '<flavor>|<size>'
 *
 * Rules:
 * - Only count entries that contain '|'.
 * - Flavor must be non-empty.
 * - Ignore flavor 'water'.
 * - Size can be empty.
 *
 * @param {string[]} orders
 * @returns {Record<string, number>}
 */
export function countOrdersByFlavor(orders) {
  throw new Error('Implement countOrdersByFlavor');
}

/**
 * Return the top flavor from `orders`.
 *
 * Rules:
 * - Use the same validity rules as `countOrdersByFlavor`.
 * - Return the flavor with the highest count.
 * - Tie-breaker: alphabetical ascending (e.g. 'apple' over 'berry').
 * - Return null if there are no valid flavors.
 *
 * @param {string[]} orders
 * @returns {string | null}
 */
export function topFlavor(orders) {
  throw new Error('Implement topFlavor');
}

/**
 * Return prep tasks that were not started before handoff.
 *
 * Rules:
 * - Process from front of queue.
 * - Always start first task when queue is non-empty, even if `timeBudget <= 0`.
 * - Started tasks are always finished.
 * - Use `stationTaskMinutes` for time cost.
 *
 * @param {number} timeBudget
 * @param {string[]} prepQueue
 * @returns {string[]}
 */
export function remainingPrepQueue(timeBudget, prepQueue) {
  throw new Error('Implement remainingPrepQueue');
}

