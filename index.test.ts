import { expect, test } from 'bun:test';
import { add } from '.';

test('Add', () => {
  console.log(add);
  expect(1 + 2).toBe(3);
});
