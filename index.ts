import { expect, test } from 'bun:test';
import numbers from './numbers.json';

test('Check numbers length', () => {
  expect(numbers).toHaveLength(numbers.length);
});
