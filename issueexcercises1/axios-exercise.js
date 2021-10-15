"use strict";

const axios = require('axios').default;

async function getData() {
  try {
    const response = await axios.get(
      "https://restcountries.eu/rest/v2/alpha/col"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getData();
