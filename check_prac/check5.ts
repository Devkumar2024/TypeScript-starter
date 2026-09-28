// Create a User interface with id, name, and email. Write a function that accepts a User and returns the user's name.

interface User {
  id: number;
  age?: number;
  name: string;
  email: string;
}

function userData(user: User): string {
  return user.name;
}

// passing an object
console.log(
  userData({ id: 3556278, name: "dev kumar", email: "dev@gmail.com" }),
);

// Array of Users
// Create User[] and write a function that returns all users whose age is greater than 18.

interface ProfUser {
  name: string;
  age: number;
}

const UserList: ProfUser[] = [
  { name: `Cassandra`, age: 34 },
  { name: `Suisane`, age: 14 },
  { name: `Tyler`, age: 39 },
  { name: `Marla`, age: 18 },
];

function above18(userList: ProfUser[]): string[] {
  return userList.reduce<string[]>((acc, curr) => {
    if (curr.age > 18) {
      acc.push(curr.name);
    }
    return acc;
  }, []);
}

console.log(above18(UserList));
