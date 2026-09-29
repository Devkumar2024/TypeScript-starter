// --- Generic helper ---
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

// --- Types for the test ---
interface User {
  id: number;
  name: string;
  role: "admin" | "editor" | "viewer";
}

// --- Tests ---
const numbers: number[] = [10, 20, 30];
const words: string[]   = ["dev", "aman", "raj"];
const users: User[] = [
  { id: 1, name: "Dev",  role: "admin" },
  { id: 2, name: "Aman", role: "editor" },
];

console.log(getFirst(numbers)); 
console.log(getFirst(words)); 
console.log(getFirst(users));  
// Empty array case
console.log(getFirst<number>([])); // undefined