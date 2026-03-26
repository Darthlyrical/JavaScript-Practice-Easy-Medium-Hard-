# Counter Drills: Switch + Loops + Queues + Objects (Easy)

This is an easier drill pack than the medium set, but it trains the same core skills:
- `switch` statements
- `while` loops with stop conditions
- `do...while` behavior ("start at least one task")
- queue-style array processing (front to back)
- object frequency counting
- `Object.keys(obj).length` for distinct-key checks

## Files

- `counter-basics.js`: implement-me starter functions
- `counter-basics.spec.js`: tests with expected behavior
- `README.md`: this guide
- parent `package.json`: root test scripts

## Run This Pack

From parent folder `switch-loops-queues-objects-drill-packs-easy-medium-hard`:

```bash
npm run test:easy
```

## Why This Is Easier

Compared to the medium/hard packs:
- no parsing of compound strings
- no tie-break sorting logic
- no urgent markers or extra modifiers
- fewer moving parts per function

You still practice the same coding patterns, just with cleaner inputs.

## Functions To Implement

## 1) `counterTaskMinutes(task)`

Use a `switch` to map task names to minutes.

Rules:
- `'wipe-counter'` -> `0.5`
- `'slice-apple'` -> `1`
- `'restock-napkins'` -> `1.5`
- default -> `1.25`

Concept focus:
- `switch` with `default`
- return-based case handling

## 2) `cookiesFromPackSize(size)`

Use a `switch` helper.

Rules:
- `'small'` -> `2`
- `'medium'` -> `4`
- `'large'` -> `6`
- default -> `0`

Concept focus:
- tiny helper functions that remove duplication in loop logic

## 3) `packsToOpen(cookiesNeeded, packs)`

Use a `while` loop.

Rules:
- open packs in listed order
- unknown size adds `0` cookies but still counts as opened
- stop when target reached or no packs remain
- early return `0` if `cookiesNeeded <= 0`

Recommended state:
- `openedPacks`
- `cookiesTotal`
- `index`

Loop skeleton:

```js
while (cookiesTotal < cookiesNeeded && index < packs.length) {
  // consume one pack
}
```

## 4) `countQueueTypes(queue)`

Build a frequency object.

Rules:
- ignore `'skip'`
- count all other labels

Pattern:

```js
const counts = {};
for (const label of queue) {
  if (label === 'skip') continue;
  if (counts[label] === undefined) counts[label] = 1;
  else counts[label] += 1;
}
```

Useful check:

```js
Object.keys(counts).length;
```

That tells you how many distinct non-skip labels were seen.

## 5) `remainingQueueTasks(timeLeft, queue)`

Return tasks not started before handoff.

Rules:
- process from front of queue
- if queue is non-empty, first task is always started
- started task always finishes
- use `counterTaskMinutes` to subtract time

This naturally fits a `do...while` style flow:

```js
if (queue.length === 0) return [];

do {
  // start + finish one task
} while (timeLeft > 0 && thereAreMoreTasks);
```

## Solve Order

1. `counterTaskMinutes`
2. `cookiesFromPackSize`
3. `packsToOpen`
4. `countQueueTypes`
5. `remainingQueueTasks`

## Debug Checklist

If tests fail, check:
- Did every `switch` include `default`?
- Does each loop iteration update counters/index?
- Are unknown values handled safely?
- Are you returning the exact expected type?
- For handoff logic, does first task start when queue is non-empty?

## Complexity Notes

- Mapping helpers are `O(1)`.
- Queue/list scans are `O(n)`.
- Frequency object space is `O(k)` for `k` distinct labels.

This is exactly the reasoning baseline you want before moving to harder variants.

