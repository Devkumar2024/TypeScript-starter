// generics are way to create components functioms, classes and interfaces that work with different types without loosing type safety

// generics serve as a placeholder to enforce type safety and consistency, whereas any is a wildcard that bypasses type checking completely, stripping away the benefits of a statically typed language

function genericIdentity<T>(arg: T): T {
  return arg;
}

// dynamic type

// console.log(genericIdentity<number>(12));
// // console.log(genericIdentity<string>(12)) // error dega
// console.log(genericIdentity<string>("12"));
// console.log(genericIdentity<boolean>(true));

// do alg alg type
interface Keypair<T, U> {
  key: T;
  value: U;
}

let keyPairvalue: Keypair<string, number> = {
  key: `Dev kumar`,
  value: 123,
};
// console.log(keyPairvalue);

let keyPairvalue2: Keypair<string, boolean> = {
  key: `Dev kumar`,
  value: true,
};
// console.log(keyPairvalue2);

// generic constrains :: allow you to restrict the types that can be passed into a generic type parameter
// restricting T to pass length ppt
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}

console.log(getLength(`dev kumar`));
console.log(getLength([1, 2, 3, 4, 5]));
// console.log(getLength(123)); ERROR only whi types pass hongi jinme length mil skti hai

// generic classes
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContents(): T {
    return this.content;
  }
}

const numberBox = new Box(100);
console.log(numberBox.getContents());
const stringBox = new Box(`Dev kumar`);
console.log(stringBox.getContents());
