// index signature

interface StringArray {
  // string array with index type also defined
  [index: number]: string;
}

let array1: StringArray = ["dev", "kumar", "b.tech"];
console.log(array1[2]);
console.log(array1[3]);

interface fruits {
  [key: string]: string;
}

const fruitsArray: fruits = {
  red: `apple`,
  green: `guava`,
  yellow: `mango`,
  purple: `grapes`,
};

console.log(fruitsArray["yellow"]);
