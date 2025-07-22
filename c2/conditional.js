// Conditional Statements

// 1) If statement 
// let num;
// if(num === 5) {
//     num = 10;
// }

// let age = 16;
// if (age >= 18) {
//     console.log("Can vote");
// }

// if(age < 18) {
//     console.log("Cannot vote");
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log(color);

// 2) if-else statements 

// let mode = "light";
// let color;
// if(mode === "dark") {
//     color = "black";
// }
// else {
//     color = "white";
// }

// console.log(color);

//even or odd
// let num = 26;
// if ( num%2 === 0) {
//     console.log("even");
// }
// else {
//     console.log("odd");
// }

// 3) else-if statements 
// let age = 80;
// if(age < 18) {
//     console.log("child")
// }
// else if(age > 60) {
//     console.log("senior");
// }
// else {
//     console.log("adult");
// }

// Ternary Operators 
// condition ? true output : false output
// let age = 17;
// let result = age > 18 ? console.log("adult") : console.log("not adult");
// console.log(result);

// Question: Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 7 or not 
let number = prompt("Enter a number: ");
console.log("Number is ", number);

if(number % 7 === 0) {
    console.log(number, " is multiple of 7");
}
else {
    console.log(number, " is not a multiple of 7");
}