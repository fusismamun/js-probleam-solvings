/* SImple product sum */
const products = [
    {name: 'laptop', price: 45000},
    {name: 'shirt',  price: 600},
    {name: 'watch',  price: 800},
    {name: 'phone',  price: 35000} 
];

function totallProduct(products){
let totalPrice = 0;

for (const product of products) {
   totalPrice = totalPrice + product.price;
    
}
return totalPrice;
}
let allPrice = totallProduct(products);
console.log(allPrice);

/* product card  */
const cart = [
    {name: 'laptop', price: 45000, quantity:1},
    {name: 'shirt',  price: 600, quantity: 10},
    {name: 'watch',  price: 800, quantity:4},
    {name: 'phone',  price: 35000, quantity: 2} 
];
let carTotal = 0;
for (const product of cart){
    
    const productTotal = product.price * product.quantity;
    carTotal = carTotal + productTotal;
}
console.log(carTotal);