interface Person {
  namestud: string;
  readonly course: string;
  age: number;
  honorsDegree?: boolean; // optional

  introduce(): void;
  addmath(a: number, b: number): number;
}

// User object ko Person interface follow karna zaroori hai
const user: Person = {
  namestud: "Rahul",
  course: `Btech IT-A1`,
  age: 25,

  introduce() {
    console.log(
      `Hi my name is ${this.namestud}, ${this.age}YO and currently studying ${this.course}`,
    );
  },

  addmath(a, b) {
    return a * b;
  },
};

// user.introduce();
// console.log(user.math(65,78));

// ensures type safety
interface mathOP {
  (a: number, b: number): number;
}

// two objects using interface
const add: mathOP = (x, y) => x + y;
const multuply: mathOP = (x, y) => x * y;

// console.log(add(10,10));
// console.log(multuply(10,10));

// type alias, helps to make code more readable
// type Aliasname = typeDefinition;   // syntax

type UserID = string;
let uid: UserID = `abc`;

type person2 = {
  name: string;
  age: number;
};

let p1: person2 = {
  name: `george`,
  age: 23,
};

type identity = string | number;
let usid: identity = `devel6890`;
let gsid: identity = 4235;

// interface vs type alias
interface u1 {
  name: string;
  age: number;
}

// interface customer extends u1 {
//   address: string;
//   // i want name and phone also here, interfaces can be done by extends keyword
// }
interface u1 {
  address: string;
}

//  same interface passed two times
let myCustomer: u1 = {
  address: `moti nagar`,
  name: `srikant`,
  age: 89,
};

type vehicle = {
  name: string;
  model: number;
};

// & denotes intersection tyoe
type Car = vehicle & {
  isElectric: boolean;
};

let AUDI: Car = {
  name: `audi A6`,
  model: 2018,
  isElectric: false,
};

type status = "active" | "inactive" | "off";
let machineStatus: status = "active";

type Tree = {
  value: string;
  children: Tree[];
};

let mangoTree: Tree = {
  value: `mango`,
  children: [{ value: `leaves`, children: [] }],
};

// intersection types and use of optional field
let config : {server : string, port : number} & {isSecure : boolean, timeout?: number} = {
  server : `localhost`,
  port : 8080,
  isSecure : true,
  // timeout : 3000
}