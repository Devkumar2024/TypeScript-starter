// Write a function:

// function printValue(value: string | number)

// If it's a string, return its uppercase version. If it's a number, return the number multiplied by 2.

const value1: string = ` Dev kumar `;
const value2: number = 34;

function printValue(value: string | number): string | number {
  if (typeof value === "string") return value.trim().toUpperCase();
  else return value * 2;
}

// console.log(printValue(value1));
// console.log(printValue(value2));

// Create:
// type Status = "active" | "inactive";

// Write a function that returns an appropriate message for each status.

type Status = "active" | "inactive";
let server: Status = "active";

function toggleServer(server: Status): string {
  if (server === "inactive") {
    server = "active";
  } else if (server === "active") {
    server = "inactive";
  }
  return `Server status : ${server}`;
}

// console.log(toggleServer(server));

// type Role = "admin" | "user" | "guest";
// Write a function that returns a different message for each role.

type Role = "admin" | "user" | "guest";

interface newUser {
  user: Role;
}

const newAppl: newUser = { user: "guest" };

function greet(applicant: newUser): string {
  if (applicant.user === "admin") {
    return `redirecting to admin panel....`;
  } else if (applicant.user === "user") {
    return `login screen will load soon...`;
  } else {
    return `hello guest!`;
  }
}

console.log(greet(newAppl));

// Write a function accepting unknown. If the value is a string, return its length. If it's a number, return it multiplied by 2.

let value: unknown = 456;

function ops(value: unknown): string | number {
  if (typeof value === "string") return `String length : ${value.length}`;
  else if (typeof value === "number") return value * 2;

  throw new Error(`Unsupported type: ${typeof value}`);
}
console.log(ops(value));
