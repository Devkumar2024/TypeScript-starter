// Regular function
function factorial(n: number): number {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

// console.log(factorial(5));

// passing into variable
const result = function (a: number, b: number): number {
  return a / b;
};

// console.log(result(120, 3));

// arrow functions
const multiply = (a: number, b: number): number => {
  return a * b;
};
// console.log(multiply(12,3));

//optional parameters
function greet1(sname: string, greeting?: string): string {
  return `${greeting ? greeting : ""} ${sname}`;
}
// console.log(greet1("Dev", "Hola Amigo"));
// console.log(greet1("Dev"));

// default parameters
function greet2(sname: string, greeting: string = `Hi champ`): string {
  return `${greeting ? greeting : ""} ${sname}`;
}
// console.log(greet2('mikku'));

// function overloading
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number {
  return value.length;
}

// console.log(getLength(`Hello ji`));
// console.log(getLength([1, 2, 3, 4, 5]));

// implementation using union
function formatInput(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.trim();
  }
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  }
  return value ? "Yes" : "No";
}

// rest parameter
function combineStrings(prefix: string, ...items: string[]): string {
  return `${prefix}: ${items.join(", ")}`;
}
// console.log(combineStrings("Categories", "Tech", "Books", "Gaming"));
// Returns: "Categories: Tech, Books, Gaming"

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, sum) => {
    return acc + sum;
  }, 0);
}

// console.log(sum(1,2,3,4,5,6,7,8,9));

function GREET(greetings: string, ...names: string[]): void {
  // cant use string return type in GREET as foreach() returns undefined type
  names.forEach((name) => {
    console.log(`${greetings} ${name}`);
  });
}

// GREET("Sat sri Akaal", "dev", "aman", "sagar")

// define a function that accepts an object with name, age and email and returns a formatted string, say age optional

interface User {
  name: string;
  age?: number;
  email: string;
}

function formatUser(user: User): string {
  return `User = ${user.name}, (${user?.age}) years  can be contacted via email = ${user.email}`;
}

const ramlamdam: User = {
  name: `Big ramy`,
  age: 41,
  email: `mrO2020@gmail.com`,
};

const hadi: User = {
  name: `hadi`,
  email: `mrO2022@gmail.com`,
};

// console.log(formatUser(ramlamdam));
// console.log(formatUser(hadi));

// Calculate total price using a function in Ts of an array of product objects, each product has a price and quantity

interface productdata {
  price: number;
  Qty: number;
}

// array of product objects,
function calcTotal(products: productdata[]): number {
  return products.reduce((total, product) => {
    return total + product.price * product.Qty;
  }, 0);
}

let cart: productdata[] = [
  {
    price: 1000,
    Qty: 2,
  },
  {
    price: 1200,
    Qty: 20,
  },
];

// console.log(calcTotal(cart));

// Given a union type for a vehicle that can either be car or bike with different ppts. Write a function to log deatils on the vehicle type.

type Cardata = {
  type: "car";
  brand: string;
  model: string;
  year: number;
};

type bike = {
  type: "bike";
  brand: string;
  cc: number;
};

type vehicleData = bike | Cardata;

function getVehicleDetails(vehicle : vehicleData):void{
  if(vehicle.type === 'car'){
      console.log(`Car : ${vehicle.brand} ${vehicle.model}manufactured in year ${vehicle.year}`);
  }else if(vehicle.type === 'bike'){
    console.log(`Bike of ${vehicle.brand}, CC : ${vehicle.cc}`);
  }
}

let myCar : vehicleData = {
  type :'car',
  brand : `tesla`,
  model : `hornet 10`,
  year : 2003
}

let myBike : vehicleData = {
  type : `bike`,
  brand : `Ducati`,
  cc : 200
}
getVehicleDetails(myCar);
getVehicleDetails(myBike);


