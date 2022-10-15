var D1 = Math.floor(Math.random() * 6) + 1; //Random Number For Dice One
var D2 = Math.floor(Math.random() * 6) + 1;  //Random Number For Dice Two 
// console.log(randomNumber);
var randomDiceOne = "images/dice" + D1 + ".png";//random dice generator from dice1 to dice6
var randomDiceTwo = "images/dice" + D2 + ".png";//random dice generator from dice1 to dice6
document.querySelector(".img1").setAttribute("src", randomDiceOne);
document.querySelector(".img2").setAttribute("src", randomDiceTwo);

if (D1 < D2) {
    document.querySelector("h1").innerHTML="🥳 player Two Wins !!"
}
else if (D1 > D2) {
    document.querySelector("h1").innerHTML="🥳 player One Wins !!"
}
else if (D1 == D2) {
    document.querySelector("h1").innerHTML="🙂 Draw !!"
}
