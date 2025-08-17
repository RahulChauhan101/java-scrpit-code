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



// const input = {
//   a: { b: { c: 5 } },
//   d: 10,
//   e: {
//     f: { g: 15, h: 20 },
//     i: 25
//   },
// };

// function flattenobject(obj, perentkey = "", result = {}) {
//   for (const key in obj) {
//     const newKey = perentkey ? `${perentkey}.${key}` : key;
//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//       console.log(`asd Flattening Key: ${newKey}`);

//       flattenobject(obj[key], newKey, result);
//       console.log(`asdasd Flattened Key: ${newKey}`);
//     } else {
//       result[newKey] = obj[key];
//       console.log(`wqewqe  Flattened Key: ${newKey}, Value: ${obj[key]}`);
//     }
//   }
//   return result;

// }
// const output = flattenobject(input);

// // console.log("Input Object:", input);
// console.log("Flattened Object:", output);


// // let matrix = [
// //   [1,2,3],
// //   [4,5,6],
// //   [7,8,9],
// // ];

// let matrix = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20]
// ];

// function spiralOrder(matrix) {
//   let result = [];
//   if (matrix.length === 0) return result;

//   let top = 0,
//     bottom = matrix.length - 1;
//   let left = 0,
//     right = matrix[0].length - 1;

//   while (top <= bottom && left <= right) {
//     // Traverse from Left → Right
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i]);
//       console.log(`Traversing from Left → Right [${top}][${i}]: ${matrix[top][i]}`);
//     }
//     top++;
//     console.log(`Top boundary moved to: ${top}`);

//     // Traverse from Top → Bottom
//     for (let i = top; i <= bottom; i++) {
//       result.push(matrix[i][right]);
//       console.log(`Traverse from Top → Bottom [${i}][${right}]: ${matrix[i][right]}`);
//     }
//     right--;
//     console.log(`Right boundary moved to: ${right}`);

//     // Traverse from Right → Left
//     if (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[bottom][i]);
//         console.log(`Traverse from Right → Left [${bottom}][${i}]: ${matrix[bottom][i]}`);
//       }
//       bottom--;
//     }
//     console.log(`Bottom boundary moved to: ${bottom}`);

//     // Traverse from Bottom → Top
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         result.push(matrix[i][left]);
//         console.log(`Traverse from Bottom → Top [${i}][${left}]: ${matrix[i][left]}`);
//       }
//       left++;
//       console.log(`Left boundary moved to: ${left}`);
//     }
//   }

//   return result;
// }
// console.log("Spiral Order:", spiralOrder(matrix).join(","));

// let matrixoutput = matrix.flat().join(",");
// console.log("Flattened Matrix:");
// console.log("Flattened Output:", matrixoutput);

// const user = [{
//   name: "A",
//   age: 25,
// }, {
//   name: "B",
//   age: 20
// }, {
//   name: "C",
//   age: 30,
// },
//  {
//   name: "D",
//   age: 22
// // }
// ];
// const Age = (a, b) => {
//   return a.age - b.age;
// };
// const array = user.sort(Age).reverse().map(u => u.name).join(", ")
// console.log([array]);

// const promise3 = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 10) + 1;
//   if (num >= 5) {
//     resolve(`Success: number is ${num}`);
//   } else {
//     reject(`Failed: number is ${num}`);
//   }
// });

// promise3
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

let number = [9, 26, 10, 23, 8, 99, 100, 45, 65, 30, 5, 3];

function findNum(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  let Secondlargest = arr[0];
  let Secondsmallest = arr[0];
  let middle = arr[0];
  let sortedArray = arr.sort((a, b) => a - b);
  let oddNumbers = sortedArray.filter(num => num % 2 !== 0);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  };
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > Secondlargest && arr[i] < largest) {
      Secondlargest = arr[i];
    }
  };

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  };
  for (let i = 1; i < arr.length; i++) {
    console.log("Secondsmallest num is", Secondsmallest);
    if (arr[i] < Secondsmallest && arr[i] > smallest) {
      Secondsmallest = arr[i];
    }
  }

  middle = sortedArray[Math.ceil(sortedArray.length / 2)] || oddNumbers[0];
  oddNumbers = sortedArray.filter(num => num % 2 !== 0);

  return { largest, smallest, Secondlargest, Secondsmallest, middle, oddNumbers };
}
console.log("////////  Sorted Number /////////");
console.log(number.sort((a, b) => a - b));
console.log(number.length);
console.log("////////  Odd Number /////////");
console.log("Odd Numbers are:", findNum(number).oddNumbers);
console.log("////////  Big number /////////");
console.log("Big num is :", findNum(number).largest);
console.log("Second Big num is :", findNum(number).Secondlargest);
console.log("//////// Middle number /////////");
console.log("Middle num is :", findNum(number).middle);
console.log("//////// Small number /////////");
console.log("Small num is :", findNum(number).smallest);
console.log("Second Small num is :", findNum(number).Secondsmallest);