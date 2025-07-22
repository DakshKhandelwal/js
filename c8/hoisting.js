//Hoisting in JS
//Trying to access the variables and functions before initialization


// console.log(x);
// getName();

// var x = 5;
// var getName = function () {
//     console.log("Hello World");
// }


// let and const variable are also hoisted or not? 

// var x = 200;
// console.log("Hello word");

// let a = 10;
// console.log("Temporal dead zone");
// console.log(a);


// Yes let and const variable are hoisted but they are stored in Temporal Dead Zone 
// Temporal Dead Zone: Time b/w variable which are hoisted and just before initialization for that variable

console.log("Hello");
let a = 100;
var b = 200;

const d = 400;
console.log(c);
console.log(d);
const c = 300;

// var << let << const 
