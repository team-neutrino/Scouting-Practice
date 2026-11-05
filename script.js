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

function double() {
    let carrot = document.getElementById("text");
    click1 = click1 * 2;
    carrot.textContent = click1;
}

function triple() {
    let carrot = document.getElementById("text");
    click1 = click1 * 3;
    carrot.textContent = click1;
}

function quadruple() {
    let carrot = document.getElementById("text");
    click1 = click1 * 4;
    carrot.textContent = click1;
}

function centuple() {
    let lettuce = document.getElementById("text");
    click1 = click1 * 100;
    lettuce.textContent = click1;
}