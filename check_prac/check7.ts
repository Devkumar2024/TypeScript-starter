// Optional Discount
// Create a Product interface:

// name
// price
// discount?

// Write a function that calculates the final price. If no discount exists, return the original price.

interface user1 {
  name: string;
  price: number;
  discount?: number;
}

function discountedPrice(user: user1): number {
  return user.discount === undefined
    ? user.price
    : user.price - user.price * (user.discount / 100);
}

console.log(discountedPrice({ name: `Dev`, price: 2300 }));
console.log(discountedPrice({ name: `Dev`, price: 2500, discount: 30 }));

// Create an interface with a readonly id. Create a user and try changing the ID. Understand why TypeScript gives an error.

// Then write a function that changes the user's name without changing the ID.

interface Readonly {
  readonly Sid: string;
  name: string;
  course_enrolled: string;
}

function changeName(user: Readonly): object {
  user.name = `New name`;
//   user.Sid = "283673newID"; // Cannot assign to 'Sid' because it is a read-only property.
  return {
    Sid: user.Sid,
    name: user.name,
    course_enrolled: user.course_enrolled,
  };
}

console.log(
  changeName({ Sid: "213213dev", name: `dev kumar`, course_enrolled: "IT" }),
);
