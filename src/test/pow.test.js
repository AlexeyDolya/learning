import { pow } from './pow';

test('2 in the 5 degree', () => {
  expect(pow(2, 5)).toBe(64);
});

test('10 in the -1 degree', () => {
  expect(pow(10, -1)).toBe(10);
});

test('if argument is string', () => {
  expect (pow('abc', 3)).toBeFalsy();
});
