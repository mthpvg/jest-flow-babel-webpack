// @flow

type User = {firstName: string; lastName: string};


const sayFutureAge = (age: number): string => `Next year you'll be ${age + 1}!`;

const square = function square(numbers: Array<number>): string {
  return numbers.map(number => number * number).join(' ');
};

const name = function name(user: User): string {
  return `${user.firstName} ${user.lastName}`;
};

export { sayFutureAge, square, name };
