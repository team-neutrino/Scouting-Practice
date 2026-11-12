var buttonValue = 45;
var insufficientMoney = "Not enough money";
var clicksPerClick = 1;
var basicUpgradeMultiplier = 1.3;
var basicUpgradeCost = 50;
var costDisplay = "Cost: "
var clicksPerSecond = 0;
var clicksPerSecondCost = 60;
const greaterClicksPerSecond = setInterval(() => {
    let button = document.getElementById("mainButton");
    buttonValue += 0.1* clicksPerSecond;
    button.textContent = buttonValue;
}, 100);

function increment() {
    let button = document.getElementById("mainButton");
    buttonValue = buttonValue + 1 + (clicksPerClick - 1);
    button.textContent = buttonValue;
}

function basicUpgrade() {
    let button = document.getElementById("basicUpgradeButton");
    let text = document.getElementById("basicUpgradeCost");
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
        basicUpgradeCost = Math.floor(basicUpgradeCost * basicUpgradeMultiplier);
        text.textContent = costDisplay + Math.floor(basicUpgradeCost);
    }
}

    function clicksPerSecondUpgrade() {
        let button = document.getElementById("clicksPerSecondButton");
        let text = document.getElementById("clicksPerSecondCost");
        if (buttonValue < clicksPerSecondCost) {
        button.textContent = insufficientMoney;
        button.disabled = true;
        setTimeout(() => {
        button.textContent = "Clicks Per Second Upgrade";
        button.disabled = false;
        }
    ,1000);
    }
    else {
        buttonValue = buttonValue - clicksPerSecondCost;
        mainButton.textContent = buttonValue;
        clicksPerSecond = clicksPerSecond + 1;
        clicksPerSecondCost = Math.floor(clicksPerSecondCost * basicUpgradeMultiplier);
        text.textContent = costDisplay + Math.floor(clicksPerSecondCost);
    }
    
    
}