// VAR for class= .container Nmae: container
let container = document.querySelector(".container");

//ARRAY containing JavaScript Object. Data used to create html elements
let cards = [{ name: "The High Priestess", image: "http://www.learntarot.com/bigjpgs/maj02.jpg", description1: "The High Priestess is the guardian of the unconscious. She sits in front of the thin veil of unawareness which is all that separates us from our inner landscape. She contains within herself the secrets of these realms and offers us the silent invitation.", description2: "The High Priestess is the feminine principle that balances the masculine force of the Magician. The feminine archetype in the tarot is split between the High Priestess and the Empress. The High Priestess is the mysterious unknown that women often represent, especially in cultures that focus on the tangible and known. The Empress represents woman's role as the crucible of life.", description3: "In readings, the High Priestess poses a challenge to you to go deeper - to look beyond the obvious, surface situation to what is hidden and obscure. She also asks you to recall the vastness of your potential and to remember the unlimited possibilities you hold within yourself. The High Priestess can represent a time of waiting and allowing. It is not always necessary to act to achieve your goals. Sometimes they can be realized through a stillness that gives desire a chance to flower within the fullness of time.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)",
 webpage: "http://www.learntarot.com/maj02.htm" }
]

//console.log the Array [cards] to view the independet elements within it. Independent element will list the name, Image, description and webpage properties along with their values.
console.log(cards);

for (let i =0; i <cards.length; i++) {
    console.log(cards[i])
    console.log(cards[i].name)
    console.log(cards[i].image)
    console.log(cards[i].description1)
    console.log(cards[i].description2)
    console.log(cards[i].description3)
    console.log(cards[i].copyright)
    console.log(cards[i].webpage)

let div = document.createElement("div");
    console.log(div);
    div.setAttribute("class", "container");
    console.log(container);
let h2 = document.createElement("h2");
    h2.textContent = cards[i].name;
    console.log(h2);
let img = document.createElement("img");
    console.log(img);
    img.setAttribute("src", cards[i].image)
    console.log(img);
let d1 = document.createElement("p");
    d1.setAttribute("class", "description1");
    d1.textContent = cards[i].description1;
    console.log(d1);
let d2 = document.createElement("p");
    d2.setAttribute("class", "description2");
    d2.textContent = cards[i].description2;
    console.log(d2);
let d3 = document.createElement("p");
    d3.setAttribute("class", "description3");
    d3.textContent = cards[i].description3;
    console.log(d3);    
let pc = document.createElement("p");
    pc.setAttribute("class", "copyright")
    pc.textContent = cards[i].copyright;
    console.log(pc);
let a = document.createElement("a");
    a.setAttribute("href", cards[i].webpage);
    a.textContent = cards[i].name+ " webpage";
    console.log(a);

//append div with elements
//console.log to confirm

div.append(h2);
div.append(img);
div.append(d1);
div.append(d2);
div.append(d3);
div.append(pc);
div.append(a);
console.log(div);

//append div to container

container.append(div);




        




}



