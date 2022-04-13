var rndmArray = ["Adam", 35, false];

var makeArray = [];
var Makearray = new Array();

console.log(rndmArray[0])
console.log(rndmArray.length);

// push(), pop(), shift(), unshift();indexOf(), slice(), reverse()
var colors = ["red", "green", "blue"];
console.log(colors);
colors.push("purple");
console.log(colors);

// pop() - remove an item at the end of an array¨
colors.pop();
console.log(colors);

// unshift() - add an item at the beginning of an array
colors.unshift("yellow");
console.log(colors);

// shift() - remove an item at the beginning of an array
colors.shift();
console.log(colors);

// indexOf() - find the index 
console.log(colors.indexOf("blue"));
console.log(colors.indexOf("black")); // retunrs -1 coz it does not exist

// slice() - copy parts of an array
var fruits = ["Bannan", "Orange", "Lemon", "Mango", "Pear"]

// Use slice() to copy the 2nd and 3rd frult
var citrus = fruits.slice(1, 3);
console.log(citrus)

// Exclude the first item but copy the rest
citrus = fruits.slice(1);
console.log(citrus)

// copy the entire array
citrus = fruits.slice(fruits);
console.log(citrus)

// reverse() - reverce the order in an array 
citrus.reverse();
console.log(citrus);

// Array with groups
var groups = [["A-dog", "B-dog", "C-Dog"], [35, 45, 55], []];
console.log(groups[0][0]);
console.log(groups[0][1]);
console.log(groups[0][2]);
console.log(groups[1][2]);

var games = ["Zelda", "Megaman", "Iceclimbers", "Mario"];
for(var i = 0; i < games.lengt; i++) {
    console.log(games[i]);
}

games.forEach(function(game) {
    console.log(game);
})

var countries = ['Sweden','Norway', 'Finland', 'Denmark', 'island'];
countries.forEach(function(countries) {
    console.log(countries);
})

var cars = ['Audi', 'Ford', 'Volvo', 'Saab'];
cars.forEach(function(cars) {
    console.log(cars);
})

// Write a function max() that accepts an array of numbers and returns
// the maximum number in the array
var nmber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 13, 12, 20, 11, 54, 2, 1, 89, 29, 13, 92, 28, 1, 20, 91]

function max() {
    highest = nmber[0]
    nmber.forEach(function(nmber) {
        if(highest < nmber) [
            highest = nmber
        ]
    })
    return highest
}
max()
console.log(highest)