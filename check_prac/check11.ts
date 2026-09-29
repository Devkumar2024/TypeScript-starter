// Write a function accepting:
// string | string[]

// Return the number of characters if it's a string, or the number of elements if it's an array.

let value1: string = "DEV KUMAR";
let value2: string[] = ["DEV KUMAR", "aman", "ashok", "abhishek", "devrat"];

function accept(value: string | string[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    throw new Error(`undefined`);
  }
}

// console.log(accept(value1));
// console.log(accept(value2));

// type Success = {
//     status: "success";
//     data: string;
// };

// type Error = {
//     status: "error";
//     message: string;
// };

// Create a function that handles both cases.

type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

const s: Success = {
  status: "success",
  data: `process 101#7482 completed successfully`,
};

const e: Error = {
  status: "error",
  message: `Error 404 try again...`,
};

function handle(value: Success | Error): string {
    switch (value.status) {
    case "success":
      return value.data;
    case "error":
      return value.message;
  }
}

console.log(handle(s));
console.log(handle(e));
