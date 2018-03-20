import { checkAge } from './checkAge';

test('if age is more', () => {
  expect(checkAge(20)).toBeTruthy();
});

test('if age is less', () => {
  expect(checkAge(10)).toBeFalsy();
});

test('if argument is string', () => {
  expect(checkAge('myAge')).toBeFalsy();
});

test('if age = 18', () => {
  expect(checkAge(18)).toBeFalsy();
});
