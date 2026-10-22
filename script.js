var buttonValue = 45;
var insufficientMoney = "Not enough money";
var clicksPerClick = 1;
var basicUpgradeMultiplier = 1.2;
var basicUpgradeCost = 50;

function increment() {
    let button = document.getElementById("mainButton");
    buttonValue = buttonValue + 1 + (clicksPerClick - 1);
    button.textContent = buttonValue;
}

function basicUpgrade() {
    let button = document.getElementById("basicUpgradeButton");
    if (buttonValue < basicUpgradeCost) {
        button.textContent = insufficientMoney;
        button.disabled = true;
        setTimeout(() => {
        button.textContent = "Basic Upgrade";
        button.disabled = false;
        }
    ,1000);
    }
    else {
        buttonValue = buttonValue - basicUpgradeCost;
        mainButton.textContent = buttonValue;
        clicksPerClick = clicksPerClick + 1;
        basicUpgradeCost = basicUpgradeCost * basicUpgradeMultiplier;
    }
}