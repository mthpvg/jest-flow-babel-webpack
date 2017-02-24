import * as greeters from '../src/greeters';

test('Say hello to Mathieu', () => {
  expect(greeters.sayHello('Mathieu')).toBe('Hello Mathieu!');
});

test('Return next year age', () => {
  expect(greeters.sayFutureAge(32)).toBe('Next year you\'ll be 33!');
});

test('Square list of numbers', () => {
  expect(greeters.square([1, 2, 3, 4])).toBe('1 4 9 16');
});
