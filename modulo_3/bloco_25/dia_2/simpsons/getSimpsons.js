const fs = require('fs').promises;

async function getSimpsons(id) {
  const simpsons = fs.readFile('./simpsons.json')
  .then((characters) => JSON.parse(characters));

  const findSimpsons = simpsons.find((character) => character.id === id);

  if(!findSimpsons) {
    throw new Error('id não encontrado');
  }
  return findSimpsons;
}