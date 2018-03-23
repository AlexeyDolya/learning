import { sumTo } from './sumTo';

test('sum of numbers from 1 to 5', () => {
  expect(sumTo(5)).toBe(15);
});

test('if pass number as string', () => {
  expect(sumTo('5')).toBe(15);
});

test('if number is negative will return 0', () => {
  expect(sumTo(-6)).toBe(0);
});

test('if pass a string will return 0', () => {
  expect(sumTo('abc')).toBe(0);
});
