"use strict";

let userScore = 0;
let conGame = true;

function myDisplayer(score) {
  document.getElementById("score").innerHTML = score;
}

function continueGame() {
  let myPromise = new Promise(function (myResolve, myReject) {
    var userNum = parseInt(prompt("Please enter a number from 1 to 6", "1"));
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    if (typeof userNum === "number" && userNum >= 1 && userNum <= 6) {
      if (userNum == randomNumber) {
        userScore += 2;
        myResolve(userScore);
      } else if ((userNum - randomNumber) ** 2 === 1) {
        userScore++;
        myResolve(userScore);
      } else {
        myResolve(userScore);
      }
    } else {
      myReject("You didn't entered a number between 1 and 6");
    }
  });

  myPromise.then(
    function (value) {
      myDisplayer(value);
    },
    function (error) {
      myDisplayer(error);
    }
  );
}

continueGame();

while (conGame == true) {
  if (prompt("Wanna play again? y/n") == "y") {
    continueGame();
  } else {
    conGame = false;
    document.getElementById("end").innerHTML = "Game ended";
  }
}
