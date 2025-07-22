// console.log("Daksh");  //print statement in JS 
// console.log("I love JS");
// ------------------------------------------------------------------
//Variables in JS
// Variables are containers for the data 

// fullName = "Tony Stark";
// age = 50;
// price = 15.50
// x = 14;
// y = null;
// z = undefined;
// isLoggedIn = true;

// console.log(fullName);
// console.log(age);

// fullName = 40;
// console.log(fullName);

// Variables Rules
// 1) Variable names are case sensitive. "a", "A" is different
// age = 50
// Age = 25
// 2) Only letters, digits, underscore(_) and $ is allowed. (not een space)
// full_name = "Captain America";
// price$ = 67;
// user1 = "Rahul";
// 3) Only a letter, underscore(_) or $ should be first character. 
// _user = 45;
// 4) Reserved keywords cannot be variable names. 

// fullName  // Camel case (good practise to make variable names)
// ----------------------------------------------------------------------------------

// let, var and const 
// let full_name = "Tony Stark";
// const userName = "Vishwas";
// var price = 23;

// var: Variables can be re-declared and updated. A function scope Variables. 
// let: Variables cannot be re-declared but can be updated. A block scope variable.
// const: Variables cannot be re-declared or updated. A block scope variable.

// var user = "Rahul";

// console.log("Name is ", user);

// // 1000 lines of code

// var user = "Kari";  //updating/assigning the value

// console.log("New name is ", user);

// console.log(user);

//Avoid using var to declare variables

// let user1 = "Rahul";
// console.log("Name is ", user1);

// user1 = "Kari";
// console.log("New name is ", user1);
// console.log(user1);

// const user1 = "Rahul";
// console.log("Name is ", user1);

// user1 = "Kari";  //Throw an error
// console.log("New name is ", user1);
// console.log(user1);

//JS is a dynamic language 
//Just in time compilation (JIT)

// Note:  Only use let and const variable do not use var.

// getDataFromDatabase (Camel case)

// const accountId = 12345;
// let accountEmail = "rahul@gmail.com";
// var accountPassword = "123456";
// accountCity = "Jaipur";
// const firstUser = "Srikanth";
// let accountState;
// accountCity = "Delhi";
// let variable = null;

// console.table([accountId, firstUser, accountEmail, accountPassword, accountCity, accountState, variable]);

// const userName = "Parul";
// console.log(userName);

// alert("Hello world");

console.log( 2 +
    2
);

//Code should have high readability
console.log(2+2); 