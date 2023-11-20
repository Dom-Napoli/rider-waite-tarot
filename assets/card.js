const queryString = window.location.search; 
// // console.log(queryString);
// //search

const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
// //where to search

const cardId = parseInt(urlParams.get("card"));
// console.log(typeof cardId);
// //provide all data

// console.log(cardData);
let selectedCardObj

for (let i=0; i < cardData.length; i++) {
    // console.log(cardData[i]);
    if (cardData[i].id === cardId) {
    selectedCardObj = cardData[i];
    }
}
console.log(selectedCardObj);

//LINES 25-58 = LOOP PRACTICE: "chosen" deck, card, image, and copyright.

let chosenDeck;
for (let i = 0; i < decks.length; i++) {
    // console.log(decks[i]);
    if(decks[i].id === selectedCardObj.deck_id) {
    chosenDeck = decks[i];
    }
}
// console.log(chosenDeck);
    
let chosenCard;
    for (let i = 0; i < cards.length; i++) {
        // console.log(cards[i]);
        if(cards[i].id === selectedCardObj.card_id) {
        chosenCard = cards[i];
    }       
}
// console.log(chosenCard);

let chosenImage;
    for (let i = 0; i < cardData.length; i++) {
        // console.log(cardData[i]);
        if(cardData[i].image === selectedCardObj.image) {
        chosenImage = cardData[i];   
        }
}
// console.log(chosenImage);

let chosenCopyright;
    for (let i = 0; i < cardData.length; i++) {
        // console.log(cardData[i]);
        if(cardData[i].copyright === selectedCardObj.copyright) {
        chosenCopyright = cardData[i]; 
        }
    }
    // console.log(chosenCopyright);

// LINES: 61-67: Also, defined: "&&" = Operator with description of "and". "!== means 'not equal value or not equal type" - These operators imply that the each card's id number are not identical but the parameters are the same.
let idMatchCards = []
for (let i = 0; i < cardData.length; i++) {
    if ((cardData[i].card_id === chosenCard.id) && (cardData[i].id !== selectedCardObj.id)) {
        idMatchCards.push(cardData[i]);
    }
}
console.log("This is idMatchCards: ", idMatchCards);



// Ideally to have the card that was selected use the card's card_id and deck_id to retrieve:
// 1. The deck obj from deck_card_data.js that matches selectedCardObj.deck_id - assign to a variable 

// let selectedDeck;
// for(let i = 0; i < decks.length; i++) {
//     // console.log(decks[i])
//     if(decks[i].id === selectedCardObj.deck_id){
//         selectedDeck = decks[i];
//     }
// }
// console.log(selectedDeck);

// 2. The card obj from deck_card_data.js that matches selectedCardObj.card_id - assign to a variable 

// let selectedCard;
// for(let i = 0; i < cards.length; i++) {
//     if(cards[i].id === selectedCardObj.card_id){
//         selectedCard = cards[i];
//     }
// }
// console.log(selectedCard);


// 3. All card objs that have the same card_id from cardData that matches selectedCardObj.card_id. - aassign to a variable as an array  

// let sameIdCards = []
// for(let i =0; i < cardData.length; i++) {
//     if((cardData[i].card_id === selectedCard.id) && (cardData[i].id !== selectedCardObj.id)){
//         sameIdCards.push(cardData[i]);
//     }
// }
// console.log(sameIdCards)



// selectedCardObj //is an obj that represents the card that was selected in index.html. retrieved via the card id which was passed in the url params as card=CARDID
// selectedDeck //is the obj representing the deck the selectedCardObj belongs to by linking selectedCardObj.deck_id to the deck.id of decks in deck_card_data.js
// selectedCard //is the obj representing the card the selectedCardObj belongs to by linking the selectedCardObj.card_id to the card.id of cards in deck_card_data.js 
// sameIdCards //is an array of objs that match the same selectedCard.id with the selectedCardObj is associated with. 

console.log("selectedCardObj and chosenCard: ",selectedCardObj, chosenCard)



let cardheader = document.querySelector(".card-name");
    console.log(cardheader);
    cardheader.textContent = chosenCard.name;
    // cardheader.setAttribute("class", ".card-name");

let deckname = document.querySelector(".deck-name");
    console.log(deckname);
    deckname.textContent = chosenDeck.name;
    // deckname.setAttribute("class", ".deck-name");

let cardsuit = document.querySelector(".c-card-suit");
    console.log(cardsuit);
    cardsuit.textContent = chosenCard.suit;
    // cardsuit.setAttribute("class", "card-suit");

let cardimage = document.querySelector(".card-image").src = selectedCardObj.image;
    console.log("card-image");

let wtmeaning = document.querySelector(".c-wtmeaning");
    console.log(wtmeaning);
    wtmeaning.textContent = selectedCardObj.wtmeaning;
    // wtmeaning.setAttribute("class", "wtmeaning");    
    wtmeaning.innerHTML = selectedCardObj.wtmeaning;

let cardupright = document.querySelector(".c-upright");
    console.log(cardupright);
    cardupright.textContent = selectedCardObj.upright;
    // cardupright.setAttribute("class", ".upright");
    cardupright.innerHTML = selectedCardObj.upright;

let cardreverse = document.querySelector(".c-reverse");
    console.log(cardreverse);
    cardreverse.textContent = selectedCardObj.reverse;
    // cardreverse.setAttribute("class", ".reverse");
    cardreverse.innerHTML = selectedCardObj.reverse;
    
let cardcopyright = document.querySelector(".c-copyright");
    console.log(cardcopyright);
    cardcopyright.textContent = selectedCardObj.copyright;
    // cardcopyright.setAttribute("class", ".copyright");    
    cardcopyright.innerHTML = selectedCardObj.copyright;

// let cardhoroscope = document.querySelector(".horoscope");
//     console.log(cardhoroscope);
//     cardhoroscope.textContent = selectedCardObj.horoscope;
//     cardhoroscope.setAttribute("class", ".horoscope");   
//     cardhoroscope.innerHTML = selectedCardObj.horoscope;  

// This will allow card.js to have variables that contain the deck, card, and card ojects that are associated with the card that was selected from index.js

// loop throughg idMatchCards to create a div for each card and append to associated-cards div 

for(let i=0; i < idMatchCards.length; i++){

    let deck;
    for(let x=0; x < decks.length; x++){
        console.log("Seeking deck for each card: ", idMatchCards[i])
        if(decks[x].id === idMatchCards[i].deck_id){
            deck = decks[x];
        }
    }

    console.log("this is the deck: ", deck)
    
    console.log(idMatchCards[i]);
    let cardDiv = document.createElement("div");
    console.log(cardDiv);
    // create image 
    let cardImage = document.createElement("img");
    cardImage.src = idMatchCards[i].image;
    cardImage.alt = "card image for " + chosenCard.name + " - " + deck.name;
    // create header for image 
    let cardHeader = document.createElement("h3");
    cardHeader.textContent = chosenCard.name + " - " + deck.name;

    // create link to view individual card in card.html
    let cardLink = document.createElement("a");
    cardLink.setAttribute("href", `./card.html?card=${idMatchCards[i].id}` )
    cardLink.textContent = "View"

    cardDiv.append(cardImage);
    cardDiv.append(cardHeader);
    cardDiv.append(cardLink);
    document.querySelector(".associated-cards").append(cardDiv);

}
