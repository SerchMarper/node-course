"use strict";

const prompt = require("prompt-async"); //({ sigint: true });

let userScore = 0;
let conGame = true;
let contVar;

/*function promptAnswer(promptQuestion) {
  return new Promise((resolve) => {
    let result = prompt(promptQuestion);
    console.log("result:" + result);
    resolve(result);
  });
}*/

// async function asyncCall(asyncQuestion) {
//   prompt.start();
//   console.log("calling");
//   const result = await prompt.get(asyncQuestion);
//   console.log("Result:" + result);
//   return result;
//   // expected output: "resolved"
// }

// async function error_handling_async(question) {
//   try {
//     await asyncCall(question);
//   } catch (error) {
// console.error("An error occurred: ", error);
//   }
// }

async function continueGame() {
  console.log("Enter a number between 1 and 6: ");
  const input = await prompt.get("number");
  const userNum = Number(input.number);
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log('Random number', randomNumber)
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
  //module.exports(userScore);
}

async function continueLoop() {
  await continueGame();
  console.log("Wanna play again? y/n");
  contVar = await prompt.get("answer");
  if (contVar.answer == "y") {
    await continueLoop();
  } else if (contVar.answer == "n") {
    conGame = false;
    console.log("Game ended.");
  } else {
    console.log("Didn't entered a valid answer");
  }
}

continueLoop();
