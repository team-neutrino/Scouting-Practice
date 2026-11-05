console.log("Test");

var variable1 = 5;
var variable2 = 5.2940;
var variable3 = "stuff";
var variable4 = true;

variable1 = variable1 + 1;
variable1 += 1;
variable1++;

variable3 = "siwon " + "park ";
variable3 += "      ";
place = variable3 + "number 1 human being";

console.log(variable1);
console.log(variable2);
console.log(place);

if (variable1 === 1) {
    console.log("variable 1 is 1");
}

var temperature = 31.3;
if (temperature >= 80) {
    console.log("It's far too hot");
}
else if (temperature >= 70) {
    console.log("It's pretty hot");
}
else if (temperature >= 60) {
    console.log("It's kind of hot");
}
else if (temperature >= 50) {
    console.log("It's alright");
}
else if (temperature >= 40) {
    console.log("It's pretty pleasant");
}
else if (temperature >= 30) {
    console.log("It's a bit chilly");
}
else if (temperature >= 20) {
    console.log("It's kind of cold");
}
else if (temperature >= 10) {
    console.log("It's cold");
}
else if (temperature >= 0) {
    console.log("It's pretty cold");
}
else {
    console.log("It's very cold");
}

var grade = 87.5;
if (grade >= 90) {
    console.log("A");
}
else if (grade >= 80) {
    console.log("B");
}
else if (grade >= 70) {
    console.log("C");
}
else {
    console.log("D");
}

var time = 0;
while (time <= 60) {
    time += 5;
    console.log(time);
}

for (let i = 0; i < 5; i++) {
    console.log("Cool thing" + i);
}

const COOLDOWN = 10;

for (let i = 0; i < 5; i++) {
    if (i < 3) {
        let count = 0;
        console.log(i);
    }
}

function printStuff() {
    var printVariable = "stuff";
    for (let i = 0; i < 4; i++);
    console.log(printVariable)
}

printStuff();
printStuff();