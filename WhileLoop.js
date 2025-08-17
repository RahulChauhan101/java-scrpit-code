//  javaScripts While Loop
 /*while (condition) {
    code block to be executed
} */

    let  count = 1;
     while (count <= 5) {
        count++;
        console.log(`Count is: ${count}`);
     }

  let array = [1, 2, 3, 4, 5];
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
      i++;
  }

//   DO WHILE LOOP
 /* 
 do {
    // code block to be executed
} while (condition); 
*/
  let j = 0;
  do {
    console.log(array[j]);
    j++;
  } while (j < array.length);