'use strict';

const prompt = require("prompt-sync")({ sigint: true });

let userScore = 0;
let conGame = true;
let contVar = true;

function promptAnswer(promptQuestion) {
    return new Promise(resolve => {
        let result = prompt(promptQuestion);
        console.log("result:" + result);
          resolve(result);
      });
    }

async function asyncCall(asyncQuestion) {
    console.log('calling');
    const result = await promptAnswer(asyncQuestion);
    console.log("Result:" + result);
    return result;
    // expected output: "resolved"
  }

function continueGame(){ 
    var userNum = Number(asyncCall("Choose a number between 1 and 6: "));
    console.log("UserNum: " + userNum);
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  if (typeof userNum === "number" && userNum >= 1 && userNum <= 6) {
    if (userNum == randomNumber){
      userScore += 2;
    } else if ((userNum - randomNumber) ** 2 === 1){
      userScore++;
    }
  }else {
    console.log("You didn't entered a number between 1 and 6");
  }
  console.log(`User score: ${userScore}`);
};

continueGame();

while(conGame == true){
contVar = prompt("Wanna play again? y/n: ");
console.log("ContVar: " + contVar);
if(contVar == "y"){
  continueGame();
  } else{
  conGame = false;
  console.log("Game ended.")
  }
}
