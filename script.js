let count = 0;

// 2. Select the DOM elements
const countDisplay = document.getElementById('cookieCount');
const cookieButton = document.getElementById('btn1');

// 3. Add an event listener to the button
cookieButton.addEventListener('click', function () {
    count++; // Increment the count by 1
    countDisplay.textContent = count; // Update the HTML text with the new count
});