// Arrays 
// let marks = [45, 67, 89, 94, 92];  // 0 based index
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[30]);
// console.log(marks[-1]);
// console.log(typeof marks);

// for(let i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

// //for of 
// for(let ele of marks) {
//     console.log(ele);
// }

// const strArr =  new Array ("Hello", "World", "Array");
// console.log(strArr);

// Properties and Methods in arrays 
// strArr.push("Strings", "Objects", "Numbers");  //O(1)
// console.log(strArr);
// strArr.pop(); //O(1)

// strArr.unshift("New Type");  //O(n)
// console.log(strArr);

// strArr.shift();  //O(n)
// console.log(strArr);

// console.log(strArr.includes("Worlds"));
// console.log(strArr.indexOf("Array"));
// console.log(strArr.join(','));

// slice and splice method 
// const newArr = [0, 1, 2, 4, 5];
// const myArr = newArr.slice(1,3);
// console.log(newArr);
// console.log(myArr);

// const myArr2 = newArr.splice(1,3);  //modifies the orignal array
// console.log(newArr);
// console.log(myArr2);

// const heroes = ["thor", "batman", "hulk"];
// const indianHeroes = ["shaktiman", "krrish"];

// heroes.push(indianHeroes);
// console.log(heroes);
// console.log(heroes[3]);

// const allHeroes = [...heroes, ...indianHeroes];  //spread operator
// console.log(allHeroes);

// const newHeroes = [1, 2, [3, 4, 5], 6, [7, 8], 9, [4 , 5, [11, 20]]];
// const newArray = newHeroes.flat(Infinity);
// console.log(newArray);

// console.log(Array.isArray(["Ram", "Shyam"]));
// console.log(Array.from("Himanshu Kumar"));
console.log(Array.from({name: "Srikanth"}));

let val1 = 100;
let val2 = 200;
let val3 = 300;

console.log(Array.of(val1, val2, val3));