let fruits = ["Apples","Pear","Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length);

fruits = ["Apples","Pear","Orange"];

shoppingCart = fruits.slice();
shoppingCart.push("Banana");

console.log(fruits.length);