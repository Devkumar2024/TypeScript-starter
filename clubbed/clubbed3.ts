interface Product {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing";
  stock: number;
}

// Return products where stock > 0
function stockGreaterThanZero(sampleProducts: Product[]): Product[] {
  return sampleProducts.filter((ele) => {
    return ele.stock > 0;
  });
}
const sampleProducts: Product[] = [
  {
    id: 101,
    name: "Wireless Headphones",
    price: 2999,
    category: "electronics",
    stock: 15,
  },
  {
    id: 102,
    name: "Cotton T-Shirt",
    price: 799,
    category: "clothing",
    stock: 0, // Out of stock
  },
  {
    id: 103,
    name: "Gaming Mouse",
    price: 1499,
    category: "electronics",
    stock: 8,
  },
  {
    id: 104,
    name: "Denim Jacket",
    price: 2499,
    category: "clothing",
    stock: 0, // Out of stock
  },
  {
    id: 105,
    name: "Mechanical Keyboard",
    price: 4500,
    category: "electronics",
    stock: 3,
  },
];

console.log(stockGreaterThanZero(sampleProducts));
const Mechanical: Product = {
  id: 105,
  name: "Mechanical Keyboard",
  price: 4500,
  category: "electronics",
  stock: 3,
};

function updatepProd(product: Product, updatedProd: Partial<Product>): Product {
  return { ...product, ...updatedProd };
}
console.log(updatepProd(Mechanical, {price:2000}));
