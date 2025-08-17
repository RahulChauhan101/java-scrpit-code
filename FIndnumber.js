let number = [9, 26, 10, 23, 8, 99, 100, 45, 65, 30, 3];

function findNum(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  let Secondlargest = arr[0];
  let Secondsmallest = Infinity;
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
    // console.log("Secondsmallest num is", Secondsmallest);
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

let Numbers =[9,25,10,8,3,99];

function findNum(arr) {
  let sortedArray = [...arr].sort((a, b) => a - b);
  let largest = sortedArray[sortedArray.length - 1];
  let smallest = sortedArray[0];
  let Secondlargest = sortedArray[sortedArray.length - 2];
  let Secondsmallest = sortedArray[1];
  let middle = sortedArray[Math.floor(sortedArray.length / 2)];
  let oddNumbers = sortedArray.filter(num => num % 2 !== 0);

  return { largest, smallest, Secondlargest, Secondsmallest, middle, oddNumbers };
}
  console.log("////////  Sorted Number /////////");
  console.log(Numbers.sort((a, b) => a - b));
  console.log(Numbers.length);
  console.log("////////  Odd Number /////////");
  console.log("Odd Numbers are:", findNum(Numbers).oddNumbers);
  console.log("////////  Big number /////////");
  console.log("Big num is :", findNum(Numbers).largest);
  console.log("Second Big num is :", findNum(Numbers).Secondlargest);
  console.log("//////// Middle number /////////");
  console.log("Middle num is :", findNum(Numbers).middle);
  console.log("//////// Small number /////////");
  console.log("Small num is :", findNum(Numbers).smallest);
  console.log("Second Small num is :", findNum(Numbers).Secondsmallest);