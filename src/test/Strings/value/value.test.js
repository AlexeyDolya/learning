import { extractCurrentlyValue } from './value';

test('pass 120', () => {
  expect(extractCurrentlyValue('120')).toBe(20);
});

test('pass empty line', () => {
  expect(extractCurrentlyValue('')).toBe(0);
});
