// Create Admin and User types and write:

// function isAdmin(user): boolean

// that determines whether the user is an admin.

type admin = {
  readonly role: "admin";
  name: string;
  readonly id: number;
};

type user = {
  readonly role: "user";
  name: string;
  readonly id: number;
};

const dev: admin = {
  role: "admin",
  name: "Dev kumar",
  id: 4563563,
};

const adam: user = {
  role: "user",
  name: "Adam Levine",
  id: 788445,
};
function isAdmin(person: admin | user): boolean {
  return person.role === "admin" ? true : false;
}

console.log(isAdmin(dev));
console.log(isAdmin(adam));
