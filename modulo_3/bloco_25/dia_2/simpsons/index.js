const fs = require('fs').promises;

async function simpsonsCharacters() {
  fs.readFile('./simpsons.json')
  .then((conteudo) => {
    return JSON.parse(conteudo);
  })
  .then((characters) => {
    return characters.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((texto) => {
    return texto.forEach((conteudo) => console.log(conteudo))
  });
}

simpsonsCharacters();
