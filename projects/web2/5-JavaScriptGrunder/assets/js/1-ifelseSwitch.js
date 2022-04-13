// Greather Than
var age = 17;
if(age >= 18) {
    console.log("Du får ta körkort.");
}
else {
    console.log("Du är för ung för att ta körkort.")
}

// If something is equal too
// var lesson = "English";

// if(lesson === "English") {
//     console.log("We have " + lesson);
// } 
// else if(lesson === "History") {
//     console.log("We have " + lesson);
// }
// else if(lesson === "Biology") {
//     console.log("We have " + lesson);
// }
// else {
//     console.log("We have spare time!")
// }

var user = document.getElementById("userInput");
var subject = document.getElementById("showSubject")

user.addEventListener("keydown", function(e) {
    // console.log(e.key)
    if(e.key === "Enter") {
       if (user.value.indexOf("En") === 0 || user.value.indexOf("en") === 0) {
            console.log("We have English")
       } 
       else if (user.value.indexOf("Hi") === 0 || user.value.indexOf("hi") === 0)  {
           console.log("We have History")
       }
       else if(user.value.indexOf("Bi") === 0 || user.value.indexOf("bi") === 0)  {
           console.log("We have Biology")
       } 
       else if(user.value.indexOf("Sw") === 0 || user.value.indexOf("sw") === 0) {
           console.log("We have Swedish")
       }
       else {
           console.log ("We have spare time!")
       }
       subject.innerHTML = user.value;
       user.value = "";
    }
});

var showWeather = document.getElementById("showWeather")
var isSunny = Math.random();
if(isSunny < 0.5) {
    showWeather.innerHTML = "Put on some warm clothes today."
}
else {
    showWeather.innerHTML = "Put on some shorts today."
}

var d = new Date();

var showTime = document.getElementById("time");

// showTime.innerHTML = `${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}`;
showTime.innerHTML = d.toLocaleTimeString();

if(d.getHours() <= 12) {
    console.log("Good morning.")
}
else {
    console.log("Good Evening")
}

if(d.getHours() < 14) {
    if(d.getMonth() > 9 || d.getMonth() < 2) {
        console.log("Go to sleep and wake up when it is spring")
    }
    else {
        console.log("Good morning.")
    }
}
else {
    console.log("Good evening.");
}

var showDay = document.getElementById("showDay")

var day = d.getDay();
switch(day) {
    case 0:
        showDay.innerHTML = ("Söndag")
        break;
    case 1:
        showDay.innerHTML = ("Måndag")
        break;
    case 2:
        showDay.innerHTML = ("Tisdag")
        break;
    case 3:
        showDay.innerHTML = ("Onsdag")
        break;
    case 4:
        showDay.innerHTML = ("Torsdag")
        break;
    case 5:
        showDay.innerHTML = ("Fredag")
        break;
    case 6:
        showDay.innerHTML = ("Lördag")
        break;
    default:
        showDay.innerHTML = ("Idag är en dag.")

}


 // Switch Statment

var grade = "A";
switch(grade) {
    case "A":
        console.log("Great job! You got an A!")
        break;

    case "B":
        console.log("Great job! You got an B!")
        break;
    
    case "C":
        console.log("Alright! You got an C!")
        break;
    case "D":
        console.log("Good! You got an D!")
        break;
    case "E":
        console.log("Ok! You got an E!")
        break;
    case "F":
        console.log("F! You did not pass.")
        break;
    default:
        console.log("An error has occured!")
}


/// Control the square

var square = document.getElementById("square")

square.setAttribute("style","position: absolute; bottom: 300px; left: 620px;")

var innerWidth = window.innerWidth - 50
var innerHeight = window.innerHeight - 50

console.log(innerWidth)
console.log(innerHeight)

document.addEventListener("keydown", function(e){
    switch(e.key) {
        case "ArrowLeft":
            keyLeft()
            break;
        case "ArrowRight":
            keyRight()
            break;
        case "ArrowUp":
            keyUp()
            break;
        case "ArrowDown":
            keyDown()
            break;
    }
}) 
// square.style.backgroundColor = "red"
// square.style.width = "100px"
// square.style.height = "140px"

// FUNCTIONS
function keyLeft() {
    var leftNumbers = square.style.left.replace("px", "")
    var left = Number(leftNumbers)
    var speed = 5;
    if(left > 0) {
        square.style.left = `${left - speed}px`
    }
}

function keyRight() {
    var leftNumbers = square.style.left.replace("px", "")
    var left = Number(leftNumbers)
    var speed = 5;
    if(left < innerWidth) {
        square.style.left = `${left + speed}px`
    }
}

function keyUp() {
    var bottomNumbers = square.style.bottom.replace("px", "")
    var bottom = Number(bottomNumbers)
    var speed = 2;
    if(bottom < innerHeight) {
        square.style.bottom = `${bottom + speed}px`
    }
}

function keyDown() {
    var bottomNumbers = square.style.bottom.replace("px", "")
    var bottom = Number(bottomNumbers)
    var speed = 2;
    if(bottom > 0) {
        square.style.bottom = `${bottom - speed}px`
    }
}