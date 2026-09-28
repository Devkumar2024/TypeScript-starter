/*
Normalize Transaction Values
Write:
normalize(values: (string | number) (string | number)[]
Rules:
strings remove surrounding spaces and lowercase
numbers -> round to 2 decimal places
preserve the order
do not modify the original array
*/

const input = ["  Coffee ", 12.3456, "TEA", 99.9, "  Latte  ", 0.001];

function normalize(values: (string | number)[]): (string | number)[] {
  return values.map((ele) => {
    if (typeof ele === "string") {
      return ele.trim().toLowerCase();
    } else {
      return Number(ele.toFixed(2));
    }
  });
}
const result = normalize(input);
console.log(input);
console.log(result);

