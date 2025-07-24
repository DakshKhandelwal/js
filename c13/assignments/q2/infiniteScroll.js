const list = document.getElementById("infi-list");
var listCount = 10;
list.addEventListener("scrollend", function (e) {
    console.log(e);
    addListItem(2);
})


function addListItem(count) {
    for(let i=0; i<count; i++) {
        const listItem = document.createElement("li");
        listItem.innerText = `Item ${listCount + 1}`;
        list.appendChild(listItem);
        listCount++;
    }
}

