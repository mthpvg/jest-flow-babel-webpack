import * as format from '../src/format';


test('Return next year age', () => {
  expect(format.sayFutureAge(32)).toBe('Next year you\'ll be 33!');
});

test('Square list of numbers', () => {
  expect(format.square([1, 2, 3, 4])).toBe('1 4 9 16');
});

test('format the name of a user', () => {
  const user = {
    firstName: 'Mathieu',
    lastName: 'Pavageau',
  };
  expect(format.name(user)).toBe('Mathieu Pavageau');
});
