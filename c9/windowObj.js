

var a = 10;
function b() {
    var x = 10;

}

console.log(window);
console.log(this);
console.log(window === this); //true

console.log(window.a); // 10
console.log(this.a); // 10