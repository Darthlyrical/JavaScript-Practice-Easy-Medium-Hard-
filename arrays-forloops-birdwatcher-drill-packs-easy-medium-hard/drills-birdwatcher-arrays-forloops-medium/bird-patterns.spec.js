import { describe, expect, test } from '@jest/globals';
import {
  birdsInWeek,
  fixEveryThirdDay,
  longestQuietStreak,
  totalBirds,
  weekTotals,
} from './bird-patterns';

describe('totalBirds', () => {
  test('sums all days', () => {
    expect(totalBirds([2, 5, 0, 7, 4, 1, 3])).toBe(22);
  });
});

describe('birdsInWeek', () => {
  test('returns total for week 1', () => {
    const log = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
    expect(birdsInWeek(log, 1)).toBe(22);
  });

  test('returns total for week 2', () => {
    const log = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
    expect(birdsInWeek(log, 2)).toBe(12);
  });

  test('returns 0 when week is out of range', () => {
    expect(birdsInWeek([1, 2, 3], 2)).toBe(0);
  });
});

describe('longestQuietStreak', () => {
  test('finds longest consecutive zero streak', () => {
    expect(longestQuietStreak([0, 0, 2, 0, 0, 0, 1])).toBe(3);
  });

  test('returns 0 when there are no quiet days', () => {
    expect(longestQuietStreak([1, 2, 3])).toBe(0);
  });

  test('returns 0 for empty logs', () => {
    expect(longestQuietStreak([])).toBe(0);
  });
});

describe('fixEveryThirdDay', () => {
  test('increments days at index 0, 3, 6, ...', () => {
    const log = [2, 5, 0, 7, 4, 1, 3];
    fixEveryThirdDay(log);
    expect(log).toEqual([3, 5, 0, 8, 4, 1, 4]);
  });
});

describe('weekTotals', () => {
  test('returns totals for complete weeks', () => {
    const log = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
    expect(weekTotals(log)).toEqual([22, 12]);
  });

  test('ignores incomplete final week', () => {
    const log = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(weekTotals(log)).toEqual([28]);
  });

  test('returns empty array for fewer than 7 days', () => {
    expect(weekTotals([1, 2, 3])).toEqual([]);
  });
});
