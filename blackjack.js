let cards = [];
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let isAlive = false;
let hasBlackjack = false;
let message = "";

let player = {
    name: "Ahmed",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomNumber() {
    return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Card: "
    
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got the blackjack";
        hasBlackjack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomNumber();
        cards.push(card);
        sum += card;
        renderGame();   
    }
}
