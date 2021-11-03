"use strict";

const axios = require('axios').default;

async function getData() {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=London" //Agregar &appid={API Key} al final para extraer info.
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getData();

// function makeGetRequest(path) {
// 	axios.get(path).then(
// 		(response) => {
// 			var result = response.data;
// 			console.log(result);
// 		},
// 		(error) => {
// 			console.log(error);
// 		}
// 	);
// }
// makeGetRequest('http://bit.ly/2mTM3nY');
