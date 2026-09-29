const HEXCOLORCODES: Record<string, string> = {
  red: "ffh01",
  green: "fffd1",
  blue: "ff731",
};

type Role = "admin" | "user" | "guest";
const persons: Record<Role, string> = {
  admin: `dev`,
  user: `aman`,
  guest: `sins`,
};

console.log(persons);
