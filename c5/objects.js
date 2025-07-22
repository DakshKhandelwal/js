// const emptyObj = {};

// const obj = {
//     user: "Virat",
//     score: 105
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Obj is empty");
// }

const myObj = {
    name: "Virat",
    "full Name": "Virat Kohli",
    age: 36,
    location: "India",
    isLoggedIn: false,
    loginDays: ["Monday", "Friday"]
}

// console.log(object);
// console.log(myObj["full Name"]);
// console.log(myObj.location);
// console.log(myObj.loginDays[1]);

// Object.freeze(myObj);
// myObj.location = "Delhi";

// console.log(myObj);

// myObj.email = "abcd@gmail.com";
// // console.log(myObj);

// myObj.greeting = function () {
//     console.log("Hello users");
// }

// console.log(myObj);


// const user = {};
// user.id = "123abc";
// user.name = "sreya";
// user.isLoggedIn = true;
// console.log(user.name);

// const user2 = {
//     email: "abcd@gmail.com",
//     fullName: {
//         userName: {
//             firstName: "Ram",
//             lastName: "Sharma"
//         }
//     }
// }

// console.log(user2.fullName.userName);

// const obj1 = {1: "first", 2: "second"};
// const obj2 = {3: "third", 4: "fourth"};


// //Destructuring of objects
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// console.log(obj1);

const user = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "random@gmail.com"
    }
];

console.log(user[1].email);