// let a: number = 1;
// a = 123;

// // strict type checking
// // function addnums(c: number, d: number): string {
// //   return c + d; // type checking here
// // }

// function addnums(c: number, d: number): number {
//   return c + d; // type checking here
// }

// console.log(a);

// baisc types
let num1: number = 123_34_3454;
let num2: bigint = 45646456n;

console.log(`${num1} and its type : ${typeof num1}`);
console.log(`${num2} and its type : ${typeof num2}`);

let c: string = "Dev kumar";
console.log(`${c} and its type : ${typeof c}`);

let isAvailable: boolean = false;
console.log(`${isAvailable} and its type : ${typeof isAvailable}`);

// undefined and null
let abc: undefined = undefined;
let def: null = null;
console.log(`abc = ${abc}, def = ${def}`);

let obj: { name: string; age: number; city: string } = {
  name: "Dev kumar",
  age: 25,
  city: `Ludhiana`,
};

let obj1: { phone: number } = { ...obj, phone: 8965412569 };
console.log(obj1);
obj = { ...obj, age: 67 };
console.log(obj);

// any type
let variable: any = "Hi, I am dev";
console.log(variable);
variable = {
  company: `abc pvt Ltd.`,
  location: "pune",
};
console.log(variable);

function testAnyType(variable: any) {
  console.log(variable);
}

let charArray: string[] = ["Dev", "kumar", "d"];
let numArray: number[] = [1, 2, 3, 4, 5, 56];

// tuples
let response: [number, string] = [200, "success"]; // http response
// response.push("505"); flaw/ drawback of tuple in TS
console.log(response);

// enum
enum color {
  Red = `apple`,
  Green = `guava`,
  Blue = `Grapes`,
}
console.log(color.Blue); // bydef index value : 2

let newColor: color = color.Red;
console.log(`${newColor} and ${typeof newColor}`);

// unknown type
let notSure: unknown = "dev"; // not sure about DT
if (typeof notSure === "number") {
  console.log(notSure.toFixed(10));
} else if (typeof notSure === "string") {
  console.log(notSure.length);
}

// never type :: values never occur
function infiniteLoop(): never {
  while (true) {
    // do something endless
    console.log(1);
  }
}
// infiniteLoop()

// throw error
function throwError(message: string): never {
  throw new Error(message);
}

// throwError(`Oops, something went wrong...`)

// void type
function printMessage(message: string): void {
  console.log(message);
}

// printMessage(`Hi sir, dev here`);

// type inference
let username = "Dev kumar"; // ts will infer username as string
console.log(typeof username);

// type assertions
let varhar: any = "Hello";
let strlen: number = (varhar as string).length;
console.log(strlen);

// union type
// id can either be string or number
function printId(id: number | string) {
  console.log(`id : ${id}`);
}

// printId(2004902);
// printId(`DeBz`);

// type narrowing

function printIdentity(id: number | string) {
  if (typeof id === "string") {
    console.log(`id is a string : ${id.toUpperCase()}`);
  } else {
    console.log(`id is a number : ${id}`);
  }
}

// printIdentity(2004902);
// printIdentity(`DeBz`);

// interface and types
