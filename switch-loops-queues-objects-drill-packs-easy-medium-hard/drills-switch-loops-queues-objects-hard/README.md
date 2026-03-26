# Snack Stand Practice Pack 2 (Harder Variant)

This second pack keeps the same core concepts you are practicing, but introduces slightly trickier rules so your understanding has to transfer, not just repeat.

Concepts trained:
- `switch` with grouped cases and `default`
- helper-function reuse
- `while` loops with two stop conditions
- `do...while` for required first-iteration behavior
- queue-style array processing
- object frequency maps
- `Object.keys(obj).length` for distinct-key reasoning

## Files

- `stand-drills.js`: unimplemented functions
- `stand-drills.spec.js`: tests for all expected behavior
- `README.md`: this guide
- `package.json`: local script to run only this pack

## Run This Pack

From inside `drills-switch-loops-queues-objects-hard`:

```bash
npm run test
```

## What Makes This Harder

Compared to your first practice pack:
- task names can include an urgent marker (`*`) that changes total time
- sleeve opening considers pre-existing inventory
- unknown sleeve sizes still consume an iteration and count as opened
- order parsing requires validating string format (`flavor|size`)
- top result has a deterministic tie-breaker rule
- queue handoff rules force a `do...while`-style mindset

You are still solving with the same family of techniques.

## Function Targets

## 1) `stationTaskMinutes(task)`

Use `switch` for base time mapping, then apply urgent modifier.

Rules:
- `'slice-citrus'` -> `0.5`
- `'wash-blender'` and `'refill-ice'` -> `1`
- `'mix-syrup'` -> `1.5`
- `'deep-clean'` -> `3.5`
- unknown -> `2`
- if task ends with `'*'`, add `0.25`

Hints:
- detect urgency first (`endsWith('*')`)
- remove marker for lookup (`slice`)
- compute: `base + modifier`

## 2) `cupsFromSleeve(size)`

Map sleeve size to cup count with `switch`.

Rules:
- `'mini'` -> `4`
- `'standard'` -> `7`
- `'bulk'` -> `12`
- default -> `0`

## 3) `sleevesToOpen(cupsNeeded, sleeves, cupsInBin)`

Use a `while` loop and stop when either condition fails.

Rules:
- start with `cupsInBin` cups
- open sleeves in order
- unknown sleeve adds 0 cups but still counts as opened
- return opened sleeve count

Loop pattern:

```js
while (currentCups < cupsNeeded && index < sleeves.length) {
  // open one sleeve
  // increment opened count
  // move index forward
}
```

Edge case:
- if `cupsNeeded <= cupsInBin`, return `0` immediately

## 4) `countOrdersByFlavor(orders)`

Build a frequency object by flavor only.

Input format:
- valid shape is `'<flavor>|<size>'`

Rules:
- entry must contain `'|'`
- flavor must be non-empty
- ignore flavor `'water'`
- size may be empty

Example:

```js
['mango|large', 'berry|small', 'mango|medium', 'water|small'];
// => { mango: 2, berry: 1 }
```

## 5) `topFlavor(orders)`

Find most frequent flavor from the same validity rules as above.

Rules:
- return highest count flavor
- tie: alphabetical ascending
- no valid flavors: return `null`

Recommended approach:
1. reuse `countOrdersByFlavor`
2. iterate keys to track current best flavor/count
3. on equal count, compare strings alphabetically

Useful:

```js
Object.keys(counts).length;
```

This tells you if any valid flavors exist before scanning.

## 6) `remainingPrepQueue(timeBudget, prepQueue)`

Return tasks that were never started before handoff.

Rules:
- process queue front to back
- if queue is non-empty, first task must be started even when time is 0/negative
- started task always finishes (time can go below zero)
- use `stationTaskMinutes` for each task cost

This rule set is why `do...while` is a natural fit:

```js
if (queue.length === 0) return [];

do {
  // start and finish one task
} while (timeBudget > 0 && workRemains);
```

## Solve Order

1. `stationTaskMinutes`
2. `cupsFromSleeve`
3. `sleevesToOpen`
4. `countOrdersByFlavor`
5. `topFlavor`
6. `remainingPrepQueue`

This keeps helper dependencies available before higher-level functions.

## Debug Checklist

When tests fail, verify:
- every loop iteration advances index/queue
- unknown values are handled via `default`
- starred task names are stripped before switch lookup
- order parsing handles missing `'|'` safely
- tie-break logic is deterministic and repeatable

## Complexity Notes

- mapping helpers are `O(1)`
- list-processing functions are typically `O(n)`
- frequency-object memory is `O(k)` where `k` is number of distinct valid flavors

These are great patterns to internalize for interview-style and production-style coding.
