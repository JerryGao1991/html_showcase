
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";



document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
  document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins! 🚩";
} else {
  document.getElementsByTagName("h1")[0].textContent = "Draw!";
}

























































