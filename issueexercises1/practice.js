const prompt = require("prompt-sync")({ sigint: true });

function promptCall() {
  let result = prompt("Input a number between 1 and 6: ");
  return result;
}

console.log(promptCall());
