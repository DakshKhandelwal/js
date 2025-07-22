// Strings 

//Create String
// let str1 = "Javascript";
// let str2 = 'Javascript';
// console.log(str2);

// let str3 = new String("myString");
// console.log(str3);

// //Properties and methods for strings
// let myString = "Mayank";
// // String length 
// console.log(myString.length);

// console.log(str3[0]);  //m
// console.log(myString[0]); //M

// Template Literals in JS 
// String Interpolation 
// `any text ${expression} any text`
// let str4 = `This is a string interpolation.`;
// console.log(typeof str4);

// let newString = `This is a template literal ${1+2+3}`;
// console.log(newString);  //This is a template literal 6


// Escape characters (\n, \t)
// let str5 = "Daksh\tKhandelwal";
// let str6 = "DakshKhandelwal";
// console.log(str5.length);
// console.log(str6.length);

// String Methods in JS 
// These are built-in methods/functions to manipulate a string  
// str3.toUpperCase();
// str3.toLowerCase();
// str3.trim();

//Strings are Immutable 

// const newString = new String ("virat-kohli");

// console.log(newString.charAt(2));
// console.log(newString.charCodeAt(2));
// console.log(newString.indexOf('i'));  //if not match returns -1

// console.log(newString.split('-'));
// console.log(newString.slice(2, -1));

// console.log(newString.substring(-1, 4));

// Question: Take fullname from user and make a userid like this firstName@LastNameLength 
// himanshu kumar => himanshu@kumar14

// let fullName = prompt("Enter you fullname");
// console.log(fullName);
// console.log(fullName.length);
// let name = fullName.split(' ');
// let userId = name[0] + '@' + name[1] + fullName.length;
// console.log(userId);

let myString = "Javascript";

for(let i=0; i<myString.length; i++) {
    console.log(myString[i]);
}