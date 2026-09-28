// Given number[], write a function that returns a new array containing only numbers greater than 50.

const ipArray: number[] = [1, 2, 3, 50,32,56, 3, 12, 342, 32, 453];

function greater(array : number[]): number[]{
    return array.filter(function(value){
        return value > 50;
    })
}

console.log(greater(ipArray));