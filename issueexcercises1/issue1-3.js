"use strict";

const prompt = require("prompt-async"); //({ sigint: true });

let userScore = 0;
let conGame = true;
let contVar = true;

/*function promptAnswer(promptQuestion) {
  return new Promise((resolve) => {
    let result = prompt(promptQuestion);
    console.log("result:" + result);
    resolve(result);
  });
}*/

async function asyncCall(asyncQuestion) {
  prompt.start();
  console.log("calling");
  const result = await prompt.get(asyncQuestion);
  console.log("Result:" + result);
  return result;
  // expected output: "resolved"
}

async function error_handling_async(question) {
  try {
    await asyncCall(question);
  } catch (error) {
    console.error("An error occurred: ", error);
  }
}

function continueGame() {
  var userNum = Number(error_handling_async("Choose a number between 1 and 6: "));
  console.log("UserNum: " + userNum);
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  if (typeof userNum === "number" && userNum >= 1 && userNum <= 6) {
    if (userNum == randomNumber) {
      userScore += 2;
    } else if ((userNum - randomNumber) ** 2 === 1) {
      userScore++;
    }
  } else {
    console.log("You didn't entered a number between 1 and 6");
  }
  console.log(`User score: ${userScore}`);
}

continueGame();

while (conGame == true) {
  contVar = error_handling_async("Wanna play again? y/n: ");
  console.log("ContVar: " + contVar);
  if (contVar == "y") {
    continueGame();
  } else {
    conGame = false;
    console.log("Game ended.");
  }
}
