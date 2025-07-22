// function firstWord(str) {
//     let trimStr = str.trim();
//     // console.log(trimStr);
//     let words = trimStr.split(" ");
//     // console.log(words);
//     return words[0];
// }

// console.log(firstWord('see and stop'));
// console.log(firstWord('   Hello   World!'));
// console.log(firstWord('   12345'));


// ------------------------------------------------------------------------

function chunkStr(str, size) {
    let chunks = [];
    for( let i = 0; i<str.length; i= i+size) {
        let subStr = str.slice(i, i+size);
        chunks.push(subStr);
    }
    return chunks;
}

// console.log(chunkStr("12345", 2));  //slice(0, 3) => Hel, lo , Wor, ld!

// function chunkStr2(str, size) {
//     let chunks = [];
//     for( let i = 0; i<str.length; i= i+size) {
//         let subStr = str.substr(i, size);
//         chunks.push(subStr);
//     }
//     return chunks;
// }

// console.log(chunkStr2("12345", 2));  //slice(0, 3) => Hel, lo , Wor, ld!

// -----------------------------------------------------------------------------------

function firstNonRepeatedChar (str) {

    let charCount = {};

    for(let char of str) {
        charCount[char] =  (charCount[char] || 0) + 1;
    }

    for(let char of str) {
        if(charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

// console.log(firstNonRepeatedChar("aabbccddee"));

// ------------------------------------------------------------------------------------

const symbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]

// let num = 14; // 10 + 4 = XIV
let num = 798;

// 700 + 90 + 8 = 500 + 100 + 100 + 90 + 5 + 1 + 1 + 1
                //  DCCXCVIII 


let result = "";

symbols.forEach((item) => {
    // let val1 = item[0];
    // let val2 = item[1];
    // console.log(val1, val2);

    const [key, val] = item;
    // console.log(key, val);

    while( num >= val) {
        result += key;
        num -= val;
    }
})

console.log(result);