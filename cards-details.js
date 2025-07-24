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

let newCardDetails = JSON.parse(localStorage.getItem("detailed card"));
for (let i = 0; i < Object.keys(newCardDetails).length; i++) {
  let cardKey = Object.keys(newCardDetails)[i];
  let cardValue = Object.values(newCardDetails)[i];
  cardDetails[`${cardKey}`] = cardValue;
}

const cardImageLink = stats.links[cardDetails.name];
const HtmlCard = document.getElementById("card");
const htmlCraftStats = document.getElementsByClassName("js-craft-stats");
const htmlColorStats = document.getElementsByClassName("js-color-stats");
const htmlFixedStats = document.getElementsByClassName("js-fixed-stats");
const htmlBonusStats = document.getElementsByClassName("js-bonus-stats");
const htmlCardStars = document.getElementsByClassName("stars");
const htmlChangeCraftStats =
  document.getElementsByClassName("js-change-craft")[0];
const htmlChangeBonusStats =
  document.getElementsByClassName("js-change-bonus")[0];
const htmlCraftStage = document.getElementById("craft-stage");
const selectStars = document.getElementsByClassName("js-select-stars");
const htmlCancelCraft = document.getElementsByClassName('js-cancel-craft')[0];
const htmlSaveStarButton = document.getElementsByClassName(
  "js-star-save-button"
);
const selectStarsContainer = document.getElementsByClassName("select-stars")[0];
const htmlChangecraftStatsFinal = document.getElementsByClassName(
  "js-change-craft-options"
)[0];
let savedStars = [];
htmlCraftStage.textContent = `Craft Stage ${cardDetails.quality}`;

htmlChangeCraftStats.addEventListener("click", function () {
    console.log(cards)
  selectStarsContainer.style.display = "flex";
  document.body.style.overflow = 'hidden'
  document.getElementsByClassName('stats')[0].style.overflow='hidden'
  htmlChangecraftStatsFinal.addEventListener("click", function () {
    let cardOrder;
    for (let i = 0; i < Object.keys(cards).length; i++) {
      if (cards[`card${i + 1}`].name === cardDetails.name)
        cardOrder = `card${i + 1}`;
    }
    craftCard(cards[cardOrder], savedStars);
    console.log(cards[cardOrder])
    for (let i = 0; i < Object.keys(cardDetails).length; i++) {
      let cardDetailsKey = Object.keys(cardDetails)[i];
      cardDetails[`${cardDetailsKey}`] = cards[cardOrder][`${cardDetailsKey}`];
    }
    localStorage.setItem("cards", JSON.stringify(activeCards));
    localStorage.setItem("detailed card", JSON.stringify(cardDetails));
    for (let i = 0; i < newCardDetails.craftStats.length; i++) {
      htmlCraftStats[i].textContent = cardDetails.craftStats[i];
      if (cardDetails.stars[i] === "blue") {
        htmlCardStars[i].classList.add("blue-stat");
        htmlCardStars[i].classList.remove("red-stat");
        htmlCardStars[i].classList.remove("green-stat");

        htmlCraftStats[i].classList.add("blue-stat");
        htmlCraftStats[i].classList.remove("red-stat");
        htmlCraftStats[i].classList.remove("green-stat");
      } else if (cardDetails.stars[i] === "red") {
        htmlCardStars[i].classList.add("red-stat");
        htmlCardStars[i].classList.remove("blue-stat");
        htmlCardStars[i].classList.remove("green-stat");

        htmlCraftStats[i].classList.add("red-stat");
        htmlCraftStats[i].classList.remove("blue-stat");
        htmlCraftStats[i].classList.remove("green-stat");
      } else if (cardDetails.stars[i] === "green") {
        htmlCardStars[i].classList.add("green-stat");
        htmlCardStars[i].classList.remove("red-stat");
        htmlCardStars[i].classList.remove("blue-stat");

        htmlCraftStats[i].classList.add("green-stat");
        htmlCraftStats[i].classList.remove("red-stat");
        htmlCraftStats[i].classList.remove("blue-stat");
      }
    }
    for (let i = 0; i < newCardDetails.craftStats.length; i++) {
      selectStars[i].textContent = cardDetails.craftStats[i];
      selectStars[i].classList.add(`${cardDetails.stars[i]}-select-star`);
      if (cardDetails.stars[i] === "blue") {
        selectStars[i].classList.remove(`red-select-star`);
        selectStars[i].classList.remove(`green-select-star`);
      } else if (cardDetails.stars[i] === "green") {
        {
          selectStars[i].classList.remove(`red-select-star`);
          selectStars[i].classList.remove(`blue-select-star`);
        }
      } else if (cardDetails.stars[i] === "red") {
        {
          selectStars[i].classList.remove(`green-select-star`);
          selectStars[i].classList.remove(`blue-select-star`);
        }
      }
    }
  });
  htmlCancelCraft.addEventListener('click', function(){
  selectStarsContainer.style.display = "none";
  document.body.style.overflow = 'visible'
  document.getElementsByClassName('stats')[0].style.overflow='scroll'
  })
});

htmlChangeBonusStats.addEventListener("click", function () {
  let cardOrder;
  for (let i = 0; i < Object.keys(cards).length; i++) {
    if (cards[`card${i + 1}`].name === cardDetails.name)
      cardOrder = `card${i + 1}`;
  }
  rerollCard(cards[cardOrder]);
  for (let i = 0; i < Object.keys(cardDetails).length; i++) {
    let cardDetailsKey = Object.keys(cardDetails)[i];
    cardDetails[`${cardDetailsKey}`] = cards[cardOrder][`${cardDetailsKey}`];
  }
  for (let i = 0; i < htmlBonusStats.length; i++) {
    htmlBonusStats[i].textContent = cardDetails.bonusStats[i];
  }
  htmlCraftStage.textContent = `Craft Stage ${cardDetails.quality}`;
  localStorage.setItem("cards", JSON.stringify(activeCards));
  localStorage.setItem("detailed card", JSON.stringify(cardDetails));
});

for (let i = 0; i < htmlFixedStats.length; i++) {
  htmlFixedStats[i].textContent = cardDetails.fixedStats[i];
}
for (let i = 0; i < htmlBonusStats.length; i++) {
  htmlBonusStats[i].textContent = cardDetails.bonusStats[i];
}
for (let i = 0; i < newCardDetails.craftStats.length; i++) {
  htmlCraftStats[i].textContent = cardDetails.craftStats[i];
  if (cardDetails.stars[i] === "blue") {
    htmlCardStars[i].classList.add("blue-stat");
    htmlCardStars[i].classList.remove("red-stat");
    htmlCardStars[i].classList.remove("green-stat");

    htmlCraftStats[i].classList.add("blue-stat");
    htmlCraftStats[i].classList.remove("red-stat");
    htmlCraftStats[i].classList.remove("green-stat");
  } else if (cardDetails.stars[i] === "red") {
    htmlCardStars[i].classList.add("red-stat");
    htmlCardStars[i].classList.remove("blue-stat");
    htmlCardStars[i].classList.remove("green-stat");

    htmlCraftStats[i].classList.add("red-stat");
    htmlCraftStats[i].classList.remove("blue-stat");
    htmlCraftStats[i].classList.remove("green-stat");
  } else if (cardDetails.stars[i] === "green") {
    htmlCardStars[i].classList.add("green-stat");
    htmlCardStars[i].classList.remove("red-stat");
    htmlCardStars[i].classList.remove("blue-stat");

    htmlCraftStats[i].classList.add("green-stat");
    htmlCraftStats[i].classList.remove("red-stat");
    htmlCraftStats[i].classList.remove("blue-stat");
  }
}

for (let i = 0; i < newCardDetails.craftStats.length; i++) {
  selectStars[i].textContent = cardDetails.craftStats[i];
  selectStars[i].classList.add(`${cardDetails.stars[i]}-select-star`);
  if (cardDetails.stars[i] === "blue") {
    selectStars[i].classList.remove(`red-select-star`);
    selectStars[i].classList.remove(`green-select-star`);
  } else if (cardDetails.stars[i] === "green") {
    {
      selectStars[i].classList.remove(`red-select-star`);
      selectStars[i].classList.remove(`blue-select-star`);
    }
  } else if (cardDetails.stars[i] === "red") {
    {
      selectStars[i].classList.remove(`green-select-star`);
      selectStars[i].classList.remove(`blue-select-star`);
    }
  }
}

for (let i = 0; i < newCardDetails.craftStats.length; i++) {
  htmlSaveStarButton[i].addEventListener("click", function () {
    if (CheckIfContains(savedStars, i + 1)) {
      savedStars.splice(savedStars.indexOf(i + 1), 1);
      this.classList.remove("selected");
      this.textContent = "SELECT";
    } else {
      savedStars.push(i + 1);
      this.classList.add("selected");
      this.textContent = "CANCEL";
    }
  });
}

function CheckIfContains(array, par) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === par) {
      return true;
    }
  }
  return false;
}

HtmlCard.style.backgroundImage = `url(${cardImageLink})`;
