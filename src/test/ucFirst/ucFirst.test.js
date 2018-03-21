import { ucFirst } from './ucFirst';

test('pass lower case', () => {
  expect(ucFirst('петя')).toBe('Петя');
});

test('pass upper case already', () => {
  expect(ucFirst('Петя')).toBe('Петя');
});
