const colorSelect = document.querySelector("#colorSelect");
const button = document.querySelector("input[type=button]");

button.addEventListener("click", function() {
    const selectedIndex = colorSelect.selectedIndex;
    colorSelect.remove(selectedIndex);
})