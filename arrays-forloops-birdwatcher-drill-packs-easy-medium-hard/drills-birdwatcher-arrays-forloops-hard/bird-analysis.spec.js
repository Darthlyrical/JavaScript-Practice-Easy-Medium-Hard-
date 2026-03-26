import { describe, expect, test } from '@jest/globals';
import {
  mergeLogs,
  repairMissingCounts,
  rollingMaxBirds,
  totalBirdsArrayLike,
  weekWithMostBirds,
} from './bird-analysis';

class CountReport {
  constructor(counts) {
    counts.forEach((count, index) => {
      this[index] = count;
    });
    this.length = counts.length;
  }
}

function report(...values) {
  return new CountReport(values);
}

function toArray(reportLike) {
  return Array.from({ length: reportLike.length }, (_, i) => reportLike[i]);
}

describe('totalBirdsArrayLike', () => {
  test('sums values from array-like logs', () => {
    expect(totalBirdsArrayLike(report(2, 5, 0, 7, 4, 1, 3))).toBe(22);
  });
});

describe('weekWithMostBirds', () => {
  test('returns week with highest total', () => {
    const log = report(
      2, 5, 0, 7, 4, 1, 3,
      0, 2, 5, 0, 1, 3, 1,
      4, 4, 4, 4, 4, 4, 4
    );
    expect(weekWithMostBirds(log)).toBe(3);
  });

  test('uses earliest week on ties', () => {
    const log = report(
      2, 2, 2, 2, 2, 0, 0,
      1, 1, 1, 1, 1, 3, 2
    );
    expect(weekWithMostBirds(log)).toBe(1);
  });

  test('returns 0 when no complete week exists', () => {
    expect(weekWithMostBirds(report(1, 2, 3, 4, 5, 6))).toBe(0);
  });
});

describe('rollingMaxBirds', () => {
  test('finds max contiguous window total', () => {
    expect(rollingMaxBirds(report(2, 5, 0, 7, 4), 3)).toBe(12);
  });

  test('works for window size 1', () => {
    expect(rollingMaxBirds(report(2, 5, 0, 7, 4), 1)).toBe(7);
  });

  test('returns 0 for invalid window sizes', () => {
    expect(rollingMaxBirds(report(2, 5, 0), 0)).toBe(0);
    expect(rollingMaxBirds(report(2, 5, 0), 10)).toBe(0);
  });
});

describe('repairMissingCounts', () => {
  test('replaces missing values using previous day', () => {
    const log = report(2, -1, -1, 4, -1);
    repairMissingCounts(log, -1);
    expect(toArray(log)).toEqual([2, 2, 2, 4, 4]);
  });

  test('first missing day becomes zero', () => {
    const log = report(-1, 3, -1);
    repairMissingCounts(log, -1);
    expect(toArray(log)).toEqual([0, 3, 3]);
  });
});

describe('mergeLogs', () => {
  test('sums logs day by day', () => {
    const primary = report(2, 5, 0, 7);
    const secondary = report(1, 0, 3);
    expect(mergeLogs(primary, secondary)).toEqual([3, 5, 3, 7]);
  });

  test('handles different lengths and empty values', () => {
    const primary = report(1, 2);
    const secondary = report();
    expect(mergeLogs(primary, secondary)).toEqual([1, 2]);
  });
});
