// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

// let container = document.querySelector('#jokeContainer'); 
//NÃO PODE USAR A VARIÁVEL FORA DO ESCOPO DO FETCH DENTRO DELE

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => 
      document.querySelector('#jokeContainer').innerHTML = data.joke);
};

window.onload = () => fetchJoke();