// console.log("Up and running!");
// console.log("User flipped " + cardOne);
let cards = ["queen", "queen", "king", "king"]
let cardsInPlay = []
var cardOne = cards[0]
cardsInPlay.push(cardOne)
console.log("User flipped queen")
let cardTwo = cards[2]
cardsInPlay.push(cardTwo)
console.log("User flipped king")
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("you found a match")
      } else {
        alert("please try again")
      }
}
   
