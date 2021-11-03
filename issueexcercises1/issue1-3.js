"use strict";

const prompt = require("prompt-async"); 
let userScore = 0;
let contVar = true;

async function error_handling_async(question) {
    let result = "";
  try {
    result = prompt.get(question);
  } catch (error) {
    console.error("An error occurred: ", error);
  }
  return result;
}

async function continueGame() {
  console.log("Choose a number between 1 and 6: ");
  let userNum = await error_handling_async("num");
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log("Guessing number: " + randomNumber);
  if (userNum.num >= 1 && userNum.num <= 6) {
    if (userNum.num == randomNumber) {
      userScore += 2;
    } else if ((userNum.num - randomNumber) ** 2 === 1) {
      userScore++;
    }
  } else {
    console.log("You didn't entered a number between 1 and 6");
  }
  console.log(`User score: ${userScore}`);
}

contGame();

async function contGame() {
  await continueGame();
  console.log("Wanna play again? y/n")
  contVar = await error_handling_async("ans");
  if (contVar.ans == "y") {
    contGame();
  } else if (contVar.ans == "n") {
    console.log("Game ended.");
  } else {
      console.log("You entered an invalid answer, exiting...")
  }
}
