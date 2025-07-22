const stats = {
  craftStats: [
    [
      "DODGE",
      "RECOVERY RATE",
      "CROWD CONTROL TIME",
      "POISON RESIST",
      "COLD RESIST",
    ],
    [
      "MAX HP",
      "ENERGY DEFENSE",
      "MOVEMENT SPEED",
      "LIGHTNNG RESIST",
      "MIND RESIST",
    ],
    [
      "IGNORE DEFENSE",
      "PHYSICAL DEFENSE",
      "LIGHTNING RESIST",
      "FIRE RESIST",
      "CROWD CONTROL TIME",
    ],
    [
      "CRITICAL DAMAGE",
      "ALL BASIC DEFENSES INCREASE",
      "MOVEMENT SPEED",
      "FIRE RESIST",
      "MIND RESIST",
    ],
    [
      "ATTACK SPEED",
      "COOLDOWN DURATION",
      "CRITICAL RATE",
      "COLD RESIST",
      "POISON RESIST",
    ],
    [
      "ENERGY ATTACK INCREASE",
      "PHYSICAL ATTACK INCREASE",
      "ALL BASIC ATTACK INCREASE",
      "COLD RESIST",
      "MIND RESIST",
    ],
  ],
  fixedStats: {
    "luna snow": [
      "ENERGY ATTACK INCREASE",
      "ALL BASIC ATTACK INCREAE",
      "CRITICAL RATE",
    ],
    crescent: [
      "ALL BASIC ATTACKS INCREASE",
      "ALL BASIC DEFENSES INCREASE",
      "MAX HP",
    ],
    "white fox": [
      "ALL BASIC ATTACK INCRESE",
      "IGNORE DEFENSE",
      "CRITICAL DAMAGE",
    ],
    "guardians of the galaxy": ["MAX HP", "ALL BASIC ATTACKS INCREASE", "ATTACK SPEED"],
    "new avengers": ["IGNORE DEFENSE", "MAX HP", "CRITICAL DAMAGE"],
  },
  bonusStats: {
    "luna snow": [
      [
        "IGNORE DEFENSE",
        "PHYSICAL ATTACK INCREASE",
        "COOLDOWN DURATION",
        "COLD RESIST",
        "ENERGY ATTACK PROC",
      ],
      [
        "FIRE RESIST",
        "CRITICAL DAMAGE",
        "MAX HP",
        "ATTACK SPEED",
        "LIGHTNING SPEED",
      ],
      [
        "MOVEMENT SPEED",
        "PHYSICAL DEFENSE",
        "ALL BASIC DEFENSES INCREASE",
        "MIND RESIST",
        "RECOVERY RATE",
      ],
    ],
    crescent: [
      [
        "RECOVERY RATE",
        "IGNORE DEFENSE",
        "ATTACK SPEED",
        "FIRE RESIST",
        "IGNORE DEFENSE PROC",
      ],
      [
        "ENERGY DEFENSE",
        "PHYSICAL DEFENSE",
        "CRITICAL DAMAGE",
        "CRITICAL RATE",
        "COLD RESIST",
      ],
      [
        "DEBUFF DURATION",
        "LIGHTNING RESIST",
        "ENERGY ATTACK",
        "PHYSICAL ATTACK",
        "DODGE",
      ],
    ],
    "white fox": [
      [
        "ALL BASIC DEFENSES INCREASE",
        "MOVEMENT SPEED",
        "ATTACK SPEED",
        "FIRE RESIST",
        "PHYSICAL ATTACK PROC",
      ],
      [
        "CRITICAL RATE",
        "LIGHTNING RESIST",
        "PHYSICAL DEFENSE",
        "DODGE",
        "RECOVERY RATE",
      ],
      [
        "MAX HP",
        "PHYSICAL ATTACK",
        "ENERGY ATTACK",
        "ENERGY DEFENSE",
        "CROWD CONTROL TIME",
      ],
    ],
    "guardians of the galaxy": [
      [
        "CRITICAL DAMAGE",
        "CRITICAL RATE",
        "COOLDOWN DURATION",
        "FIRE RESIST",
        "MOVEMENT SPEED PROC",
      ],
      [
        "ENERGY ATTACK",
        "ENERGY DEFENSE",
        "IGNORE DEFENSE",
        "DODGE",
        "MIND RESIST",
      ],
      [
        "PHYSICAL ATTACK",
        "ALL BASIC DEFENSES INCREASE",
        "PHYSICAL DEFENSE",
        "CROWD CONTROL TIME",
        "LIGHTNING RESIST",
      ],
    ],
    "new avengers": [
      [
        "ALL BASIC DEFENSES INCREASE",
        "PHYSICAL DEFENSE",
        "CROWD CONTROL TIME",
        "CRITICAL RATE",
        "MAX HP PROC",
      ],
      [
        "ENERGY ATTACK",
        "LIGHTNING RESIST",
        "FIRE RESIST",
        "ALL BASIC ATTACKS INCREASE",
        "DODGE",
      ],
      [
        "COLD RESIST",
        "MIND RESIST",
        "ENERGY DEFENSE",
        "COOLDOWN DURATION",
        "ATTACK SPEED",
      ],
    ],
  },
  links: {
    "luna snow": "https://thanosvibs.money/static/cards/lunasnow.png",
    crescent: "https://thanosvibs.money/static/cards/crescent.png",
    "white fox": "https://thanosvibs.money/static/cards/whitefox.png",
    "guardians of the galaxy": "https://thanosvibs.money/static/cards/bse.png",
    "new avengers": "https://thanosvibs.money/static/cards/newavengers.png",
  },
  stars: ["blue", "green", "red"],
};

let card1 = {
  fixedStats: [
    stats.fixedStats["luna snow"][0],
    stats.fixedStats["luna snow"][1],
    stats.fixedStats["luna snow"][2],
  ],
  craftStats: [],
  bonusStats: [
    stats.bonusStats["luna snow"][0][generateRandomNumber(0, 4)],
    stats.bonusStats["luna snow"][0][generateRandomNumber(0, 4)],
    stats.bonusStats["luna snow"][0][generateRandomNumber(0, 4)],
  ],
  stars: [
    stats.stars[generateRandomNumber(0, 2)],
    stats.stars[generateRandomNumber(0, 2)],
    stats.stars[generateRandomNumber(0, 2)],
    stats.stars[generateRandomNumber(0, 2)],
    stats.stars[generateRandomNumber(0, 2)],
    stats.stars[generateRandomNumber(0, 2)],
  ],
  quality: generateQuality(),
};

let cards = {};


const activeCards = {
  slot1: cards,
  slot2: false,
};

createCard("luna snow");
createCard("crescent");
createCard("white fox");
createCard("guardians of the galaxy");
createCard("new avengers");

if(JSON.parse(localStorage.getItem("cards"))){
    for(let i = 0;i < Object.keys(JSON.parse(localStorage.getItem("cards")).slot1).length;i++){
        let card = JSON.parse(localStorage.getItem("cards")).slot1[`card${i + 1}`]
        let cardNumber = `card${i + 1}`
       for(let integer = 0; integer < Object.keys(card).length; integer++){
        let cardKey = Object.keys(cards[cardNumber])[integer]
        cards[cardNumber][cardKey] = Object.values(card)[integer]
       }
    }
}


// for(let i = 0; i < Object.keys(cards).length;i++){
//   craftCard(cards[`card${i + 1}`], [])
//   // console.log(cards[`card${i + 1}`])
// }


function createCard(cardName) {
  if (Object.keys(cards).length <= 5) {
    cardName = cardName.toLowerCase();
    cards[`card${Object.keys(cards).length + 1}`] = {
      fixedStats: [
        stats.fixedStats[`${cardName}`][0],
        stats.fixedStats[`${cardName}`][1],
        stats.fixedStats[`${cardName}`][2],
      ],
      craftStats: [
        stats.craftStats[0][generateRandomNumber(0, 4)],
        stats.craftStats[1][generateRandomNumber(0, 4)],
        stats.craftStats[2][generateRandomNumber(0, 4)],
        stats.craftStats[3][generateRandomNumber(0, 4)],
        stats.craftStats[4][generateRandomNumber(0, 4)],
        stats.craftStats[5][generateRandomNumber(0, 4)],
      ],
      bonusStats: [
        stats.bonusStats[`${cardName}`][0][generateRandomNumber(0, 4)],
        stats.bonusStats[`${cardName}`][1][generateRandomNumber(0, 4)],
        stats.bonusStats[`${cardName}`][2][generateRandomNumber(0, 4)],
      ],
      stars: [
        stats.stars[generateRandomNumber(0, 2)],
        stats.stars[generateRandomNumber(0, 2)],
        stats.stars[generateRandomNumber(0, 2)],
        stats.stars[generateRandomNumber(0, 2)],
        stats.stars[generateRandomNumber(0, 2)],
        stats.stars[generateRandomNumber(0, 2)],
      ],
      quality: generateQuality(),
      name: cardName,
    };
  }
}

function generateRandomNumber(start, end) {
  let number = Math.ceil(Math.random() * (end - start + 1) + start - 1);
  return number;
}

function generateQuality() {
  let number = generateRandomNumber(1, 100);
  if ((number >= 1) & (number <= 10)) {
    return 1;
  } else if ((number >= 11) & (number <= 30)) {
    return 2;
  } else if ((number >= 31) & (number <= 58)) {
    return 3;
  } else if ((number >= 59) & (number <= 83)) {
    return 4;
  } else if ((number >= 84) & (number <= 93)) {
    return 5;
  } else if ((number >= 94) & (number <= 98)) {
    return 6;
  } else if ((number >= 99) & (number <= 100)) {
    return 7;
  }
}

function rerollCard(card) {
  card.bonusStats[0] =
    stats.bonusStats[card.name][0][generateRandomNumber(0, 4)];
  card.bonusStats[1] =
    stats.bonusStats[card.name][1][generateRandomNumber(0, 4)];
  card.bonusStats[2] =
    stats.bonusStats[card.name][2][generateRandomNumber(0, 4)];
  card.quality = generateQuality()
  return card;
}

function craftCard(card, savedStats) {
  let reroll = true;
  for (let i = 0; i < 6; i++) {
    for (let integer = 0; integer < savedStats.length; integer++) {
      if (i + 1 === savedStats[integer]) {
        reroll = false;
        break;
      } else {
        reroll = true;
      }
    } 
    if (reroll === true) {
      card.craftStats[i] = stats.craftStats[i][generateRandomNumber(0, 4)];
      card.stars[i] = stats.stars[generateRandomNumber(0, 2)]
    }
  }
}

let cardDetails = {
};

// if(!cardDetails){
//   console.log(cardDetails)
//   cardDetails = activeCards.slot1["card2"]
// }



localStorage.setItem("cards", JSON.stringify(activeCards));
// localStorage.clear()
export {
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
};

