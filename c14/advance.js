// console.log("one");
// console.log("two");
// console.log("three");

// Sync in JS
// Synchronous: The code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous
// Due to synchronous programming, sometimes some important instructions get blocked due to previous
// instructions, which causes delay in UI. 
// Asynchronous code execution allows to execute next instructions immediately and does not block the flow. 

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000); //2000ms = 2sec

// setTimeout(() => {
//     console.log("hello world");
// }, 2000);


// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello world");
// }, 4000);

// console.log("three");
// console.log("four");


// Callbacks 
// A callback is a function passed as a arugument to another function. 


// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }

// calculator(1, 2, (a,b) => {
//     console.log(a+b);
// });


// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 2000);


// ---------------------------------------------------------------------------------------------

// Callback hell
// Callback hell: Nested callbacks stacked below one another forming a pyramid structure 

// let age= 19;
// if(age > 18) {
//     if(age>60) {
//         console.log("senior")
//     }
//     else {
//         console.log("adult")
//     }
// }
// else {
//     console.log("child");
// }

// for(let i=0; i<5; i++){
//     for(let j=0; j<5; j++) {
//         console.log(i,j);
//     }
// }

// function getData(dataId) {
//     setTimeout(()=> {
//         console.log("data", dataId);
//     }, 2000)
// }

// getData(1); //2sec
// getData(2); //2sec
// getData(3); //2sec

// data 1
// data 2
// data 3


// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }

// getData(1, () => {
//     console.log("getting data 2...");
//     getData(2, () => {
//         console.log("getting data 3...");
//         getData(3, () => {
//              console.log("getting data 4...");
//             getData(4);
//         });
//     })
// });

// This style of programming is very difficult to understand and manage 


// Promises: It is for eventual completion of a task. It is a js object.
// It is a solution to callback hell. 

// let promise = new Promise((resolve, reject) => {
//     console.log("This is a promise");
// })

//resolve and reject are 2 function handlers provide by js. They are calback functions. 

// 3 states in promise 
// 1) pending: the result is undefined
// 2) fulfilled (resolved): the result is value            resolve(result)
// 3) rejected: the result is error           reject(error)


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             reject("success");
//         }, 8000);
//     });
// }

// Promises 
// .then()  if promise id fullfilled
// .catch() if promise is rejected

// Promise.then((res) => {

// })

// Promise.catch((err) => {

// })

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("This is a promise");
//         resolve("success321");
//         // reject("error1234");
//     })
// }


// let promise = getPromise(); //API call that returns a promise 

// promise.then((res) => {
//     console.log("Promise is fulfilled", res);
// })

// promise.catch((err) => {
//     console.log("Promise is rejected", err);
// })


// function asyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data");
//             resolve("success");
//         }, 2000)
//     })
// }

// console.log("getting data 1...");
// asyncFunction().then((res) => {
//     console.log(res);
// })

// console.log("getting data 2...");
// asyncFunction().then((res) => {
//     console.log(res);
// })


function getData(dataId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 4000)
    })
}

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res1) => {
//         console.log(res1);
//     })
// })


// Promise chaining

// getData(1)
//     .then((res) => {
//         console.log(res);
//         return getData(2);
//     })
//     .then((res) => {
//         console.log(res);
//         return getData(3);
//     })
//     .then((res3) => {
//         console.log(res3);
//     })


// async-await 
// async function always returns a promise 

// async function myFunction () {} 

// await pauses the execution of its surrounding async function until the promise is settled 


// async function hello() {
//     console.log("hello");
// }

// async function automatically returns a promise 


function api(id) {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            console.log("server data", id);
            res(200);
        }, 6000)
    })
}

// await api(1);
// await api(2);

// async - await 
// async function getApiData() {
//     console.log("getting api 1");
//     await api(1);
//     console.log("getting api 2");
//     await api(2);
//     console.log("getting api 3");
//     await api(3);
//     console.log("getting api 4");
//     await api(4);
// }

// IIFE : Immediately Invoked Function Expression
// IIFE is a function that is called immediately where it is defined. 

// (func) ();

// (async () => {
//     console.log("hello world")
// })();


(async function getApiData() {
    console.log("getting api 1");
    await api(1);
    console.log("getting api 2");
    await api(2);
    console.log("getting api 3");
    await api(3);
    console.log("getting api 4");
    await api(4);
})()