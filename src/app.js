/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let buttonPlaceHolder1 = document.querySelector("#genButton");
  buttonPlaceHolder1.addEventListener("click", generateDeck);
  let buttonPlaceHolder2 = document.querySelector("#shuffleButton");
  buttonPlaceHolder2.addEventListener("click", shuffleBuild);
  let buttonPlaceHolder3 = document.querySelector("#generateHand");
  buttonPlaceHolder3.addEventListener("click", dealHands);
  //let buttonPlaceHolder4 = document.querySelector("#standCardButton");
  //buttonPlaceHolder4.addEventListener("click", standCard);
  //let buttonPlaceHolder5 = document.querySelector("#standCardButton");
  //buttonPlaceHolder5.addEventListener("click", standCard);

  let playerHand = [];
  let dealerHand = [];
  var backAccount = [];
  var cards = [];
  var shuffledDeck = [];
  var deckOfCards = [];

  function shuffleBuild() {
    var a = cards.length,
      b,
      c;
    while (a) {
      c = Math.floor(Math.random() * a--);
      b = cards[a];
      cards[a] = cards[c];
      cards[c] = b;
    }
    shuffledDeck = cards;
    console.log(shuffledDeck);
  }
  function generateDeck() {
    var cardSuits = ["spades", "clubs", "hearts", "diams"];
    var cardNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    if (deckOfCards.length == 0) {
      for (var a = 0; a < cardSuits.length; a++) {
        for (var b = 0; b < cardNumbers.length; b++) {
          const cardSuitsX = cardSuits[a];
          const cardNumbersX = cardNumbers[b];
          deckOfCards.push({ cardSuitsX, cardNumbersX });
        }
      }
      cards = deckOfCards;
      console.log(cards);
    }
  }
  function updatePlayerCard1() {
    document.querySelector(".playerCard1Suit").innerHTML =
      "&" + playerHand[0].cardSuitsX + ";";
    document.querySelector(".playerCard1Rank").innerHTML =
      playerHand[0].cardNumbersX;
  }
  function updatePlayerCard2() {
    document.querySelector(".playerCard2Suit").innerHTML =
      "&" + playerHand[1].cardSuitsX + ";";
    document.querySelector(".playerCard2Rank").innerHTML =
      playerHand[1].cardNumbersX;
  }
  function updateDealerCard1() {
    document.querySelector(".dealerCard1Suit").innerHTML =
      "&" + dealerHand[0].cardSuitsX + ";";
    document.querySelector(".dealerCard1Rank").innerHTML =
      dealerHand[0].cardNumbersX;
  }
  function updateDealerCard2() {
    document.querySelector(".dealerCard2Suit").innerHTML =
      "&" + dealerHand[1].cardSuitsX + ";";
    document.querySelector(".dealerCard2Rank").innerHTML =
      dealerHand[1].cardNumbersX;
  }
  function dealHands() {
    while (playerHand.length < 2) {
      var x = shuffledDeck.pop();
      playerHand.push(x);
    }
    while (dealerHand.length < 2) {
      var x = shuffledDeck.pop();
      dealerHand.push(x);
    }
    updateDealerCard1();
    updateDealerCard2();
    updatePlayerCard1();
    updatePlayerCard2();
    console.log(playerHand);
    console.log(dealerHand);
    console.log(shuffledDeck);
  }
};
