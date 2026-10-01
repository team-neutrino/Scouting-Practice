console.log("Test");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

var variable1 = 4;
var variable2 = 4.4242;
var variable3 = "thing thing";
var variable4 = true;

variable1 = variable1 + 1;
variable1 += 1;
variable1++;

variable3 = "taco " + "bell";
variable3 += "     ";
var place = variable3 + " number 1";

console.log(place);

if(variable1 === 7){
    console.log("variable 1 is 7");
}

var tempature = 105.9;
if(tempature >= 100){
    console.log("It's really hot");
} else if(tempature >= 80){
    console.log("It's hot");
}else {
    console.log("It's cold");
}

var grade = 82.5;
if(grade >= 60){
    console.log("D");
} else if(grade >= 70){
    console.log("C");
} else if(grade >= 80){
    console.log("B");
} else if(grade >= 90){
    console.log("A");
}

var time = 0;
while(time <= 60){
    time += 5;
    console.log(time)
}

for(let i = 0; i < 5; i++){
    console.log("Cool thing " + i);
}

const COOLDOWN = 10;

for(let i = 0; i < 5; i++){
    if(i < 3){
        let count = 0;
        console.log(count);
    }
}

function printStuff(){
    var printVariable = "stuff";
    for(let i = 0; i < 4; i++){
        console.log(printVariable);
    }
}

printStuff();
printStuff();

function add2(number){
    console.log(number + 2);
}

add2(3);
add2(-2);
add2("A");