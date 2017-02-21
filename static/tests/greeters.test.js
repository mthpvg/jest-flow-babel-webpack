import {sayHello} from '../src/greeters';

test('Say hello to Mathieu', () => {
  expect(sayHello('Mathieu')).toBe('Hello Mathieu!');
});
