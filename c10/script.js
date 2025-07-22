// console.log("Learning js");

// <style> tag connect HTML and css
// <script> tag to connect HTML and js

//code should be 
//readable
//modular
//browser caching 

// console.log("Hello world");
// console.log("JS");
// var x = 10;
// console.log(x);

// Window Object 
// Window obj represents an open window in a browser. It is a browser obj not (js object) and it is 
// automatically created by the browser.

// What ever code you write except functions is a part of your window object.

//It is a global object and it has lots of properties and methods.
// window.console.log("Window object");
// window.alert("Hello!"); 

// What is DOM? 
// Document Object Model 
// console.log(window.document); //element and tags
// console.dir(window.document); // object and its methods 

// console.dir(document);
// console.dir(document.body.childNodes);
// console.dir(document.head);
// console.dir(document.body);
// console.log(document.body);

// We use DOM to do dynamic changes or manipulate our web page

//DOM Manipulation

// 1. Selection by id (if not present it will return null)
let button = document.getElementById("myButton");
let para = document.getElementById("myPara");
// // console.log(button);
// console.log(para);
// console.dir(para);

// 2. Selection by class (it returns html collection as o/p and if not present return empty html collection)
let headings = document.getElementsByClassName("myClass-heading");
// console.log(headings);
// console.dir(headings);

// console.log(headings[0]);

// 3. Selection with tag (it returns html collection as o/p and if not present return empty html collection)
let pTags = document.getElementsByTagName("p");
// console.log(pTags);

// Query Selectors (# -> ids . -> class)
// 1. document.querySelector("#myBtn"); 
let myButton = document.querySelector("#myBtn");
// console.log(myButton);

let myHeading = document.querySelector(".myClass-heading");  //return first element
// console.log(myHeading);

let firstPara = document.querySelector("p");
// console.dir(firstPara);

// 2. document.querySelectorAll("")
let allHeadings = document.querySelectorAll(".myClass-heading"); //all matching elements in a node list
// console.log(allHeadings);

