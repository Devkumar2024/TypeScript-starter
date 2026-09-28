let subs: number | string = "1M";
let requestStatus: "pending" | "completed" | "discarded";
requestStatus = 'discarded';
// requestStatus = 'done'; // Type '"done"' is not assignable to type '"completed" | "discarded" | "pending"'.


const orders = ['11','9','65','51','59','121'];

let currenOrder: string | undefined;
for(let order of orders){
    if(currenOrder === '51'){
        currenOrder = order;
        break;
    }
}

console.log(currenOrder);