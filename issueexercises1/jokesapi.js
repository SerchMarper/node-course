"use strict";

const axios = require("axios").default;
const fs = require("fs");
const prompt = require("prompt-async");
const tellDadJokesUrl = "https://icanhazdadjoke.com/";
let searchTerm = "";

async function promptTerm() {
  console.log("Enter a search Term: ");
  const input = await prompt.get("term");
  searchTerm = input.term;
}

const getjoke = async () => {
  await promptTerm();
  try {
    const response = await axios.get(
      tellDadJokesUrl + `search?term=${searchTerm}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "axios 0.21.1",
        },
      }
    );
    for (let i = 0; response.data.results.length > i; i++) {
      console.log(`Joke #${i}: `, response.data.results[i].joke);
      fs.appendFile(
        "jokes.txt",
        response.data.results[i].joke + `\n`,
        function (err) {
          if (err) throw err;
        }
      );
    }
    console.log("Saved!");
  } catch (err) {
    console.log("received error: ", err.toJSON());
    fs.appendFile(
      "jokes.txt",
      "No jokes were found for that search term",
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  }
};

getjoke();
