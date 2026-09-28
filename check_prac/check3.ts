// Write a function that takes string[] and a name, and returns whether that name exists in the array

const nameList: string[] = ["dev ", " aman ", "david", " jhon "];
let key = "da2vid";
function searchName(array: string[], key: string): boolean {
  for (let name of array) {
    if (key === name.trim()) {
      return true;
    }
  }
  return false;
}

// console.log(searchName(nameList, key));

// Write a function that accepts number[] and returns their total.
const numList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];

function total(array: number[]): number {
  return array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(total(numList));
