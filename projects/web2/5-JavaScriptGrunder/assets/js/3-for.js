console.log("For Loop started")
for(var i = 0; i <= 10; i++ ){
    console.log(`Count is ${i}`)
}
console.log("For loop ended")

for(var i = 0; i < 6; i += 2) { // i = i + 2
    console.log(`Count is ${i}`)
}

var str = "Hello World!"
for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

var myArr = ["HTML", "CSS", "JS", 35, 18, true, false];
var len = myArr.length;
for(var i = 0; i < len; i++) {
    console.log(myArr[i]);  
}

for(var i = 0; i < 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// Excersise 1 - Exlapin the code
for(var i = 0; i < 16; i += 8) {
    console.log(i);
}

// Excersise 2 - Exlapin the code
var str = 'xwhiqenblwmlypo';
for(var i = 2; i < str.length; i += 3) {
    console.log(str[i])
} // Prints h e l l o

// Exersise 3
for(var i = -10; i < 20; i++) {
    console.log(i);
}

// Exersise 4 
for(var i = 10; i <= 20; i += 2) {
    console.log(i);
}

// Exersise 5
for(var i = 300; i <= 333; i++) {
    if(i % 2 > 0) {
        console.log(i);
    }   
}

// Excersise 6
for(var i = 5; i <= 50; i++) {
    if(i % 5 == 0 && i % 3 === 0) {
        console.log(i);
    }   
}

//
function isEven(num) {
    if(num % 2 === 0) {
        console.log("Even",num);
    }   
    if(num % 2 !== 0) {
        console.log("Odd",num)
    }
}
isEven(1712);
var multiplier = 9;
for(var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(`${multiplier} * ${i} = ${result}`);
}

//Square with 5*5 stars

var squareOutput = document.getElementsByClassName("square")[0];

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 5; j++) {
        squareOutput.innerHTML += "* ";
    }
    squareOutput.innerHTML += "</br>";
}

for(var i = 0; i <= 10; i++){
    var multiplierOne = i;
    for(var j = 0; j <= 10; j++){
        var multiplierTwo = j;
        var result = multiplierOne * multiplierTwo;
        console.log(`${multiplierOne} * ${multiplierTwo} = ${result}`);
    }
}

var NumberOneArr = ["TFT", "LOL", "Minecraft", "Don't Starve Togheter", "Terraria"];
lenOne = NumberOneArr.length;
for(var i = 0; i < lenOne; i++) {
    console.log(`My number #${i + 1} choice is ${NumberOneArr[i]}`);  
}

var NumberOneArr = ["TFT", "LOL", "Minecraft", "Don't Starve Togheter", "Terraria"];
lenOne = NumberOneArr.length;
for(var i = 0; i < lenOne; i++) {
    var numberEnd;
    if(i == 0) {
        numberEnd = "st";
    }
    else if(i == 1) {
        numberEnd = "nd";
    }
    else if(i == 2) {
        numberEnd = "rd";
    }
    else if(i > 2) {
        numberEnd = "th";
    }
    console.log(`My ${i + 1}${numberEnd} choice is ${NumberOneArr[i]}`);  
}

