import { describe, expect, test } from '@jest/globals';
import {
  boxesToOpen,
  conesFromBoxSize,
  countShiftEvents,
  remainingTasks,
  standTaskMinutes,
} from './juice-practice';

describe('standTaskMinutes', () => {
  test('returns known task times', () => {
    expect(standTaskMinutes('wash-pitcher')).toBe(0.75);
    expect(standTaskMinutes('slice-fruit')).toBe(1.25);
    expect(standTaskMinutes('prep-garnish')).toBe(1.25);
    expect(standTaskMinutes('blend-base')).toBe(2.5);
    expect(standTaskMinutes('sanitize-station')).toBe(4);
  });

  test('returns default time for unknown tasks', () => {
    expect(standTaskMinutes('take-photo')).toBe(1.5);
    expect(standTaskMinutes('label-shelf')).toBe(1.5);
  });
});

describe('conesFromBoxSize', () => {
  test('returns cone counts for known box sizes', () => {
    expect(conesFromBoxSize('starter')).toBe(3);
    expect(conesFromBoxSize('standard')).toBe(5);
    expect(conesFromBoxSize('party')).toBe(9);
  });

  test('returns 0 for unknown sizes', () => {
    expect(conesFromBoxSize('bulk')).toBe(0);
    expect(conesFromBoxSize('')).toBe(0);
  });
});

describe('boxesToOpen', () => {
  test('opens enough boxes to satisfy cone target', () => {
    expect(boxesToOpen(16, ['starter', 'party', 'standard'])).toBe(3);
  });

  test('stops early when no cones are needed', () => {
    expect(boxesToOpen(0, ['starter', 'party', 'standard'])).toBe(0);
  });

  test('uses every available box if still short on cones', () => {
    expect(boxesToOpen(30, ['party', 'starter'])).toBe(2);
  });

  test('unknown box size still counts as opened', () => {
    expect(boxesToOpen(5, ['mystery', 'standard'])).toBe(2);
  });
});

describe('countShiftEvents', () => {
  test('counts non-idle events', () => {
    expect(
      countShiftEvents([
        'rush',
        'idle',
        'restock',
        'rush',
        'cleanup',
        'idle',
        'rush',
      ])
    ).toEqual({
      rush: 3,
      restock: 1,
      cleanup: 1,
    });
  });

  test('returns an empty object when all events are idle', () => {
    expect(countShiftEvents(['idle', 'idle'])).toEqual({});
  });

  test('returns an empty object for no events', () => {
    expect(countShiftEvents([])).toEqual({});
  });
});

describe('remainingTasks', () => {
  test('returns remaining queue after budget runs out', () => {
    expect(
      remainingTasks(3, [
        'slice-fruit',
        'blend-base',
        'wash-pitcher',
        'sanitize-station',
      ])
    ).toEqual(['wash-pitcher', 'sanitize-station']);
  });

  test('finishes all tasks when enough budget is available', () => {
    expect(
      remainingTasks(10, [
        'wash-pitcher',
        'slice-fruit',
        'blend-base',
        'prep-garnish',
        'sanitize-station',
      ])
    ).toEqual([]);
  });

  test('always starts first task when tasks exist', () => {
    expect(
      remainingTasks(0, ['wash-pitcher', 'prep-garnish', 'blend-base'])
    ).toEqual(['prep-garnish', 'blend-base']);
  });

  test('returns empty list when there are no tasks', () => {
    expect(remainingTasks(5, [])).toEqual([]);
  });
});
