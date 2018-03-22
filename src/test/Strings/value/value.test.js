import { extractCurrentlyValue } from './value';

test('descript', () => {
  expect(extractCurrentlyValue('$120')).toBe(120);
});

test('descript2', () => {
  expect(extractCurrentlyValue('120')).toBe(20);
});

test('descript3', () => {
  expect(extractCurrentlyValue('')).toBe(0);
});
