function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")

  } else(
    rollTheDice()
  )

}

function rollTheDice(){
var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var dices = ["dice1.png", "dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var diceSelection1 = dices[randomNumber1];
var diceSelection2 = dices[randomNumber2];

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",diceSelection1);
image2.setAttribute("src",diceSelection2);

if (randomNumber1 > randomNumber2){ document.querySelector("h1").innerHTML="Player 1 Wins 🚩";}
else if (randomNumber2 > randomNumber1){ document.querySelector("h1").innerHTML="Player 2 Wins 🚩";}
else if (randomNumber1 === randomNumber2){ document.querySelector("h1").innerHTML="Draw!";}
}

document.querySelector("body").onload = checkRefresh();
