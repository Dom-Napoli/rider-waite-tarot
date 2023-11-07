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

for (let i=0; i < cardData.length; i++){
    console.log(cardData[i]);
    if (cardData[i].id === cardId) {
    selectedCardObj = cardData[i];
    }
};
console.log(selectedCardObj);

//LINES 25-58 = LOOP PRACTICE: "chosen" deck, card, image, and copyright.
let chosenDeck;
for (let i = 0; i < decks.length; i++) {
    console.log(decks[i])
    if(decks[i].id === selectedCardObj.deck_id){
    chosenDeck = decks[i];
 }
}
console.log(chosenDeck);
    
let chosenCard;
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i])
        if(cards[i].id === selectedCardObj.card_id) {
        chosenCard = cards[i];
 }       
}
console.log(chosenCard);

// let chosenImage;
//     for (let i = 0; i < cardData.length; i++) {
//         console.log(cardData[i]);
//         if(cardData[i].image === selectedCardObj.image) {
//         chosenImage = cardData[i];   
//         }
//     }
//     console.log(chosenImage);

// let chosenCopyright;
//     for (let i = 0; i < cardData.length; i++) {
//         if(cardData[i].copyright === selectedCardObj.copyright) {
//         chosenCopyright = cardData[i]; 
//         }
//     }
//     console.log(chosenCopyright);

// LINES: 61-67: Attempt to create an Array but length came back at 0. Also, defined: "&&" = Operator with description of "and". "!== means 'not equal value or not equal type" - These operators imply that the each card's id number are not identical but the parameters are the same.
let idMatchCards = []
for (let i = 0; i < cardData.length; i++) {
    if ((cardData[i].card_id === chosenCard.id) && (cardData[i].id !== selectedCardObj.id)) {
        idMatchCards.push(cardData[i]);
    }
}
console.log(idMatchCards);



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

// let cardHeader = document.querySelector(".card-name");
// cardHeader.textContent = selectedCard.name;

// let cardSuit = document.querySelector(".card-suit");
// cardSuit.textContent = selectedCard.suit;

// document.querySelector(".card-image").src = selectedCardObj.image;


// This will allow card.js to have variables that contain the deck, card, and card ojects that are associated with the card that was selected from index.js

