"use strict";

const firstRow = document.getElementsByClassName("firstRow")[0];
console.log(firstRow);

// ---------------------------------
// Create cards
// ---------------------------------
const createCard = function () {
  for (let i = 0; i < cards.length; i++) {
    // create col + span + card__margin
    const createCol = document.createElement("div");
    createCol.className = "col span-1-of-5 card__margin";

    // create card container
    const card = document.createElement("div");
    card.className = "card";
    createCol.append(card);

    // card inner (adds on to card)
    const cardInner = document.createElement("div");
    cardInner.className = "card__inner";
    card.append(cardInner);

    // cardFaceFront appends to card inner
    const cardFaceFront = document.createElement("div");
    cardFaceFront.className = "card__face card__face--front";
    cardInner.append(cardFaceFront);

    // cardFaceFront append to header2
    const header2 = document.createElement("h2");
    header2.innerText = cards[i].question;
    cardFaceFront.append(header2);

    // cardInner append cardFaceBack
    const cardFaceBack = document.createElement("div");
    cardFaceBack.className = "card__face card__face--back";
    cardInner.append(cardFaceBack);

    // cardFaceBack append cardContent
    const cardContent = document.createElement("div");
    cardContent.className = "card__content";
    cardFaceBack.append(cardContent);

    // cardContent append cardHeader
    const cardHeader = document.createElement("div");
    cardHeader.className = "card__header";
    cardContent.append(cardHeader);

    // cardHeader append headerH2
    const headerH2 = document.createElement("h2");
    headerH2.innerText = cards[i].category;
    cardHeader.append(headerH2);

    // cardContent append cardBody
    const cardBody = document.createElement("div");
    cardBody.className = "card__body";
    cardContent.append(cardBody);

    // cardBody append bodyH3
    const bodyH3 = document.createElement("h3");
    bodyH3.innerText = cards[i].question;
    cardBody.append(bodyH3);

    //cardBody append bodyP
    const bodyP = document.createElement("p");
    bodyP.innerText = cards[i].answer;
    cardBody.append(bodyP);

    // Finally add card to computer-div container
    firstRow.appendChild(createCol);
  }
};

// ---------------------------------
// Enable card flip
// ---------------------------------

const enableFlip = function () {
  const card = document.querySelectorAll(".card__inner");

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      card[i].classList.toggle("is-flipped");
    });
  }
};

// ---------------------------------
// Add cards to array
// ---------------------------------

// ---------------------------------
// Notes: Läs in json fil -> Lagra till array -> Kalla på createCards och iterera genom cards arrayen -> Slutligen lägg till klickfunktion till korten.
// ---------------------------------

let cards = [];

fetch("/resources/json/cardspart1.json")
  .then((data) => data.json())
  .then((data) => {
    for (let key in data) {
      var item = data[key];
      cards.push({
        question: item.question,
        category: item.category,
        answer: item.answer,
      });
    }
  })
  .then(createCard)
  .then(enableFlip);
