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
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
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

// let countFruits = fruits.reduce((acc,fruit) =>({...acc, [fruit]: (acc[fruit] || 0) +1}), {});
// console.log(countFruits);

// let countingFruits = fruits.reduce((acc, fruit) => ({ ...acc,[fruit]: (acc[fruit] || 0) + 1}), {});

// let arry = [ 10,2,30,14,5];

// let Array = arry.sort((a,b)=> a - b);
// console.log("Array", Array);


// let sum = Array.reduce((a,b) => a+b);
// console.log("Sum of Array", Array);
// console.log(`sum of Array is ${Array .join( " + ")} = ${sum}`);

let Array = [1, [3, 2], [5, [4]]]

let newarray = Array.flat(Infinity).sort((a, b) => a - b);
console.log(newarray);


// find depth

let data = { a: { b: { c: { d: 5 } } } };


function findkeyDepth(obj, depth = 1) {
    let result = [];
    for (let key in obj) {
        result = [...result, { key, depth }];
        if (typeof obj[key] === "object" && obj[key] !== null) {
            result = [...result, ...findkeyDepth(obj[key], depth + 1)];
        }
    }
    return result;
}
console.log(findkeyDepth(data));
const keywithDepth = findkeyDepth(data);
console.log(keywithDepth.find(item => item.key === 'a'));

const target = keywithDepth.find(item => item.depth === 4);
console.log(target);


const data2 = { a: 1, b: { x: 2, y: { z: 1 } }, c: 1 };

function findkeywithvalue(obj, target) {
    let result = [];
    for (let key in obj) {
        if (obj[key] === target) {
            result = [...result, key];
        }
        if (typeof obj[key] === "object" && obj[key] !== null) {
            result = [...result, ...findkeyDepth(obj[key], target)];
        }
    }
    return result;
}
console.log(findkeywithvalue(data2, 1));

const data3 = { a: 1, b: { x: 2, y: { z: 1 } }, c: 1 };

function findKeysWithValue(obj, target) {
    let result = [];
    for (let key in obj) {
        if (obj[key] === target) {
            result = [...result, key]; // spread add matching key
        }
        if (typeof obj[key] === "object" && obj[key] !== null) {
            result = [...result, ...findKeysWithValue(obj[key], target)];
        }
    }
    return result;
}

console.log(findKeysWithValue(data2, 1));
// 👉 [ 'a', 'z', 'c' ]
