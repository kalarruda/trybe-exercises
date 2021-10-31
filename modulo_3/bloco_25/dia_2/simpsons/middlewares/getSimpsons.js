// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const fs = require('fs').promises;

async function getSimpsons(_req, res){
  const readFile = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(readFile);
  const characters = data.map(({ id, name }) => `${id} - ${name}`);
  return res.status(200).json(`${characters}`);
};

module.exports = getSimpsons;
