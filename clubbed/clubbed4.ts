interface Box<T> {
  value: T;
}
const Num: Box<number> = {
  value: 12,
};

const Word: Box<string> = {
  value: `dev kumar`,
};

function changeValue<T>(box: Box<T>, newValue: T): Box<T> {
  return { value: newValue };
}

console.log(changeValue(Num, 456));
console.log(changeValue(Word, `Aman`));

type Role = "admin" | "editor" | "viewer";

interface User {
  id: number;
  name: string;
  role: Role;
}

const statements : Record<Role, string> = {
    admin : "Hi admin go to dashbord",
    editor : "edit the pendings",
    viewer : "welcome onboard",
}

function getRoleMessage(user: User): string{
    return statements[user.role];
}

const admin: User  = { id: 1, name: "Dev",  role: "admin" };
const editor: User = { id: 2, name: "Aman", role: "editor" };
const viewer: User = { id: 3, name: "Raj",  role: "viewer" };

console.log(getRoleMessage(admin));
console.log(getRoleMessage(editor));
console.log(getRoleMessage(viewer));