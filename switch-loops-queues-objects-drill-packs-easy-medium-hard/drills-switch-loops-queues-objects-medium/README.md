# Snack Stand Practice Pack (Variation Drill)

This practice pack targets the same core concepts you are working on now, but with different acceptance criteria so you cannot solve it by pattern-copying.

Core skills trained:
- `switch` with grouped cases and `default`
- `while` loops with multiple stop conditions
- `do...while` for "always do at least one iteration" logic
- queue-style array processing (front-to-back)
- object frequency counting
- using `Object.keys(obj).length` to reason about distinct entries

## Files

- `juice-practice.js`: starter file with unimplemented functions
- `juice-practice.spec.js`: tests that define required behavior
- `README.md`: implementation guide

## Run This Pack

From parent folder `switch-loops-queues-objects-drill-packs-easy-medium-hard`:

```bash
npm run test:medium
```

## Challenge Story

You are helping at a snack stand before handoff to the next shift. Tasks take different times, cones come in box sizes, and event logs need summarizing.

The function names and rules are intentionally different from your current exercise, but they force the same methods and reasoning style.

## Required Functions

## 1) `standTaskMinutes(task)`

Implement with `switch`.

Rules:
- `'wash-pitcher'` -> `0.75`
- `'slice-fruit'` and `'prep-garnish'` -> `1.25`
- `'blend-base'` -> `2.5`
- `'sanitize-station'` -> `4`
- default -> `1.5`

Concept target:
- grouped `case`s
- safe default behavior

## 2) `conesFromBoxSize(size)`

Implement with `switch`.

Rules:
- `'starter'` -> `3`
- `'standard'` -> `5`
- `'party'` -> `9`
- default -> `0`

Concept target:
- compact mapping helper
- defensive handling for unknown values

## 3) `boxesToOpen(conesNeeded, boxes)`

Implement with `while`.

Goal:
- Return number of boxes opened to reach at least `conesNeeded`.

Rules:
- Open boxes in listed order.
- Stop when enough cones are collected OR when no boxes remain.
- Unknown sizes still count as "opened", but add `0` cones.
- If `conesNeeded <= 0`, return `0`.

Concept target:
- loop with two conditions
- state updates every iteration
- avoid infinite loops when a box yields `0`

Suggested state to track:
- `openedBoxes`
- `conesCollected`
- `index` or a queue copy

## 4) `countShiftEvents(events)`

Implement object counting.

Goal:
- Return a frequency object for event names.

Rules:
- Ignore event `'idle'`.
- Count all other strings exactly as written.

Examples:

```js
countShiftEvents(['rush', 'rush', 'restock']);
// { rush: 2, restock: 1 }

countShiftEvents(['idle', 'idle']);
// {}
```

Concept target:
- frequency-map pattern
- conditional skip (`if` + `continue` is optional but useful)

## 5) `remainingTasks(timeBudget, tasks)`

Implement with `do...while`.

Goal:
- Return tasks that were not started before handoff.

Rules:
- Tasks are started in listed order.
- Started task is always finished.
- Always start the first task when tasks exist, even if budget is `0` or negative.
- Use `standTaskMinutes()` to decrement time budget.

Concept target:
- `do...while` semantics
- queue progression
- helper reuse instead of duplicating mapping logic

## Why This Is "Same Skills, Different Shape"

Compared to your current exercise:
- Mapping logic uses different names and values.
- Yield calculation includes unknown entries that still consume a loop iteration.
- Event counting introduces a skip rule (`'idle'`).
- Time-loop explicitly requires first-item start behavior even at zero budget.

So the methods are the same, but direct copying will miss edge cases.

## Method Deep Dive

## A) `switch` patterns

Grouped cases:

```js
switch (task) {
  case 'slice-fruit':
  case 'prep-garnish':
    return 1.25;
  default:
    return 1.5;
}
```

Key reminders:
- Comparison is strict equality (`===`).
- Missing `break`/`return` causes fall-through.
- In function mapping logic, `return` in each case is usually simplest.

## B) `while` loops with two conditions

Typical structure:

```js
while (conesCollected < conesNeeded && index < boxes.length) {
  // consume one box
  // update both conesCollected and index/openedBoxes
}
```

Failure modes to watch:
- only updating counters in some branches
- not moving to the next item on unknown values
- forgetting `conesNeeded <= 0` early return

## C) `do...while` for mandatory first action

Why used here:
- You must start one task whenever `tasks.length > 0`, even at `timeBudget = 0`.

Pattern:

```js
if (tasks.length === 0) return [];

do {
  // start/finish one task
} while (timeBudget > 0 && workRemains);
```

## D) Frequency objects

Pattern:

```js
const counts = {};

for (const event of events) {
  if (event === 'idle') continue;
  if (counts[event] === undefined) {
    counts[event] = 1;
  } else {
    counts[event] += 1;
  }
}
```

Distinct key count:

```js
Object.keys(counts).length;
```

Use this for "how many different event types occurred?"

## E) Mutation choices for arrays

You can solve queue problems in two common ways.

Option 1: index-based (non-mutating):
- keep input array intact
- use `index` counter

Option 2: queue mutation:
- make copy: `const queue = [...tasks]`
- consume with `queue.shift()`

Both are valid. Pick one style and keep it consistent inside a function.

## Suggested Solve Sequence

1. `standTaskMinutes`
2. `conesFromBoxSize`
3. `boxesToOpen`
4. `countShiftEvents`
5. `remainingTasks`

This order builds helper functions first, then uses them in loop-heavy functions.

## Debug Checklist

When a test fails, verify:
- Every loop iteration changes something that can end the loop.
- Unknown values are handled via `default`.
- You are returning expected types (`number`, `object`, `array`).
- You are not accidentally skipping first-iteration behavior in `remainingTasks`.
- You are reusing helpers where expected.

## Mastery Check

After passing tests, explain out loud:
- Why `boxesToOpen` terminates in all cases.
- Why `remainingTasks` needs `do...while` in this rule set.
- When `Object.keys(result).length` gives useful info.

If you can explain those clearly, your understanding is solid and transferable.
