import {
  stats,
  // card1,
  cards,
  activeCards,
  createCard,
  generateQuality,
  generateRandomNumber,
  rerollCard,
  craftCard,
  cardDetails,
} from "./game-home-variables.js";

const htmlCards = document.getElementsByClassName("cards");

for (let i = 0; i < 5; i++) {
  let name = cards[`card${i + 1}`].name;
  htmlCards[i].style.backgroundImage = `url(${stats.links[name]})`;
}

const secondCardDeck = document.getElementById("second-card-deck");

activeCards.slot2
  ? (secondCardDeck.textContent = "Card Deck 2")
  : (secondCardDeck.textContent = "+");

// function openCardDetails(card) {
//   cardDetails = activeCards.slot1[card.classList[1]];
//   console.log(cardDetails);
// }

for (let i = 0; i < 5; i++) {
  htmlCards[i].addEventListener("click", function () {
    let cardKeys = Object.keys(activeCards.slot1[this.classList[1]]);
    let cardValues = Object.values(activeCards.slot1[this.classList[1]]);
    for (let integer = 0; integer < cardKeys.length; integer++) {
      cardDetails[cardKeys[integer]] = cardValues[integer];
    }
    console.log(cardDetails);
    localStorage.setItem("detailed card", JSON.stringify(cardDetails));
    window.location.href = 'https://nevilstandoff.github.io/MFF-Card-Simulator/cards-details.html
      '
  });
}
