// Properties (get, set)
// 1) tagName: returns tag for element node

let firstPara = document.querySelector("p");
// console.log(firstPara);
// console.dir(firstPara);
// console.loglog(firstPara.tagName); // P

let firstButton = document.getElementById("myBtn");
let firstButton1 = document.querySelector("#myBtn");
// console.log(firstButton1.tagName);

// 2) innerText : returns the text content of the element and all its children 
let div = document.querySelector("div");
// console.log(div);
// console.dir(div);

let btn = document.querySelector("button");
// console.log(btn.innerText); 

// 3) innerHTML: returns the plain text or HTML content in the element
let div1 = document.querySelector("div");


// 4) textContent: returens the text content even for hidden elements


// Questions: We have a heading element in our HTML file with text "Hello Javascript". Append "from Accio" to this string using JS
// let h2 = document.querySelector("h2");

// console.log(h2.innerText);

// h2.innerText = h2.innerText + " from Accio";  //concatenation 

// Question: Create 3 divs with common class name: "box". And access them and add some unique text to each of them.

let divs = document.querySelectorAll(".box");
// console.log(divs);
// console.log(divs[0]);

// divs[0].innerText = "Unique value 1";
// divs[1].innerText = "Unique value 2";
// divs[2].innerText = "Unique value 3";

let index = 1;
for(let div of divs) {
    // console.log(div.innerText);
    div.innerText = `Unique value ${index}`;
    index++;
}


// Attributes 
// 1) getAttribute(attr): 
// let h2 = document.querySelector("h2");
// console.log(h2);

// let id = h2.getAttribute("id");
// console.log(id);

// let name = document.querySelector("div").getAttribute("name");
// console.log(name);

// 2) setAttribute(attr, value) // it sets attribute with that value 

// let classDiv = document.querySelector(".box");
// classDiv.setAttribute("id", "newID123345");


// Style 
// element.style.backgroundColor 

// CSS  -> JS in camel case
// color -> color  
// background-color -> backgroundColor
// font-size -> fontSize

// let div2 = document.querySelector("div");
// div2.style.backgroundColor = "green";
// div2.style.fontSize = "30px";

// div2.style.visibility = "hidden";
// div2.innerText = "Hello JS";


// ---------------------------------------------------------------------------------

// Insert some elements  (CRUD for DOM -> read values, modify those values)
// Insert Elements 
let ele = document.createElement("div");

// 1) node.append(ele): It adds the element at the end of node (inside)

let newBtn = document.createElement("button");
console.log(newBtn);

newBtn.innerText = "Click me";

let div2 = document.querySelector("div");
// div2.append(newBtn);

// 2) node.prepend(ele): Adds element at the start of node (inside)

// 3) node.before(ele): Adds element before the node (outside)

// 4) node.after(ele): Add element after the node (outside)

let p = document.querySelector("p");
// p.prepend(newBtn);


// Delete Element 

// node.remove() //remove the node from DOM

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hello JS </i>";

document.querySelector("body").prepend(newHeading);
p.remove();

newHeading.remove();