/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let buttonPlaceHolder1 = document.querySelector("#genButton");
  buttonPlaceHolder1.addEventListener("click", generateDeck);
  let buttonPlaceHolder2 = document.querySelector("#shuffleButton");
  buttonPlaceHolder2.addEventListener("click", shuffleBuild);
  //let buttonPlaceHolder3 = document.querySelector("#hitCardButton");
  //buttonPlaceHolder3.addEventListener("click", hitCard);
  //let buttonPlaceHolder4 = document.querySelector("#standCardButton");
  //buttonPlaceHolder4.addEventListener("click", standCard);

  var playerHand = [];
  var dealerHand = [];
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
    var cardSuits = ["spade", "club", "heart", "diamond"];
    var cardNumbers = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "jack",
      "queen",
      "king"
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
  function hitCard() {}
};
