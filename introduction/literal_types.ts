// specific value ki taraf ishara karti hai, literal is an exact, concrete value used directly in your code
// fixed thiings passed, varvalue restricted
type status = "delivered" | "pending" | "cancel";
// string literal example

let order: status = "cancel";
type literalType = 2 | `brr brr grr` | { name: string; class: string };

function Order_Status(Status: status) {
  switch (Status) {
    case "pending":
      console.log(`order pending`);
      break;
    case "delivered":
      console.log(`order delivered`);
      break;
    case "cancel":
      console.log(`order cancelled`);
      break;
  }
}

function printStatus(status: "success" | "pending" | "in progress"): void {
  console.log(`Status = ${status}`);
}
printStatus("in progress");
