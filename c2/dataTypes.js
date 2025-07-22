//Primitive DataTypes

// 1) Number 
// let score = 33;
// console.log(score);
// console.log(typeof score); //number
// console.log(typeof (score));

// let score1 = 45.6789;
// console.log(typeof score1);

// let score2 = Number(20);
// console.log(typeof score2);

// 2) Strings 
// let score1 = "Rahul";
// console.log(score1);
// console.log(typeof score1); //string
// console.log(typeof (score1));

// let user1 = String("Virat");
// console.log(typeof user1);

// 3) Boolean 
// let score1 = true;
// console.log(score1);
// console.log(typeof score1); //boolean
// console.log(typeof (score1));

// let isLoggedIn = Boolean(true);
// console.log(typeof isLoggedIn);

// 4) null 
// let score1 = null;
// console.log(score1);
// console.log(typeof score1);  //object
// console.log(typeof (score1));

// 5) undefined
// let score1 = undefined;
// let score1;
// console.log(score1);
// console.log(typeof score1);  //undefined
// console.log(typeof (score1));


// // 6) bigint
// let score1 = 3222211223334444555n;
// console.log(score1);
// console.log(typeof score1);  //bigint
// console.log(typeof (score1));


// // 7) Symbol
// let score1 = Symbol("Hi");
// console.log(score1);
// console.log(typeof score1);  //symbol
// console.log(typeof (score1));

// unique values from symbol 
// let value1 = Symbol("Hi");
// let value2 = Symbol("Hi");
// console.log(value1, value2);
// console.log(value1 === value2);  //both are different (unique values)

//Non-Primitive Datatypes

// Note: Everything in JS is an object

// 1) Arrays 
// const heroes = ["superman", "batman", "spiderman"];

// const indianHeroes = ["shaktiman", "krrish", 23, false, null];

// console.log(heroes);
// console.log(indianHeroes);
// console.log(typeof indianHeroes);  //object

// 2) Objects
// {
//     key: value
// }

// const obj = {
//     name: "daksh",
//     age: 12,
//     isLoggedIn: false,
//     newObj: {
//         marks: 12
//     }
// }

// console.log(obj);
// console.log(obj.age);
// console.log(obj.name);
// console.log(obj.isLoggedIn);
// console.log(typeof obj);  /object

// 3) Functions 
// const myFunction = function() {
//     console.log("Hello world, nice to meet you all");
// }

// console.log(typeof myFunction);  //function


// -------------------------------------------------------------------------------
// Memory 
// Stack (Primitive Datatypes, Immutable)   Heap (Non-primitive Datatypes, Reference Datatypes)

// let userName = "Vinay";
// let anotherUser = userName;
// anotherUser = "Parul";

// console.log(userName);
// console.log(anotherUser);

let obj1 = {
    name: "Rahul",
    age: 25
}

let obj2 = obj1;

obj2.age = 30;
console.log(obj1);
console.log(obj2);
