const form = document.querySelector('form');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const remark = document.querySelector("#remarks");

    if(height === '' || height < 0 ||  isNaN(height)) {
        result.innerHTML = `Please enter a valid height ${height}`;
    } else if(weight === '' || weight < 0 ||  isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi);

        result.innerHTML = `<span> ${bmi} </span>`;

        if(bmi < 18) {
            remark.innerHTML = `<div>Underweight </div>`;
        }
        else if(bmi > 24) {
            remark.innerHTML =  `<div>Overweight </div>`;
        }
        else {
            remark.innerHTML =  `<div>Healthy </div>`;
        }
    }

})