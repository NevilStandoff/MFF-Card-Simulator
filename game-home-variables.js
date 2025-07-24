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
    "guardians of the galaxy": [
      "MAX HP",
      "ALL BASIC ATTACKS INCREASE",
      "ATTACK SPEED",
    ],
    "new avengers": ["IGNORE DEFENSE", "MAX HP", "CRITICAL DAMAGE"],
    "marvel zombies return": [
      "ALL BASIC ATTACKS INCREASE",
      "MAX HP",
      "IGNORE DODGE",
    ],
    "what if? ghost rider": [
      "ENERGY ATTACK",
      "PHYSICAL ATTACK",
      "ALL BASIC DEFENSES INCREASE",
    ],
    "all new, all different new avengers": [
      "PHYSICAL ATTACK",
      "ENERGY ATTACK",
      "ALL BASIC ATTACKS INCREASE",
    ],
    "amazing spider-man": [
      "ALL BASIC ATTACKS INCREASE",
      "IGNORE DEFENSE",
      "ATTACK SPEED",
    ],
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
    "marvel zombies return": [
      [
        "ALL BASIC DEFENSES INCREASE",
        "FIRE RESIST",
        "ENERGY DEFENSE",
        "PHYSICAL ATTACK",
        "MAX HP PROC",
      ],
      [
        "ATTACK SPEED",
        "ENERGY ATTACK",
        "DODGE",
        "LIGHTNING RESIST",
        "MIND RESIST",
      ],
      [
        "CROWD CONTROL TIME",
        "COLD RESIST",
        "CRITICAL RATE",
        "RECOVERY RATE",
        "PHYSICAL DEFENSE",
      ],
    ],
    "what if? ghost rider": [
      [
        "ATTACK SPEED",
        "PHYSICAL DEFENSE",
        "ENERGY DEFENSE",
        "POISON RESIST",
        "ALL BASIC ATTACKS PROC",
      ],
      [
        "CRITICAL RATE",
        "RECOVERY RATE",
        "CROWD CONTROL TIME",
        "CRITICAL DAMAGE",
        "COLD RESIST",
      ],
      [
        "MOVEMENT SPEED",
        "IGNORE DEFENSE",
        "DODGE",
        "COOLDOWN DURATION",
        "LIGHTNING RESIST",
      ],
    ],
    "all new, all different new avengers": [
      [
        "ATTACK SPEED",
        "MOVEMENT SPEED",
        "LIGHTNING RESIST",
        "CRITICAL DAMAGE",
        "ALL BASIC DEFENSES PROC",
      ],
      [
        "ENERGY DEFENSE",
        "MAX HP",
        "PHYSICAL DEFENSE",
        "RECOVERY RATE",
        "MIND RESIST",
      ],
      [
        "IGNORE DEFENSE",
        "DODGE",
        "FIRE RESIST",
        "CRITICAL RATE",
        "POISON RESIST",
      ],
    ],
    "amazing spider-man": [
      [
        "ALL BASIC DEFENSES",
        "CRITICAL RATE",
        "LIGHTNING RESIST",
        "ENERGY ATTACK",
        "CROWD CONTROL TIME PROC",
      ],
      [
        "PHYSICAL ATTACK",
        "COOLDOWN DURATION",
        "RECOVERY RATE",
        "MIND RESIST",
        "COLD RESIST",
      ],
      ["CRITICAL DAMAGE", "MAX HP", "FIRE RESIST", "DODGE", "ENERGY DEFENSE"],
    ],
  },
  links: {
    "luna snow": "https://thanosvibs.money/static/cards/lunasnow.png",
    crescent: "https://thanosvibs.money/static/cards/crescent.png",
    "white fox": "https://thanosvibs.money/static/cards/whitefox.png",
    "guardians of the galaxy": "https://thanosvibs.money/static/cards/bse.png",
    "new avengers": "https://thanosvibs.money/static/cards/newavengers.png",
    "marvel zombies return":
      "https://thanosvibs.money/static/cards/mzr_spidey.png",
    "what if? ghost rider": "https://thanosvibs.money/static/cards/whifgr.png",
    "all new, all different new avengers":
      "https://thanosvibs.money/static/cards/anadavengers.png",
    "amazing spider-man":
      "https://thanosvibs.money/static/cards/babyspidey.png",
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

if (JSON.parse(localStorage.getItem("slot1"))) {
  cards = JSON.parse(localStorage.getItem("slot1"));
} else {
  createCard("luna snow", 5);
  createCard("crescent", 2);
  createCard("guardians of the galaxy", 4);
  createCard("new avengers", 3);
  createCard("marvel zombies return", 1);
  for (let i = 0; i < Object.keys(cards).length; i++) {
    craftCard(cards[`card${i + 1}`], []);
  }
  localStorage.setItem('slot1', JSON.stringify(cards))
}

const activeCards = {
  slot1: cards,
  slot2: false,
};

if (JSON.parse(localStorage.getItem("cards"))) {
  for (
    let i = 0;
    i < Object.keys(JSON.parse(localStorage.getItem("cards")).slot1).length;
    i++
  ) {
    let newCards = JSON.parse(localStorage.getItem("cards")).slot1;
    // console.log(Object.values(newCards)[i])
    let cardNumber = `card${i + 1}`;
    for (let integer = 0; integer < 5; integer++) {
      // let cardKey = Object.keys(cards[cardNumber])[integer];
      // cards[cardNumber][cardKey] = Object.values(card)[integer];
      // console.log(cards)
    }
  }
}

function createCard(cardName, order) {
  if (checkIfSetContains(cardName) === false) {
    cardName = cardName.toLowerCase();
    cards[`card${order}`] = {
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
  localStorage.setItem("slot1", JSON.stringify(cards));
}

function checkIfSetContains(cardName) {
  for (let i = 0; i < Object.keys(cards).length; i++) {
    if (Object.values(cards)[i].name === cardName) {
      return true;
    }
  }
  return false;
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
  card.quality = generateQuality();
  localStorage.setItem("slot1", JSON.stringify(cards));
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
      card.stars[i] = stats.stars[generateRandomNumber(0, 2)];
    }
  }
  localStorage.setItem("slot1", JSON.stringify(cards));
}

let cardDetails = {};

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
