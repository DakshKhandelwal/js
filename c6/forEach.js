// forEach Loop in Arrays 
// methods and functions 

// "abc".toUpperCase(); //method 
// Whenever we attach functions to a specific objects like arrays or strings we call thoese functions as methods 
// [1, 2, 3].toUpperCase();

// forEach loop 
// arr.forEach(callback function) 

// Callback function: A function passed as an argument to another function 

// arr.forEach( (val) => {
//     console.log(val)
// }) 

// let myArray = [1, 2, 3, 4, 5];
// let newArray = ["pune", "delhi", "mumbai"];

// arr.forEach( function printVal(val) {
//     console.log(val);
// })


// newArray.forEach((element, index, arr) => {
//     // console.log(element, index, arr);
//     console.log(element.toUpperCase(), index, arr);
// })


// HOF  Higher order functions => method or function which takes function as a parameter or returns a function is called HOF 
// forEach is a HOF 

let nums = [5, 10, 15];

let calcSquare = (num) => {
    console.log(num * num);  
}

nums.forEach(calcSquare);