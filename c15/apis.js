// API: Application Programming Interface

// fetch API 
// The fetch API provides an interface for fetching (sending/receiving) data or resources.
// It uses  Request and Response objects
// The fetch() method is used to fetch the data 

// let promise = fetch(url, [options]);

const url = "https://official-joke-api.appspot.com/random_joke"; //API endpoint


// let data = await fetch(url);

// const getJoke = async () => {
//     console.log("calling api");
//     let response = await fetch(url);  //JSON format
//     // console.log(response);
//     // console.log(response.status);
//     let data = await response.json();
//     console.log(data); //js object
//     console.log(data.punchline);
// }


// AJAX is Asynchronous JS & XML
// JSON is Javascript Object Notation 
// json() method: returns a promise that resolves with the result of parasing the response body text as JSON.JSON
// Input: JSON
// Output: JS object 


const joke = document.querySelector("#joke");
const btn = document.getElementById("btn");

// const getJoke = async () => {
//     console.log("calling api");
//     let response = await fetch(url);  //JSON format
//     // console.log(response);
//     // console.log(response.status);
//     let data = await response.json();
//     console.log(data); //js object
//     joke.innerHTML = `<i> ${data.setup} </i> <strong> ${data.punchline}</strong>`
// }

function getJoke() {
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        joke.innerHTML = `<i> ${data.setup} </i> <strong> ${data.punchline}</strong>`
    })
}

btn.addEventListener("click", getJoke);


// Request and Response 
// HTTP: HyperText Transfer Protocol
// HTTP Status code 
// HTTP response type 