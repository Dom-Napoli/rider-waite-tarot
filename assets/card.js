const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const cardId = urlParams.get("card");
console.log(cardId);

console.log(cardData);