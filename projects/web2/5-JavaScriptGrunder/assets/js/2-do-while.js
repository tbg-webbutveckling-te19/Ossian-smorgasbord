var count = 0;
console.log("***** While loop started *****")
while(count < 10) {
    console.log(`Count is ${count}`);
    count++;
}
console.log("***** While loop Ended *****")

// do while
var counter = 0;

console.log("Do while has ended.")
do {
    console.log(`Counter is ${counter}`);
    counter++;
} 
while(counter < 5) {
    console.log("Do while has ended.")
}

// While playing card is not equal to Hearts - Contine to draw a new card 
var btnDraw = document.getElementById("draw")
var congratsText = document.getElementById("congratsText")
btnDraw.addEventListener("click", function() {
    do {
        // Lista ut vilken färg det är
        var cardSuit = Math.floor(Math.random() * 4);
        // Lista ut vilken valör det är 
        var cardValue = Math.floor((Math.random() * 14) + 1);

        if(cardValue === 1) {
            cardValue = cardValue + 1;
        }
        else if(cardValue == 11) {
            cardValue = "Jack";
        }
        else if(cardValue == 12) {
            cardValue = "Queen";
        }
        else if(cardValue == 13) {
            cardValue = "King";
        }
        else if(cardValue == 14) {
            cardValue = "Ace";
        }

        switch(cardSuit) {
            case 0:
                console.log(`You drew a ${cardValue} of Hearts`)
                break
            case 1:
                console.log(`You drew a ${cardValue} of Spades`)
                break
            case 2:
                console.log(`You drew a ${cardValue} of Clubs`)
                break
            case 3:
                console.log(`You drew a ${cardValue} of Diamonds`)
                break
            default:
                console.log("No sush card in this deck.")

        }
    }
    while(cardSuit !== 0) {
        console.log(`Congratulations! You drew a ${cardValue} of Hearths`)
        congratsText.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmedium%2F1%2Fhearts-deck-of-cards-custom-home-fashions-transparent.png&f=1&nofb=1")
    }// Så länge som färgen inte är hjärter ska korten fortsätta dras

    // Beronde på färg ska något göras
    
})