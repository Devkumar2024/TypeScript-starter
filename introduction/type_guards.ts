// variable ke type ko runtime pe check karne ke liye and type narrow karne ke liye

// typeof. instance of, custom type guard function

function printID(id: string | number | any): void {
  if (typeof id === "string") {
    console.log(`String`);
  } else if (typeof id === "number") {
    console.log(`Number`);
  } else {
    console.log(`undefined`);
  }
}
// printID(`1klfe23`);

class Cat {
  meow() {
    console.log(`meow`);
  }
}

class Dog {
  bark() {
    console.log(`grrr`);
  }
}
function handelPet(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark();
  } else if (pet instanceof Cat) {
    pet.meow();
  }
}

// custom type, using is, as k/w
interface Fish {
  swim(): void;
}
interface bird {
  fly(): void;
}

function isFish(pet: Fish | bird): pet is Fish {
  // returns boolean value
  return (pet as Fish).swim() !== undefined;
}

function isString(value: any): value is string {
  return typeof value === `string`;
}
console.log(isString(`jknkn`));
console.log(isString(312));