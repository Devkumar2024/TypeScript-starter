// utility types
// type tranformation and manipulation

interface UserRecord {
  name: string;
  age: number;
  email: string;
}

// Partial makes all properties of UserRecord optional
const updateUser = (user: Partial<UserRecord>) => {
  console.log(user);
};

updateUser({ name: `dia` });
updateUser({ email: `dia@gmail.com` });

type abc = Partial<UserRecord>;
let user123: abc = {
  name: `dia`,
};

// required utility type
type def = Required<UserRecord>;
let user345: def = {
  // sbb cheej required ho jayegi
  name: `dev`,
  age: 65,
  email: `dev@gmail.com`,
};

// readonly utility type, we cannot redefine ppts.
type ghi = Readonly<UserRecord>;
let user678: ghi = {
  name: `milly`,
  age: 67,
  email: `milly@gmail.com`,
};

// pick : take subset of defined ppts.
type jkl = Pick<UserRecord, "name" | "email">;
let user910: jkl = {
  name: `girlie`,
  //   age: 67, // error dega
  email: `girlie@gmail.com`,
};

// Omit, omit krro bhyii
type mno = Omit<UserRecord, "email">;
let user1112: mno = {
  name: `girlie`,
  age: 654,
  // email: `girlie@gmail.com`,
};

// Record, key , value type fix
type UserRecordInfo = Record<string, number>;
let urinfo: UserRecordInfo = {
  name: 23,
  age: 46,
  // email : `gibberish` // error dega
};

type Role = "user" | "admin" | "guest";
const userRoles: Record<Role, string> = {
  // teeno roles pass karne padenge
  admin: `Dev kumar`,
  guest: `ankit kumar`,
  user: `ram kumar`,
};

// exclude
type workStatus = 'success'|'failed'|'in progress';
// ek type ki ppt exclude kardo from union type
type excludeError = Exclude<workStatus, 'failed'>;

const state_1:excludeError = 'in progress';
// const state_2:excludeError = 'failed'; // will give error

// Extract

