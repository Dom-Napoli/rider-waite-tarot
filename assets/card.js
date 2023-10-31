const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const cardId = parseInt(urlParams.get("card"));
console.log(typeof cardId);

console.log(cardData);


// get current card 
let currentCardObj; 

for(let i = 0; i < cardData.length; i++){
    if(cardData[i].id === cardId) {
        currentCardObj = cardData[i];
    }
}

console.log(currentCardObj)



