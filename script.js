let cookieCount = 0;
let cookieCounter = document.getElementById('cookieCount');
let cookie = document.getElementById('cookie')

cookie.addEventListener('click', function () {
    cookieCount++;
    cookieCounter.textContent = cookieCount;
    console.log(cookieCount);
})

