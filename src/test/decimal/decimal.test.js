import { getDecimal } from './decimal';

test('fraction of 12.453', () => {
  expect(getDecimal(12.453)).toBe(0.4529999999999994);
});

test('fraction of 12', () => {
  expect(getDecimal(12)).toBe(0);
});

test('if pass number as string ', () => {
  expect(getDecimal('12.453')).toBe(0.4529999999999994);
});

test('if pass string will be NaN', () => {
  expect(getDecimal('abc')).toBeNaN();
});

