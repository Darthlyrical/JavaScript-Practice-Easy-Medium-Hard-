import { describe, expect, test } from '@jest/globals';
import {
  countOrdersByFlavor,
  cupsFromSleeve,
  remainingPrepQueue,
  sleevesToOpen,
  stationTaskMinutes,
  topFlavor,
} from './stand-drills';

describe('stationTaskMinutes', () => {
  test('returns base times for known tasks', () => {
    expect(stationTaskMinutes('slice-citrus')).toBe(0.5);
    expect(stationTaskMinutes('wash-blender')).toBe(1);
    expect(stationTaskMinutes('refill-ice')).toBe(1);
    expect(stationTaskMinutes('mix-syrup')).toBe(1.5);
    expect(stationTaskMinutes('deep-clean')).toBe(3.5);
  });

  test('returns default base time for unknown tasks', () => {
    expect(stationTaskMinutes('label-shelves')).toBe(2);
  });

  test('adds urgent-time modifier for starred tasks', () => {
    expect(stationTaskMinutes('mix-syrup*')).toBe(1.75);
    expect(stationTaskMinutes('unknown-task*')).toBe(2.25);
  });
});

describe('cupsFromSleeve', () => {
  test('returns cup count for known sleeve sizes', () => {
    expect(cupsFromSleeve('mini')).toBe(4);
    expect(cupsFromSleeve('standard')).toBe(7);
    expect(cupsFromSleeve('bulk')).toBe(12);
  });

  test('returns 0 for unknown sizes', () => {
    expect(cupsFromSleeve('mega')).toBe(0);
  });
});

describe('sleevesToOpen', () => {
  test('opens only as many sleeves as needed after considering bin stock', () => {
    expect(sleevesToOpen(20, ['mini', 'bulk', 'standard'], 6)).toBe(2);
  });

  test('opens none when bin already has enough cups', () => {
    expect(sleevesToOpen(5, ['mini', 'bulk'], 5)).toBe(0);
  });

  test('unknown size counts as opened even though it adds 0 cups', () => {
    expect(sleevesToOpen(5, ['mystery', 'standard'], 0)).toBe(2);
  });

  test('uses all sleeves if target is still not met', () => {
    expect(sleevesToOpen(30, ['bulk', 'standard'], 0)).toBe(2);
  });
});

describe('countOrdersByFlavor', () => {
  test('counts valid orders by flavor and ignores invalid/water entries', () => {
    expect(
      countOrdersByFlavor([
        'mango|large',
        'berry|small',
        'mango|medium',
        'water|small',
        '|large',
        '',
        'berry|',
        'peach',
      ])
    ).toEqual({
      mango: 2,
      berry: 2,
    });
  });

  test('returns empty object when no valid flavors exist', () => {
    expect(countOrdersByFlavor(['', '|large', 'water|small', 'apple'])).toEqual({});
  });
});

describe('topFlavor', () => {
  test('returns the flavor with highest frequency', () => {
    expect(topFlavor(['mango|l', 'berry|s', 'mango|m', 'water|s'])).toBe('mango');
  });

  test('uses alphabetical tie-breaker when counts match', () => {
    expect(topFlavor(['berry|s', 'apple|l', 'apple|m', 'berry|l'])).toBe('apple');
  });

  test('returns null when there are no valid flavors', () => {
    expect(topFlavor(['', '|large', 'water|small', 'peach'])).toBeNull();
  });
});

describe('remainingPrepQueue', () => {
  test('returns tasks not started before handoff', () => {
    expect(
      remainingPrepQueue(3.25, [
        'wash-blender',
        'mix-syrup*',
        'slice-citrus',
        'deep-clean',
      ])
    ).toEqual(['deep-clean']);
  });

  test('returns empty list when all tasks are started in time', () => {
    expect(
      remainingPrepQueue(6, [
        'slice-citrus',
        'refill-ice',
        'mix-syrup*',
        'slice-citrus',
      ])
    ).toEqual([]);
  });

  test('always starts first task when queue is non-empty', () => {
    expect(remainingPrepQueue(0, ['deep-clean', 'slice-citrus'])).toEqual([
      'slice-citrus',
    ]);
  });

  test('works with an empty queue', () => {
    expect(remainingPrepQueue(5, [])).toEqual([]);
  });
});

