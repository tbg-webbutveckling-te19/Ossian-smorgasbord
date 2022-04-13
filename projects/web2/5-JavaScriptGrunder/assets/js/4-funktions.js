function twinkle() {
    console.log('Binka, lilla stjärna där,')
    console.log('hur jag undrar var du är.')
    console.log('Fjärrna lockar du min syn,')
    console.log('lik en diamant i skyn.')
}

twinkle();

// ARguments

// Declare a funktion
function square(num) {
    console.log(num * num)
}

// call a function
square(4);

function area(lenght, width) {
    console.log(`the area is ${Math.floor(lenght * width)} cm`)
}

area(5.4, 19);

function sayHello(name) {
    console.log(`Hello there, ${name}`)
}

sayHello(`YEs`);

function greet(p1, p2, p3, p4) {
    console.log(`Hello, ${p1}, ${p2}, ${p3}, and ${p4}`)
}

greet('Karl', 'Jacob', 'Sofia', 'Bob' );

var resultOfSquare = document.getElementsByClassName("result")[0];

function toSquare(x) {
    return x * x;
}   

resultOfSquare.innerHTML = `4 squared is ${toSquare(4)}`; 

function quadrupleMe(x) {
    return x * 4;
}

resultOfSquare.innerHTML = `<p>Quadrople this ${quadrupleMe(5)}</p>`;

var storeFunc = quadrupleMe(7);

resultOfSquare.innerHTML = `${storeFunc * storeFunc}`



var showTime = document.getElementById("showTime")
// Start button
var start = document.getElementById("startTime")

// Stop button
var stopp = document.getElementById("stopTime")

// global var for clearInterval
var myInterval; 


// funktion
function myTimer() {
    var d = new Date();
    showTime.innerHTML = d.toLocaleTimeString();
}

// Start button event listener
start.addEventListener("click", function() {
    myInterval = setInterval(myTimer, 1000)
}) 

// function stop
function stopTimer() {
    clearInterval(myInterval);
}

// Stop button event listener
stopp.addEventListener("click", function() {
    stopTimer()
})

// Arrays
var numberOfChildren = ["1", "1", "2", "2", "3", "4", "5"];
var partnersName = ["Lisa", "Karl", "Sofia", "Tina", "Wendy"]
var placeOnEarth = ["Sweden", "Great Brittan", "USA", "France", "Canada"]
var jobTitle = ["capenter", "programmer", "docktor", "truck driver", "boss of a large corperation"]

var resultOfFortune = document.getElementsByClassName("fortuneShow")[0];

// Fortune button
var fortune = document.getElementById("tellFortune");



// Function fortune
function fortuneTeller() {
    resultOfFortune.innerHTML = `<p>You will be a ${jobTitle[Math.floor(Math.random()*(jobTitle.length))]} in ${placeOnEarth[Math.floor(Math.random()*(placeOnEarth.length))]}, and married to ${partnersName[Math.floor(Math.random()*(partnersName.length))]} with ${numberOfChildren[Math.floor(Math.random()*(numberOfChildren.length))]} kids.</p>`;
}
fortune.addEventListener("click", function() {
    fortuneTeller()
}) 

// Solution:
var output = document.getElementById("writeFortune");
var btnFortune = document.getElementById("showFortune");

var children = [0, 1, 2, 3, 4, 5];
var partner = ["Lisa", "Bob", "Kent", "Moa", "Hilma", "Wendy", "Anna", "Sara"]
var locations = ["Lycksele", "Stockholm", "Karlstad", "Göteborg", "Los Angeles", "Rio"]
var job = ["game designer", "web developer", "chef", "pilot", "youtuber"]

function tellsFortune(children, partner, locations, job) {
    output.innerHTML += `You will be a ${job} in ${locations}, and married to ${partner} with ${children} kids. <br>`
}

btnFortune.addEventListener("click", () => {
    var rChildren = children[Math.floor(Math.random()*(children.length))];
    var rPartner = partner[Math.floor(Math.random()*(partner.length))];
    var rLocation = locations[Math.floor(Math.random()*(locations.length))];
    var rJob = job[Math.floor(Math.random()*(job.length))];
    tellsFortune(rChildren, rPartner, rLocation, rJob);
})