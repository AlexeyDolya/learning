import { min } from './min';

test('2 < 5', () => {
  expect(min(2, 5)).toBeTruthy();
});

test('string > than number', () => {
  expect(min('num', 100)).toBeTruthy();
});

test('upper case < than lower case', () => {
  expect(min('H', 'h')).toBeTruthy();
});

test('true < than number', () => {
  expect(min(true, 1000)).toBeTruthy();
});

test('false < than true', () => {
  expect(min(true, false)).toBeFalsy();
});
