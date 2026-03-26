# Bird Watcher Drills: Arrays + For Loops (Easy)

This pack is beginner-friendly practice for Bird Watcher-style logic.

Concepts covered:
- indexing into arrays
- `for` loops
- totals and counters
- basic mutation by index
- simple boolean scan logic

## Files

- `bird-basics.js`: unimplemented functions
- `bird-basics.spec.js`: tests
- `README.md`: this guide
- parent `package.json`: root test scripts

## Run Tests

From parent folder `drills-birdwatcher-arrays-forloops-easy-medium-hard`:

```bash
npm run test:easy
```

## Functions

## 1) `totalBirds(birdsPerDay)`

Sum all values in the list.

## 2) `countDaysAtOrAbove(birdsPerDay, threshold)`

Count how many days are `>= threshold`.

## 3) `firstNDaysTotal(birdsPerDay, n)`

Sum only the first `n` days.

Rules:
- `n <= 0` => `0`
- `n > length` => sum all

## 4) `fixAlternatingDays(birdsPerDay)`

Mutate the log by adding `1` to index `0, 2, 4, ...`.

## 5) `hasQuietDay(birdsPerDay)`

Return `true` if at least one value is `0`.

## Method Tips

- Keep a running total variable for sums.
- Keep a running count variable for frequency-like checks.
- In mutation functions, loop over indices and write back to the same array.
- Watch loop bounds carefully: use `i < birdsPerDay.length`.

## Complexity Notes

- These functions are mostly `O(n)` time.
- Extra space is `O(1)` for counters/totals.
