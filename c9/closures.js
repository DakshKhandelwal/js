// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// Closure : It is a function bind together with its lexical environment 

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 200;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// Function along with its lexical scope was returned that is called a closure 

function z() {
    var b = 400;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y()
    }
    x();
}

z();