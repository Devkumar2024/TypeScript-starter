// Create a Product type alias containing name, price, and inStock. Write a function that returns whether the product is available.

// for this cide snippet, replacing type with interface makes zero practical difference in how the program behaves, runs, or compiles.

// Create an array of products and return only products whose price is greater than 1000.
// type Aliasname = typeDefinition;
type product = {
  name: string;
  price: number;
  inStock: boolean;
};

let mango: product = {
  name: `mango`,
  price: 4000,
  inStock: false,
};

const prodArray: product[] = [
  {
    name: `mango`,
    price: 4000,
    inStock: true,
  },
  {
    name: `banana`,
    price: 1000,
    inStock: true,
  },
  {
    name: `dragon fruit`,
    price: 5000,
    inStock: false,
  },
];

function priceFilter(prodArray : product[]) : string[]{
    return prodArray.reduce<string[]> ((acc, curr)=>{
       if( curr["price"]>1000){
            acc.push(curr["name"]);
       }
       return acc;
    }, []);
}

console.log(priceFilter(prodArray));


function isAvailable(item: product): boolean {
  return item.inStock === true ? true : false;
}

console.log(isAvailable(mango));
