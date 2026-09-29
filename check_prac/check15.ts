// function identity<T>(value: T): T

// Return whatever value is passed.
// Test it with a string, number, and boolean.

function identity<T>(value: T): T {
  return value;
}

console.log(typeof identity(`name`));
console.log(typeof identity(1200));
console.log(typeof identity(true));

// Return the first item.

function getFirst<T>(items: T[]): T | undefined {
  return items[0] ? items[0] : undefined;
}

// console.log(getFirst([1, 3, 4, 3, 2]));
// console.log(getFirst(["apple", "dev"]));
// console.log(getFirst([]));

// make array

function makeArray<T>(value: T): T[] {
  let array: Array<T> = [];
  array.push(value);
  return array;
}

// console.log(makeArray(10));
// console.log(makeArray(`Hello`));

// new fun

function makePair<T, U>(value1: T, value2: U): (T | U)[] {
  let array: (T | U)[] = [];
  array.push(value1);
  array.push(value2);
  return array;
}

console.log(makePair("Dev", 23));



interface Keypair<T, U> {
  key: T;
  value: U;
}

let keyPairvalue: Keypair<string, number> = {
  key: `Dev kumar`,
  value: 123,
};
console.log(keyPairvalue);

let keyPairvalue2: Keypair<string, boolean> = {
  key: `Dev kumar`,
  value: true,
};
console.log(keyPairvalue2);
