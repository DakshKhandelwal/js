{

}

// block is use to club mutiple statement into one single statement 

// if(true) {
//     console.log("Hello world");
// } 

function a() {
    var b = 100;
    c();
    function c() {
      console.log(b);
    }
}
a();
