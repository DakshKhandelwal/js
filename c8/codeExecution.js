// How js executes the code ? 

// Everything in js executes/happens inside the execution context. 

// Javascript is a synchronous single-threaded language. 

// var a = 2;

// function square (num) {
//     var ans = num * num;
//     return ans;
// }

// var square2 = square(a); //4
// var square5 = square(5); //25

//Call stack is maintaining the order of execution of execution context.

// ---------------------------------------------------------------------------

// printName();
// console.log(x);

// var x = 5;

// function printName() {
//     var a = 5;
//     console.log("Rohit");
// }


// Memory Allocation       Code Execution

// x : undefined   
// printName() : {...} 


//Output: 
// Rohit
// undefined

// ---------------------------------------------------------------------------

var x = 1;
a();
//x: 1
b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}


//Output:
// 10
// 100
// 1

// Note: var variable has a function scope 



