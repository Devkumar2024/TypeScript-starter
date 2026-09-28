// Simple Object Transformation
// Given:
// {
//     name: "Laptop",
//     price: 50000
// }

// write a function that returns:

// {
//     name: "Laptop",
//     price: 50000,
//     expensive: true
// }

interface elecProd {
  name: string;
  price: number;
  [key: string]: any;
}

const laptop: elecProd = {
  name: "Laptop",
  price: 5000,
};

function checkExpensive(product: elecProd): object {
  product.price > 40000
    ? (product.isExpenive = true)
    : (product.isExpensive = false);

  return product;
}

console.log(checkExpensive(laptop));
