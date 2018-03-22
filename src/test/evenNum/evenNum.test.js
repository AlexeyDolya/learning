import { evenNum } from './evenNum';

test('does array include 2, 4', () => {
  expect(evenNum(0, 10)).toContain(2, 4);
});

test('function return true', () => {
  expect(evenNum(0, 20)).toBeTruthy();
});

test('if pass string, function return [], true', () => {
  expect(evenNum('string', 'string')).toBeTruthy();
});
