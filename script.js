var buttonValue = 1;
var insufficientMoney = "Not enough money";

function something() {
    let button = document.getElementById("aButton");
    if (buttonValue < 10) {
        buttonValue = buttonValue + 1;
        button.textContent = buttonValue;
    }
    else if (buttonValue < 100) {
        buttonValue = buttonValue +2;
        button.textContent = buttonValue;
    }
    else if (buttonValue < 500) {
        buttonValue = buttonValue +4;
        button.textContent = buttonValue;
    }
    else {
        buttonValue = buttonValue +5;
        button.textContent = buttonValue;
    }
}

function basicUpgrade() {
    let button = document.getElementById("anotherButton");
    if (buttonValue < 50) {
        button.textContent = insufficientMoney;
        button.disabled = true;
        setTimeout(() => {
        button.textContent = "Button1";
        button.disabled = false;
        }
    ,1000);
    }
    else {
        buttonValue = buttonValue -50;
    }
}