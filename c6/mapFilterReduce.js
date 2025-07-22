// Arrays methods 
// 1) Map 
// Creates a new array with the results of some operations. The value its callback returns si used to from a new array

// let arr = [1, 2, 3, 4];

// let newArr = arr.map((val) => {
//     return val*2;
// }) 

// console.log(newArr);
// console.log(arr);

// let calcSquare = (num) => {
//     return num * num;
// }

// let squareArr = arr.map(calcSquare);
// console.log(squareArr);

// 2) Filter 
// Creates a new array of elements that gives a true for a condition/filter 

// let newArr = arr.filter((val) => {
//     return val%2 !== 0
// })

// console.log(newArr);

// 3) Reduce 

// Peforms some operations and reduces the array to a single value. IT returns that value. 
// const arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// })

// console.log(output);

// let arr2 = [6, 5, 3, 500, 2];

// const max = arr2.reduce((prev, curr) => {
//     return prev > curr ? prev: curr;
// })

// console.log(max);

// Questions: Find out marks of student which are 90+ 

// let marks = [46, 24, 56, 91, 94, 97, 73];

// let filteredArray = marks.filter( (val) => {
//     return val > 90;
// })

// console.log(filteredArray);


// Questions: Take a input n from User. Create one array from 1 to n. Then use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calulate product of all numbers in the array.

// let n = 4;

// let arr = [];

// for(let i=1; i<=n; i++) {
//     arr[i-1] = i;   //arr[0] = 1, arr[1] = 2, arr[2] = 3
// }

// console.log(arr);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;                     // res = 1, curr = 2 | res = 1*2 = 2, curr = 3 |  res = 2*3 = 6, curr=4 | 
//                                             // res = 6*4 = 24, curr=5 | res=24*5 = 120
// })

// console.log(factorial);

// -----------------------------------------------------------------------
//Chain the methods => Method Chaining
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const result = arr.filter((val) => val%2 ===0)
                  .map((val) => val*10)
                  .filter((val) => val > 50)
                  .reduce((res, curr) => res+curr);

console.log(result);