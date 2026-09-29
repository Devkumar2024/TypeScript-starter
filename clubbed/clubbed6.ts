// --- Interface ---
interface User {
  id: number;
  name: string;
  role: "admin" | "user";
}

// --- Generic finder ---
function findUser<T>(
  users: T[],
  check: (item: T) => boolean
): T | undefined {
  for (const user of users) {
    if (check(user)) return user;
  }
  return undefined;
}

// --- Sample data ---
const users: User[] = [
  { id: 1, name: "Dev",  role: "admin" },
  { id: 2, name: "Aman", role: "user"  },
  { id: 3, name: "Raj",  role: "admin" },
];

// --- 1. Find a user by ID ---
const byId = findUser(users, (user) => user.id === 2);
console.log(byId); // { id: 2, name: 'Aman', role: 'user' }

// --- 2. Find an admin user ---
const admin = findUser(users, (user) => user.role === "admin");
console.log(admin); // { id: 1, name: 'Dev', role: 'admin' }

// --- Not found case ---
const missing = findUser(users, (user) => user.id === 99);
console.log(missing); // undefined