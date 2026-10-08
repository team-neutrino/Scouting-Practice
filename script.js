var click1 = 0;
var perClick = 1;

console.log("things");

function myFunction(value) {
    let button = document.getElementById("button1");
    console.log(value);
}

function ifClicked() {
    let button = document.getElementById("text");
    click1 = click1 + perClick;
    button.textContent = click1;

}

function otherButton() {
    perClick = perClick + 1;
}

function booton() {
    let lettuce = document.getElementById("text");
    click1 = click1 * 100;
    lettuce.textContent = click1;
}
