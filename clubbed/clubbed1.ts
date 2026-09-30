interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}
// It should return a new updated user object.
function updateUser(user: User, updates: Partial<User>): User{// make sure not to change ordering
    return {...user, ...updates};
}

const Dev : User = {
    id: 43879,
    name:`Dev`,
    email:`Dev@gmail.com`,
    role: "admin"
}
console.log(Dev);

console.log(updateUser(Dev, {role:"user", email:"str@hotmail.com"}));

