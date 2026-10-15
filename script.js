var buttonValue = 1;
var insufficientMoney = "Not enough money";
var basicUpgradeCheck = false;

function basicUpgradeScan() {
    if (basicUpgradeCheck) {
        document.getElementById("mainButton") = buttonValue + 1;
    }
}

function increment() {
    let button = document.getElementById("mainButton");
    if (buttonValue < 50) {
        buttonValue = buttonValue + 1;
        button.textContent = buttonValue;
    }
    else if (buttonValue < 200) {
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
    let button = document.getElementById("basicUpgradeButton");
    if (buttonValue < 50) {
        button.textContent = insufficientMoney;
        button.disabled = true;
        setTimeout(() => {
        button.textContent = "Basic Upgrade";
        button.disabled = false;
        }
    ,1000);
    }
    else {
        buttonValue = buttonValue -50;
        mainButton.textContent = buttonValue;
        basicUpgradeCheck = true;
    }
}