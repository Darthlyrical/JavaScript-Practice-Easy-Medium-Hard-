import { describe, expect, test } from '@jest/globals';
import {
  cookiesFromPackSize,
  countQueueTypes,
  counterTaskMinutes,
  packsToOpen,
  remainingQueueTasks,
} from './counter-basics';

describe('counterTaskMinutes', () => {
  test('returns expected times for known tasks', () => {
    expect(counterTaskMinutes('wipe-counter')).toBe(0.5);
    expect(counterTaskMinutes('slice-apple')).toBe(1);
    expect(counterTaskMinutes('restock-napkins')).toBe(1.5);
  });

  test('returns default time for unknown tasks', () => {
    expect(counterTaskMinutes('label-boxes')).toBe(1.25);
  });
});

describe('cookiesFromPackSize', () => {
  test('returns cookie counts for known sizes', () => {
    expect(cookiesFromPackSize('small')).toBe(2);
    expect(cookiesFromPackSize('medium')).toBe(4);
    expect(cookiesFromPackSize('large')).toBe(6);
  });

  test('returns 0 for unknown sizes', () => {
    expect(cookiesFromPackSize('family')).toBe(0);
  });
});

describe('packsToOpen', () => {
  test('opens enough packs to hit target', () => {
    expect(packsToOpen(5, ['small', 'large'])).toBe(2);
  });

  test('returns 0 when no cookies are needed', () => {
    expect(packsToOpen(0, ['large', 'medium'])).toBe(0);
  });

  test('opens all packs if still below target', () => {
    expect(packsToOpen(20, ['large', 'medium'])).toBe(2);
  });

  test('unknown size still counts as opened', () => {
    expect(packsToOpen(3, ['mystery', 'small'])).toBe(2);
  });
});

describe('countQueueTypes', () => {
  test('counts labels and ignores skip', () => {
    expect(countQueueTypes(['order', 'skip', 'order', 'clean'])).toEqual({
      order: 2,
      clean: 1,
    });
  });

  test('returns empty object when all labels are skip', () => {
    expect(countQueueTypes(['skip', 'skip'])).toEqual({});
  });

  test('returns empty object for an empty queue', () => {
    expect(countQueueTypes([])).toEqual({});
  });
});

describe('remainingQueueTasks', () => {
  test('returns tasks not started before handoff', () => {
    expect(
      remainingQueueTasks(1.2, ['slice-apple', 'restock-napkins', 'wipe-counter'])
    ).toEqual(['wipe-counter']);
  });

  test('returns empty list when all tasks are started', () => {
    expect(
      remainingQueueTasks(4, ['wipe-counter', 'slice-apple', 'restock-napkins'])
    ).toEqual([]);
  });

  test('always starts the first task when queue exists', () => {
    expect(remainingQueueTasks(0, ['restock-napkins', 'wipe-counter'])).toEqual([
      'wipe-counter',
    ]);
  });

  test('returns empty list for empty queue', () => {
    expect(remainingQueueTasks(2, [])).toEqual([]);
  });
});

