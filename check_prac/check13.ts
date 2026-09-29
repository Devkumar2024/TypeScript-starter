// Write:

// function greet(name: string, title?: string)

// It should return:

// "Hello Dev"
// "Hello Mr. Dev"

// depending on whether title is provided.

function greet(name: string, title?: string): string {
  return title === undefined ? `Hello ${name}` : `Hello ${title} ${name}`;
}

console.log(greet(`Dev`));
console.log(greet(`Dharam`, `Mr.`));

function discountedPrice(price: number, discount: number = 0): number {
  return price - (price * discount) / 100;
}

console.log(discountedPrice(12000, 10));
console.log(discountedPrice(12000));

// type Operation = (a: number, b: number) => number;
// Create addition and multiplication functions using this type.

type Operation = (a: number, b: number) => number;
const add : Operation = (a,b)=>a+b;
const multiply : Operation = (a,b)=>a*b;

console.log(add(10,10));
console.log(multiply(10,10));