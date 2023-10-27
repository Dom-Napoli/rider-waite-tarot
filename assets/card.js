const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const cardId = parseInt(urlParams.get("card"));
console.log(typeof cardId);

console.log(cardData);
console.log(imgCard);

// get current card 
let currentCard; 

for(let i = 0; i < cardData.length; i++){
    if(cardData[i].id === cardId) {
        currentCard = cardData[i];
    }
}

console.log(currentCard)

// get images of card
let cardImages = [];

for(let i = 0; i < imgCard.length; i++){
    if(imgCard[i].card_id === cardId) {
        cardImages.push(imgCard[i]);
    }
}

console.log(cardImages);

let imageContainer = document.querySelector(".card-images");

for(let i = 0; i < cardImages.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", cardImages[i].img_url);
    img.setAttribute("alt", "image of card");
    imageContainer.append(img);
}
