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

function GREET(greetings:string, ...names:string[]):void {
  // cant use string return type in GREET as foreach() returns undefined type
  names.forEach((name)=>{
    console.log(`${greetings} ${name}`); 
  })
}

// GREET("Sat sri Akaal", "dev", "aman", "sagar")


// define a function that accepts an object with name