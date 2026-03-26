# Bird Watcher Drills: Arrays + For Loops (Medium)

This medium pack introduces more index math and week-based logic.

Concepts covered:
- running totals with `for`
- 1-based to 0-based index conversion
- scanning for streaks
- mutation on repeating index patterns
- generating derived arrays from grouped slices

## Files

- `bird-patterns.js`: unimplemented functions
- `bird-patterns.spec.js`: tests
- `README.md`: this guide
- parent `package.json`: root test scripts

## Run Tests

From parent folder `arrays-forloops-birdwatcher-drill-packs-easy-medium-hard`:

```bash
npm run test:medium
```

## Function Notes

## `birdsInWeek`

Week math:
- start index: `(week - 1) * 7`
- end index (exclusive): `start + 7`

Make sure you do not read past array length.

## `longestQuietStreak`

Track two numbers:
- `currentStreak`
- `maxStreak`

When value is zero, increment current streak.
When value is non-zero, reset current streak.

## `weekTotals`

Only complete 7-day chunks count.
A common pattern is:
- outer loop for week start (`0, 7, 14, ...`)
- inner loop summing seven days

## Complexity

- Most functions are `O(n)` time.
- `weekTotals` is still `O(n)` overall.
- Extra memory is `O(w)` for returned weekly totals, where `w` is number of full weeks.
