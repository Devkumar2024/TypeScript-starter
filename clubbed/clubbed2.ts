interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

type Publisher = Omit<User, "password">;
const dev : User = {
    id: 43879,
    name:`Dev`,
    email:`Dev@gmail.com`,
    role: "admin",
    password : "214431fd"
}

function getPublicUser(User : User): Publisher{
    // ... == rest operator, stores all ppts of user 
    const {password, ...publicUser} = User;
    return publicUser;
}

console.log(getPublicUser(dev));