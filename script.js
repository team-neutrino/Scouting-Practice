let cool = 1;

console.log("things");

if(cool === 0){

}

for(let i = 0; i < 5; i++){

}

function myFunction(value){
    let button = document.getElementById("button1");
    button.textContent = "this is cool";
    console.log(value);
}


var array1 = ["Hello","Good Day","Merry Christmas","Happy New Year"];

console.log(array1[1]);
console.log(array1[0]);
array1[1] = "This";
console.log(array1[1]);

console.log(array1.length);

array1.push("Good Day You")
console.log(array1)
console.log(array1.length);

array1.pop();
console.log(array1)
console.log(array1.length);

function findPrimeNumbers(upperBound){
    let primeNumbers = [];
    for(let num = 1; num < upperBound; num++){
        let prime = true;
        for(let lowerNum = 2; lowerNum < num; lowerNum++){
            if(num % lowerNum === 0){
                prime = false;
                break;
            }
        }
        if(prime){
            primeNumbers.push(num)
        }
    }
    return primeNumbers
}

console.log(findPrimeNumbers(50));










var counter = 0;

var password = "password";

const VOWELS = ["a","e","i","o","u"];

function add1(){
    counter++;
    document.getElementById("text1").textContent = counter;
}

function checkPassword(){
    inputText = document.getElementById("password");
    if(inputText.value === password){
        inputText.style.backgroundColor = "#0f0";
    } else {
        inputText.style.backgroundColor = "#f00";
    }
}

function vowelDeleter(){
    textarea = document.getElementById("textarea1");
    oldText = textarea.value;
    newText = "";
    for(let i = 0; i < oldText.length; i++){
        char = oldText[i];
        if(!VOWELS.includes(char)){
            newText += char;
        }
    }
    textarea.value = newText;
}

function createButton(){
    document.getElementById("body").innerHTML += `<button onclick="createButton()">Create Button</button>`;
}