// Create a function that accepts Partial<User> so the user can update only one or two properties.

interface User {
  name: string;
  age: number;
  email: string;
  phone?: number;
  address?: string;
  city?: string;
}

function PartialUpdate(assign: User, updatedUser: Partial<User>): User {
  return { ...assign, ...updatedUser };
}

const newUser = {
  name: `Dev`,
  age: 45,
  email: `xyz@gmail.com`,
};

const UpdatedPerson = PartialUpdate(newUser, { age: 32, name: `Heer` });
console.log(UpdatedPerson);

// Create a Required<Profile> type and understand what changes.
// Define default details for missing optional fields
const defaultDetails = {
  phone: 3214124,
  address: "bjlbl",
  city: "ferozpur",
};

function FullP(assign: User, details = defaultDetails): Required<User> {
  return { ...assign, ...details };
}

const completeUser: Required<User> = FullP(newUser);
console.log(completeUser);
