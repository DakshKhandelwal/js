// Functions In JS 
// Block of code that performs a specific task and can be invoked whenever required

// console.log("Hello");

// "abc".toUpperCase();

// [1,2,3,4].push(5);

// function functionName() {
//     //code
// }

// functionName();

// console.log("Javascript");
// console.log("We are learning functions");

// console.log("Javascript");
// console.log("We are learning functions");

// console.log("Javascript");
// console.log("We are learning functions");

// function myFunction() {
//     console.log("Javascript");
//     console.log("We are learning functions");
// }

// myFunction();
// myFunction();
// myFunction();

// function functionName( param1, param2) {
//     //code
// }

// function myFunction (msg) {  //parameters
//     console.log(msg);
// }

// myFunction("I am learning Javascript"); //argument

// function sum(x, y) {
//     //x and y are local variables can't be accessed outside block
//     let res = x+y;
//     return res;
// }

// let res1 = sum(2,3);
// console.log(res1);

// Arrow Function 
// Compact way of writing a function 

// const storeFunction = (param1, param2) => {
// //code
// }


// let sum = (a,b) => {
//     return a+b;
// }

// console.log(sum);

// sum = 5;
// console.log(sum)

// let myFunction = () => {
//     console.log("Hello world");
// }

// console.log(myFunction);

// myFunction = "JS";
// console.log(myFunction);

// Question: Write a function using function keyword which takes String as an argument and returns number of vowels in the string 

// "Hello"  // 2 

// function countVowel(str) {
//     let count = 0;
//     for(const char of str) {
//         // console.log(char);
//         if(char === "a" || char === "e" || char === "i"|| char === "o" || char === "u") {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowel("Javascript"));

// let countVowel1 =  (str) => {
//     let count = 0;
//     for(const char of str) {
//         // console.log(char);
//         if(char === "a" || char === "e" || char === "i"|| char === "o" || char === "u") {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowel1("Javascript"));

//Passing default val as param
// function loginMessage (userName = "Meghana", user2 ="himanshu") {
//     if(!userName) {
//         console.log("Please enter userName", user2);
//         return;
//     }
//     console.log( `${userName} logged In and ${user2}`);
// }

// loginMessage();

// ---------------------------------------------------------------------------------
//Rest operator: ... it spreads the arguments and returns it in an array
// function calculateCartPrice(val1, val2, ...num) {
//     console.log(val1, val2);
//     console.log(num);
// }

// console.log(calculateCartPrice(200, 300, 400, 500))

// ------------------------------------------------------------------------------
// Immediately Invoked Function Expressions (IIFE)

(function myFunction() {
    console.log("Call it immediately");
})()