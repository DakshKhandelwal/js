// Loops in JS 
// Loops are used to execute a piece of code again & again 
// 1) For loop

// for(let i=1; i<=5; i++) {
//     console.log("I love JS");
// }

// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");

// for(const i=1; i<=5; i++) {
//     console.log("i is ", i + "Hello");
//     i = null;
// }

// console.log(i);

// calculate sum from 1 to 10 
// let sum = 0;
// for(let i = 1; i<=10; i++) {
//     sum += i;
// }
// console.log("sum is ", sum);

// Infinite loop : Loop that never extends (condition will be true always)

// for(let i=1; i>=0; i++) {
//     console.log("i is ", i);
// }

// 2) while loop 

// let i = 1;
// while (i<=5) {
//     console.log("i", i);
//     i++;
// }

// 3) do-while loop 

// let i = 8;
// do {
//     console.log("i", i);
//     i++;
// } while( i<= 10);


// 4) for-of loop -> it is used to iterate over arrays or strings or maps

// const arr = [1, 2, 3, 4, 5];

// for(const num of arr) {
//     console.log(num);
// }

// const myString = "Hello World";
// for (const char of myString) {
//     console.log(char);
// }

// Maps: unique values in same order as inserted 
// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("USA", "United States of America");
// map.set("In", "India");
// // console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`);
// }

//Destructuring of array
// const arr = ["In", "Fr", "USA"];
// const v1 = arr[0];
// const v2 = arr[1];
// const v3 = arr[2];
// console.log(v1, v2, v3);

// const [v1, v2] = arr;
// console.log(v1, v2);

// 5) for-in loop: It is used to iterate over js objects

// let student = {
//     user: {
//         name: "Virat"
//     },
//     age: 29,
//     "is Logged In": true,
//     cgpa: 8.6
// };

// // for( let key in student) {
// //     console.log(`Key is ${key} and value is ${student[key]}`)
// // }

// console.log(student["user"]['name']);
// console.log(student.user.name);


//Note: We can't iterate over maps using for-in loop
// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("USA", "United States of America");
// map.set("In", "India");
// // console.log(map);

// for (const key in map) {
//     console.log(key);
// }

// console.log( typeof map);


// Questions: Print all odd numbers from 0 to 50 

// for(let i=0; i<=100; i++) {
//     if ( i%2 !== 0) {
//         console.log(i);
//     }
// }

// Questions: Create a game where user can start with any number. Ask user to keep guessing the number until user enter correct value.
let gameNumber = 10;
let userNum = prompt("Guess the number: ");

while( userNum != gameNumber) {
    userNum = prompt("You enterd wrong number. Guess again");
}

console.log("You guess right number");