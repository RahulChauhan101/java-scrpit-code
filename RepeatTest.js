// let product = [
//     {
//         name: "Shirt",
//         category: "Clothing"
//     },
//     {
//         name: "Laptop",
//         category: "Electronics"
//     },
//     {
//         name: "jeans",
//         category: "Clothing"
//     }
// ]
//  output
// {
// Clothing: ["Shirt", "jeans"],
// Electronics: ["Laptop"]
// }

// function findCategory(products) {
//     return products.reduce((acc,product) => {
//         const category = product.category;
//         if (!acc[category]) {
//             acc[category] = [];
//         }
//         acc[category].push(product.name);
//         return acc;
//     },
//     {});

// }
// console.log(findCategory(product));
//  let  findCategory = product.reduce((acc, {name, catagary}) => {
//     (acc[catagary] ??= []).push(name);
//        return acc;
// }, {});

// console.log(findCategory);


//  let findCategory = product.reduce((acc, {name, category}) =>{
//      (acc[category]??= []).push(name);
//      return acc;
//  }, {});
//  console.log(findCategory);
    
// 2
// find count
const fruits = [ "apple", "banana","apple","orange","banana","apple"];
// output {apple:3, banana:2, orange:1 }

// function countFruits(fruits) {
//     return fruits.reduce((acc, fruit) => {
//         acc[fruit] = (acc[fruit] || 0) + 1;
//         return acc;
//     }, {});
// }
// console.log(countFruits(fruits));


// let output = fruits.reduce((acc, fruit) => ({ ...acc,[fruit]: (acc[fruit] || 0) + 1}), {});
// console.log(output);

let countFruits = fruits.reduce((acc,fruit) =>({...acc, [fruit]: (acc[fruit] || 0) +1}), {});
console.log(countFruits);

let countingFruits = fruits.reduce((acc, fruit) => ({ ...acc,[fruit]: (acc[fruit] || 0) + 1}), {});

let arry = [ 1,2,3,4,5];

let Array = arry.sort((a,b)=> a + b);
console.log("Array", Array);


let sum = arry.reduce((a,b) => a+b);
console.log("Sum of Array", sum);
console.log(`sum of Array is ${arry.join( " + ")} = ${sum}`);


