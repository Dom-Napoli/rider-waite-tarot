const queryString = window.location.search; 
console.log(queryString);
// //search

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
// //where to search

const cardId = parseInt(urlParams.get("card"));
console.log(cardId);
// //provide all data

// console.log(cardData);

let selectedCardObj

for (let i=0; i < cardData.length; i++) {
    // console.log(cardData[i]);
    if (cardData[i].id === cardId) {
        selectedCardObj = cardData[i]
    }
}

console.log(selectedCardObj)








