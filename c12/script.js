// Question: Create a <p> tag in HTML and give it a class. Now create a new class in css
// and try to append this new class to the <p> element.

// let p = document.querySelector("p");
// console.log(p);
// console.dir(p);

// .setAttribute("class", "newClass") 
// .classList.add("newClass") 

// Events 
// The change in the state of an object is know as event
// Events are fired to notify code of "interesting changes" that may affect the code

// Mouse events (click, double click etc)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc) 

// In-line event handling 

// Event Handling using JS 
// node.event = () => {

// }

// btn.onClick = () => {

// }

// let btn = document.querySelector("button");

// btn.onclick = (e) => {
//     console.log(e);
//     console.log("btn1 was clicked");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// btn.onclick = () => {
//     console.log("Second onclick");
// }



// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("inside the div in js");
// }

// If we have 2 events our js event will run not html (inline event)

// Event Object 
// It is a special object which has details about the event

// node.event = (e) => {
//     //code 
// }


// Event Listeners 
// Node.addEventListener(event, callback) 

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     console.log("Button was clicked");
// })

// btn.addEventListener("click", () => {
//     console.log("Second handler");
// })

// const handler3 = () => {
//     console.log("Third handler");
// }

// btn.addEventListener("click", handler3)

// btn.addEventListener("click", () => {
//     console.log("4th handler");
// })


// node.removeEventListener(event, callback) 
// btn.removeEventListener("click", handler3);


// Question: Create a toggle button that toggles screen b/w light and dark mode 

let button = document.querySelector("#myButton");
let body = document.querySelector("body");

let currMode = "light";

button.addEventListener("click", () => {
   if(currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }
   else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currMode);
})