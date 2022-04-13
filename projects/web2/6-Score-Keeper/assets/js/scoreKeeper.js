var player1Count = document.querySelector("#player1Count");
var player2Count = document.querySelector("#player2Count");
var playingTo = document.getElementById("playingTo")
var theWinner = document.getElementById("theWinner")
var hasWon = false;

// What Number to go to
var maxNumber = 0;
var input = document.getElementById("whatNumber")
input.addEventListener("keydown", function(e) {
    if(e.key === "Enter" && hasWon == false) {
        playingTo.innerHTML = input.value;
        maxNumber = input.value;
        input.value = "";
    }   
})

// Player 1 Points
var player1 = document.querySelector("#player1");
var player1Point = 0;
player1.addEventListener("click", () => {
    if(player1Point < maxNumber && hasWon == false) {
        player1Point += 1;
        player1Count.innerHTML = `${player1Point}`;
    }
    if(player1Point == maxNumber && hasWon == false){
        theWinner.innerHTML = `The winner is player1!`;
        hasWon = true;
        player1Count.style.color = "green";

    }
})

// Player 2 Points
var player2 = document.querySelector("#player2");
var player2Point = 0;

player2.addEventListener("click", () => {
    if(player2Point < maxNumber && hasWon == false) {
        player2Point += 1;
        player2Count.innerHTML = `${player2Point}`;
    }
    if(player2Point == maxNumber && hasWon == false){
        theWinner.innerHTML = `The winner is player2!`;
        hasWon = true;
        player2Count.style.color = "green";

    }
})

// Reset Points
var reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    hasWon = false;
    player1Point = 0;
    player1Point = 0;
    player1Count.innerHTML = '0';
    player2Count.innerHTML = '0';
    theWinner.innerHTML = ''
    maxNumber = 0;
    playingTo.innerHTML = '0';
    player1Count.style.color = "black";
    player2Count.style.color = "black";

})