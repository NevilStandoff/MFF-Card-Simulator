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

let page = "cards";
let nameOfChangingCard;
let changeCardSet = false;
const htmlCards = document.getElementsByClassName("cards");
const htmlInventoryCardsList = document.getElementsByClassName(
  "inventory-card-list"
)[0];
const htmlOpenInventory = document.getElementsByClassName("inventory-open")[0];
const htmlOpenCardDeck1 = document.getElementsByClassName("card-deck1-open")[0];
htmlOpenInventory.addEventListener("click", function () {
  page = "inventory";
  checkPage();
});
htmlOpenCardDeck1.addEventListener("click", function () {
  page = "cards";
  checkPage();
});

for (let i = 0; i < Object.keys(stats.bonusStats).length; i++) {
  const cardName = Object.keys(stats.bonusStats)[i];
  const newCard = document.createElement("li");
  newCard.classList.add("inventory-card-list-item");
  htmlInventoryCardsList.appendChild(newCard);
  newCard.style.backgroundImage = `url(${stats.links[cardName]})`;
}

equalCardHeightToWidth();
function equalCardHeightToWidth() {
  for (let i = 0; i < Object.keys(stats.bonusStats).length; i++) {
    const htmlcard = document.getElementsByClassName(
      "inventory-card-list-item"
    )[i];
    htmlcard.style.height = `${(htmlcard.offsetWidth / 2) * 3}px`;
  }
}

window.addEventListener('resize', function(){
  equalCardHeightToWidth()
})

for (let i = 0; i < Object.keys(stats.bonusStats).length; i++) {
  const htmlcard = document.getElementsByClassName("inventory-card-list-item")[
    i
  ];
  htmlcard.addEventListener("click", function () {
    changeCardSet = true;
    page = "cards";
    checkPage();
    nameOfChangingCard = Object.keys(stats.bonusStats)[i]
  });
}

setActiveCardBackground();
function setActiveCardBackground() {
  if (JSON.parse(localStorage.getItem("cards"))) {
    const newCards = JSON.parse(localStorage.getItem("cards"));
    console.log(newCards)
    for (let i = 0; i < 5; i++) {
      let name = newCards.slot1[`card${i + 1}`].name;
      htmlCards[i].style.backgroundImage = `url(${stats.links[name]})`;
    }
  }
}

checkPage();
function checkPage() {
  const inventory = document.getElementsByClassName("inventory")[0];
  const navbar = document.getElementsByClassName("card-deck-nav")[0];
  const cardContainer = document.getElementsByClassName("card-container")[0];
  const buttonContainer =
    document.getElementsByClassName("button-container")[0];
  if (page === "cards") {
    inventory.style.display = "none";
    cardContainer.style.display = "block";
    buttonContainer.style.display = "flex";
    htmlOpenCardDeck1.classList.add("active-nav");
    htmlOpenInventory.classList.remove("active-nav");
  } else if (page === "inventory") {
    cardContainer.style.display = "none";
    buttonContainer.style.display = "none";
    inventory.style.display = "block";
    htmlOpenCardDeck1.classList.remove("active-nav");
    htmlOpenInventory.classList.add("active-nav");
  }
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
    if (changeCardSet === false) {
      let cardKeys = Object.keys(activeCards.slot1[this.classList[1]]);
      let cardValues = Object.values(activeCards.slot1[this.classList[1]]);
      for (let integer = 0; integer < cardKeys.length; integer++) {
        cardDetails[cardKeys[integer]] = cardValues[integer];
      }
      console.log(cardDetails);
      localStorage.setItem("detailed card", JSON.stringify(cardDetails));
      window.location.href = "https://nevilstandoff.github.io/MFF-Card-Simulator/cards-details.html";
    } else {
      createCard(nameOfChangingCard, i+1)
      console.log(activeCards)
      localStorage.setItem('cards', JSON.stringify(activeCards))
      localStorage.setItem('slot1', JSON.stringify(cards))
      setActiveCardBackground()
      changeCardSet = false
    }
  });
}
console.log(activeCards)

