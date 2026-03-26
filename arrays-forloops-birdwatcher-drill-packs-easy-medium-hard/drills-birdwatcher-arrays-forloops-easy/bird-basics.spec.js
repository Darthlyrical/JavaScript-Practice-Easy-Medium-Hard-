import { describe, expect, test } from '@jest/globals';
import {
  countDaysAtOrAbove,
  firstNDaysTotal,
  fixAlternatingDays,
  hasQuietDay,
  totalBirds,
} from './bird-basics';

describe('totalBirds', () => {
  test('sums all days', () => {
    expect(totalBirds([2, 5, 0, 7])).toBe(14);
  });

  test('works with empty logs', () => {
    expect(totalBirds([])).toBe(0);
  });
});

describe('countDaysAtOrAbove', () => {
  test('counts days at or above threshold', () => {
    expect(countDaysAtOrAbove([2, 5, 0, 7, 5], 5)).toBe(3);
  });

  test('works with zero threshold', () => {
    expect(countDaysAtOrAbove([2, 5, 0, 7, 5], 0)).toBe(5);
  });
});

describe('firstNDaysTotal', () => {
  test('sums only first n days', () => {
    expect(firstNDaysTotal([2, 5, 0, 7], 3)).toBe(7);
  });

  test('sums all if n is larger than list length', () => {
    expect(firstNDaysTotal([2, 5, 0, 7], 10)).toBe(14);
  });

  test('returns 0 when n <= 0', () => {
    expect(firstNDaysTotal([2, 5, 0, 7], 0)).toBe(0);
  });
});

describe('fixAlternatingDays', () => {
  test('adds one on every second day starting from index 0', () => {
    const log = [2, 5, 0, 7, 4, 1];
    fixAlternatingDays(log);
    expect(log).toEqual([3, 5, 1, 7, 5, 1]);
  });

  test('works for short logs', () => {
    const log = [0];
    fixAlternatingDays(log);
    expect(log).toEqual([1]);
  });
});

describe('hasQuietDay', () => {
  test('returns true when there is at least one zero', () => {
    expect(hasQuietDay([2, 0, 1])).toBe(true);
  });

  test('returns false when there are no quiet days', () => {
    expect(hasQuietDay([2, 5, 1])).toBe(false);
  });

  test('returns false for empty logs', () => {
    expect(hasQuietDay([])).toBe(false);
  });
});
