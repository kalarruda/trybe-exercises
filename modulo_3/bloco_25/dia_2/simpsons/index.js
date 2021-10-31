const express = require('express');
const app = express();
const getSimpsons = require('./middlewares/getSimpsons');
const findSimpsons = require('./middlewares/findCharacter');

app.get('/simpsons', getSimpsons);
app.get('/simpsons/:id', findSimpsons);

app.listen(3000, () => {
  console.log('Online');
});

// const fs = require('fs').promises;

// async function simpsonsCharacters() {
//   fs.readFile('./simpsons.json')
//   .then((conteudo) => {
//     return JSON.parse(conteudo);
//   })
//   .then((characters) => {
//     return characters.map(({ id, name }) => `${id} - ${name}`);
//   })
//   .then((texto) => {
//     return texto.forEach((conteudo) => console.log(conteudo))
//   });
// }

// simpsonsCharacters();
