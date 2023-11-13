// VAR for class= .container Nmae: container
let container = document.querySelector(".container");
console.log(container);




function loadCards(cardsObjArray){
    //ARRAY containing JavaScript Object. Data used to create html elements
    let arcana = cardsObjArray;
    //console.log the Array [cards] to view the independet elements within it. Independent element will list the name, Image, description and webpage properties along with their values.
    // console.log(arcana);

    for (let i =0; i <arcana.length; i++) {
        if(arcana[i].deck_id === 1 ) {
        // console.log(arcana[i]);
        // console.log(arcana[i].image);
        // console.log(arcana[i].upright);
        // console.log(arcana[i].reverse);
        // console.log(arcana[i].copyright);
        // console.log(arcana[i].webpage);

        let carddiv = document.createElement("div");       
                carddiv.setAttribute("class", "card-container");
                carddiv.style.background = "#f1f0f0";
                // console.log(carddiv);
        let textdiv = document.createElement("div");
                // console.log(textdiv);
            textdiv.setAttribute("class", "text-side");
        //     // console.log(textdiv);
        let picdiv = document.createElement("div");
        //     console.log(picdiv);
            picdiv.setAttribute("class", "pic-side");
        //     // console.log(picdiv);
        let image = document.createElement("img");
            image.setAttribute("class", "card-image");
        //     // console.log(image);
            image.setAttribute("src", arcana[i].image);
                // console.log(image);
        let imgbutton = document.createElement("a");
            imgbutton.setAttribute("class", "imageb");
            imgbutton.setAttribute("href", `./card.html?card=${arcana[i].id}`);
            imgbutton.textContent = "Card Page";
            // console.log(imgbutton);
        let up = document.createElement("p");
            up.setAttribute("class", "upright");
            up.innerHTML = arcana[i].upright;
        //     // console.log(up);
        let rev = document.createElement("p");
            rev.setAttribute("class", "reverse");
            rev.textContent = arcana[i].reverse;
            rev.style.display = "none";
        //     // console.log(rev);
        let bjcopy = document.createElement("p");
            bjcopy.setAttribute("class", "copyright");
            bjcopy.textContent = arcana[i].copyright;
            bjcopy.innerHTML = arcana[i].copyright;
        //     // console.log(bjcopy);
        let hors = document.createElement("p");
            hors.setAttribute("class", "horoscope");
            hors.textContent = arcana[i].horoscope;
            hors.innerHTML = arcana[i].horoscope;
            // console.log(hors);
        let cardpage = document.createElement("a");
            cardpage.setAttribute("href", arcana[i].webpage);
            cardpage.setAttribute("target", "_blank");
            // cardpage.textContent = "Visit Card Webpage";
            console.log(cardpage);
            
        // target = "_blank"
        // console.log(cardpage);


        picdiv.append(image);
        picdiv.append(imgbutton);
        // console.log(picdiv);
        textdiv.append(up); 
        textdiv.append(rev);
        textdiv.append(bjcopy);
        textdiv.append(hors);
        textdiv.append(cardpage);
        // console.log(textdiv);

        // // //append div to container

        carddiv.append(picdiv);
        carddiv.append(textdiv);
        console.log(carddiv);
        container.append(carddiv);
        console.log(container);
        }
    }

    let allcards = document.querySelectorAll(".card-container");
    // //console.log = Nodelist of all 22 images.
        // console.log(allcards);
        // console.log(allcards[0]);    

    for (let i=0; i < allcards.length; i++) {

        let cardImage = allcards[i].querySelector("img");    
        cardImage.addEventListener("mouseover", function(){
            // console.log(cardImage);    
            opacityOnOff(cardImage);
        })

        // mouseleave
        cardImage.addEventListener("mouseleave", function(){
            // console.log(cardImage);    
            opacityOnOff(cardImage);
        })


        allcards[i].addEventListener("click", function(){
            console.log(allcards[i].className)

            if(allcards[i].className === "card-container") {
                reverseCard(allcards[i]); // 1 card 
            } else if (allcards[i].className === "card-container reverse") {
                resetCard(allcards[i]);
            }
        })
    }

}



function opacityOnOff(image) {
    if(image.className === "card-image") {
        opacityOn(image)
    } else if (image.className === "card-image mouseover") {
        opacityReset(image);
    }
}
// function mouseOver animate opacity: ".7"

function opacityOn(image) {
    image.setAttribute("class", "card-image mouseover");
    image.style.opacity = "0.7";  
}

function opacityReset(image) {
    image.setAttribute("class", "card-image")
    image.style.opacity = "1.0";
}


function reverseCard(card){ 
    card.setAttribute("class", "card-container reverse");
    let cardImage = card.querySelector("img");
    cardImage.style.rotate = "180deg";
    let upright = card.querySelector(".upright");
    upright.style.display = "none";
    let reverse = card.querySelector(".reverse");
    reverse.style.display = "block";
}

function resetCard(card){
    card.setAttribute("class", "card-container");
    let cardImage = card.querySelector("img");
    cardImage.style.rotate = "0deg";
    let upright = card.querySelector(".upright");
    upright.style.display = "block";
    let reverse = card.querySelector(".reverse");
    reverse.style.display = "none";
}

function cardFilter(filterText) {
    console.log("I was called! cardFilter() " + filterText);
    // console.log(cards);
    // use map to filter cards to create a new array the only contains the cards with the card name including the filterText
    let filteredCards = cards.filter((c, i) => {
        if (c.name.toLowerCase().includes(filterText.toLowerCase())) {
            console.log(c.id);
            return c;
            // filteredCards.push(c);
        }
    })

    // filterCards contains objects containing id, name and suit. We only want filteredCards to contain the id of the cards so we need to apply a .map on the filteredCard to get an array of ids. Example: [1, 5]
    console.log(filteredCards);
    // redefine filteredCards to only include the id of the objects it used to contain using .map
    filteredCards = filteredCards.map(obj => obj.id);

    console.log(".map filteredCards  ", filteredCards)

    let cardstoRender = [];
    //iterate over cardData
    for(let i=0; i < cardData.length; i++){
        //for each card object in cardData determine it it's card_id is included in the filteredCards array of ids
        if(filteredCards.includes(cardData[i].card_id)) {
            //if the cardData card id is in the filteredCards array then push the card obj into the cardtoRender array.
            cardstoRender.push(cardData[i])
        }
    }
    console.log(cardstoRender);

    //will need to clear all children of the cards container as we need the container to be empty. We will repopulate with the card objects within the cardstoRender array.


    document.querySelector(".container").innerHTML = '';    
 
    // let cardElements = document.querySelectorAll(".card-container");
    // for(let i=0; i<cardElements.length; i++){
    //     cardElements[i].remove();
    // }



    //cardstoRender should contain all cards objects within cardData that have the card_id that includes the text we inputted in the input fild within the card name. We can call the loadCards function with the cardstoRender array if card objects.
    loadCards(cardstoRender);

}


loadCards(cardData);