// let product = [
//     {
//         "name": "shirt",
//         categary: "clothing"
//     },
//     {
//         "name": "Laptop",
//         categary: "electronics"
//     },
//     {
//         "name": "jeans",
//         categary: "clothing"
//     },
//     {
//         "name": "T-shirt",
//         categary: "clothing"
//     },
//     {
//         "name": "TV",
//         categary: "electronics"
//     },
// ];

// // const filterByCategory = (arr, category) => {
// //     return arr.filter(item => item.categary);
// // }
// // console.log(filterByCategory(product, "clothing"));

// const List = product.reduce((Check, product) => {
//     if (!Check[product.categary]) {
//         Check[product.categary] = [];
//     }
//     Check[product.categary].push(product.name);
//     return Check;
// }, {});

// console.log("Prodct List Categary and Name", List);

// const fruits = [
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "apple",
//     "kiwi",
// ]


// const count = fruits.reduce((count, fruits) => {
//     count[fruits] = (count[fruits] || 0) + 1;
//     return count;
// }, {});

// console.log("Fruit Count quantiy", count);


// array = [1,[3,2],[5,[4]]];



// const newarray = array.flat(Infinity).sort((a, b) => a - b);
// console.log("Newarray", newarray);



// const data = {a:{b:{c:{d:5}}}};
// let targetkey = 'b';


// function findkeyDepth(obj, targetkey, depth = 1) {
//     for (const key in obj) {
//         if (key === targetkey) {
//             return depth;
//         }
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             const result = findkeyDepth(obj[key], targetkey, depth + 1);
//             if (result !== -1) {
//                 return result;
//             }
//         }
//     }
//     return null; 
// }

// console.log(`Key:`, findkeyDepth(data, 'd'));
// console.log("Key:" ,targetkey,"depth:", findkeyDepth(data, targetkey)); 

// const Data = {
//   a: 1,
//   b: { x: 2, y: { z: 1 } },
//   c: 1
// };

// let valueToFind = 1;
// let valueToFind2 = 2;
// function findValues(obj, Value) {
//   const result = [];

//   function search(object) {
//     for (const key in object) {
//       if (typeof object[key] === "object" && object[key] !== null) {
//         search(object[key]);
//       }
//       else {
//         if (object[key] === Value) {
//           result.push(key)
//         }
//       }
//     }
//   }
//   search(obj);
//   return result;
// }

// console.log(findValues(Data, 1));
// console.log(`Data key  of value ${valueToFind}  = `, findValues(Data, 1));
// console.log(`Data key of value ${valueToFind}  = ${findValues(Data, 1)}`);


// console.log(findValues(Data, 2));
// console.log(`Data Key of value ${valueToFind2}  = ${findValues(Data, 2)}`);
// console.log(`Data key of value null  =`, findValues(Data, 3));



const input = {
  a: { b:{ c: 5 } },
  d: 10
};

function flattenobject(obj, perentkey = "", result = {}) {
  for (const key in obj) {
    const newKey = perentkey ? `${perentkey}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      console.log(`qwe Flattening Key: ${newKey}`);

      flattenobject(obj[key], newKey, result);
      console.log(`Flattened Key: ${newKey}`);
    } else {
      result[newKey] = obj[key];
      console.log(`asd  Flattened Key: ${newKey}, Value: ${obj[key]}`);
    }
  }
  return result;

}
const output = flattenobject(input);

// console.log("Input Object:", input);
console.log("Flattened Object:", output);
