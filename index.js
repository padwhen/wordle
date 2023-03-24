const PORT = 8000
const axios = require("axios").default
const express = require("express")

const app = express()

app.listen(PORT, () => console.log('Server running on port',PORT))


const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
  params: {count: '5', wordLength: '5'},
  headers: {
    'X-RapidAPI-Key': 'def94ef4a5msh866d09c8d3a0343p1ce408jsnf454c6461ca7',
    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});