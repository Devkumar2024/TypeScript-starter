// Write a function that accepts number[] and returns the highest number.

const numList: number[] = [1, 2, 3, 4, 5, 26, 7, 8, 9, 10, 10];

function highest(array: number[]): number | undefined {
  if (array.length === 0) return undefined;
//   return Math.max(...array);
let min = Number.MIN_SAFE_INTEGER;
  for(let i:number = 0; i<array.length; i++){
    const value = array[i]
    if(value !==undefined && value > min)
        min = value;
  }
  return min;
}

// console.log(highest(numList));

// Create a tuple containing [name, age]. Write a function that accepts this tuple and returns a sentence such as "Dev is 23 years old"

const tuple : [string, number] = ['Dev', 24];

function printName(tuple : [string, number]) : string {
    return `${tuple[0]} is ${tuple[1]} years old`
}

console.log(printName(tuple));

