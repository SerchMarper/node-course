'use strict';

let userScore = 0;
let conGame = true;
let contVar = true;

const prompt = require('prompt');

function onErr(err) {
    console.log(err);
    return 1;
}

function myDisplayer(score) {
  console.log(score);
}

function continueGame(){ 
let myPromise = new Promise(function(myResolve, myReject) {
    console.log("Choose a number between 1 and 6: ");
    prompt.start();
    var userNum = prompt.get(['number'], function (err, result) {
    if (err) { return onErr(err); }
    });
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  if (typeof userNum === "number" && userNum >= 1 && userNum <= 6) {
    if (userNum == randomNumber){
      userScore += 2;
      myResolve(userScore);
    } else if ((userNum - randomNumber) ** 2 === 1){
      userScore++;
      myResolve(userScore);
    }else{
      myResolve(userScore);
    } 
  }else {
    myReject("You didn't entered a number between 1 and 6");
  }
});

myPromise.then(
  function(value) {
    myDisplayer(value);
  },
  function(error) {myDisplayer(error);}
);
}

continueGame();

while(conGame == true){
console.log("Wanna play again? y/n");
prompt.start();
contVar = prompt.get(['answer'], function (err, result) {
    if (err) { return onErr(err); }
    return result;
});
if(contVar == "y"){
  continueGame();
  } else{
  conGame = false;
  console.log("Game ended.")
  }
}