// @flow

const sayHello = (name: string): string => `Hello ${name}!`;

const sayFutureAge = (age: number): string => `Next year you'll be ${age + 1}!`;

const square = function square(numbers: Array<number>): string {
  return numbers.map(number => number * number).join(' ');
};

export { sayHello, sayFutureAge, square };
