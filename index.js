function reverseString(str) {
    return str.split('').reverse().join("");
}
console.log(reverseString("hello World"));

function ispalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(ispalindrome("madam"));

function findLArgestnum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLArgestnum([1, 2, 3, 4, 5]));

function findSmallestNum(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallestNum([1, 2, 3, 4, 5]));

function findLArgestnum(arr) {
    return Math.max(...arr);
}
console.log("findLargest num  arr is", [1, 2, 4, 9, 10]);
console.log(findLArgestnum([1, 2, 4, 9, 10]));

function findSmallestNum(arr) {
    return Math.min(...arr);
}
console.log("findSmalestNum  arr is", [1, 2, 4, 7, 8, 10]);
console.log(findSmallestNum([1, 2, 4, 7, 8, 10]));


// remove firsr element from array
function removefirstelement(arr) {
    return arr.slice(1);
}
console.log([1, 2, 3, 4, 5]);

let array = [1, 2, 3, 4, 5];
array = array.slice(1);
console.log("remove first element from array is", array);

let array1 = [10, 2, 30, 40, 50];
array1.shift();
console.log("remove first element from array is", array1);

// callback function
function Greet(name, callback) {
    callback(`Hello, ${name}!`);
}
Greet("Rahul", message =>
    console.log(message));


// oprator precedence
let add = (a,b) => a+b;
let a= 5;   
let b = 10;
console.log(`add result is ${a}  + ${b} =  ${add(a, b)}`);
console.log(`add result is ${a}  + ${b} =  ${add(a, b)} * 10 = ${add(a, b) * 10}`);
console.log(`add result is ${a}  + ${b} =  ${add(a, b)} * 10 = ${add(a, b) * 10} / 2 = ${add(a, b) * 10 / 2}`);
console.log(`add result is ${a}  + ${b} =  ${add(a, b)} * 10 = ${add(a, b) * 10} / 2 = ${add(a, b) * 10 / 2} -10 = ${add(a, b) * 10 / 2 - 10}`);





