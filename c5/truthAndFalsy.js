const userEmail = [];
// if(userEmail) {
//     console.log("User email is present");
// }
// else {
//     console.log("Email not found");
// }

// Falsy values 
// false, 0, -0, "", null, undefined, NaN 

// Truthy Values 
// "0", 'false', " ", [], {}, function() {}

// if(userEmail.length === 0) {
//     console.log("User email is not present");
// }

const emptyObj = {};

const obj = {
    user: "Virat",
    score: 105
}

console.log(Object.keys(obj));
console.log(Object.values(obj));

if(Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty");
}