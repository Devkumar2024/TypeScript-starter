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

interface Config {
    apiUrl: string;
    version: number;
}

type ReadonlyConfig = Readonly<Config>;

let user : ReadonlyConfig = {
    apiUrl: `www.api.1234`,
    version : 123
}

// user.version = 234; // error
