import { pow } from './pow';

test('2 in the 5 degree', () => {
  expect(pow(2, 5)).toBe(64);
});

test('if argument is string', () => {
  expect (pow('abc', 3)).toBeFalsy();
});

test('0 degree', () => {
  expect (pow(5, 0)).toBe(5);
});
