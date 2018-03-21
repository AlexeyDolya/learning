import { factorial } from './factorial';

test('factorial 5', () => {
  expect(factorial(5)).toBe(120);
});

test('if pass number as string', () => {
  expect(factorial('5')).toBe(120);
});
