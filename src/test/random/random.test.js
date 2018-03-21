import { randomInteger } from './random';

test('random value between 1 and 6', () => {
  expect(randomInteger(1, 6)).toBeDefined();
});

test('random value between negative number and 6', () => {
  expect(randomInteger(-10, 6)).toBeDefined();
});

test('if pass string will be NaN', () => {
  expect(randomInteger('abc', 6)).toBeNaN();
});

test('reverse min/max', () => {
  expect(randomInteger(100, -6)).toBeDefined();
});
