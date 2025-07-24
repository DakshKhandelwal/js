const otp = document.querySelectorAll(".code");
// console.log(otp);
otp[0].focus();

otp.forEach((num, index) => {
    num.addEventListener("input", (event) => {
        // console.log(event);
        console.log(event.target.value);
        if(event.target.value.length === 1 && index < otp.length-1) {
            otp[index+1].focus();
        }
    })

    num.addEventListener("keydown", (event) => {
        if(event.key === "Backspace" && index > 0) {
            otp[index-1].focus();
        }
    })
})