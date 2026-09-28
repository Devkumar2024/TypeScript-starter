// User Display Function
// Create an interface containing name, age, and city. Write a function that returns: also returns the phone number if available, otherwise "No phone number".

// "Dev, 23, Ludhiana"

interface citizen {
  name: string;
  age: number;
  city: string;
  Phone_No?: number;
}

function display(user: citizen): string {
  return `${user.name}, ${user.age}, ${user.city}`;
}

function displaynumber(user: citizen): string {
  if (user.Phone_No === undefined) {
    return `No phone number`;
  } else {
    return `${user.Phone_No}`;
  }
}

console.log(display({ name: `Dev`, age: 45, city: `Ludhiana` }));
console.log(displaynumber({ name: `Dev`, age: 45, city: `Ludhiana`}));
