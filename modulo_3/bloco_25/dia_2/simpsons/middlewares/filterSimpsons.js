// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const fs = require('fs').promises;

async function filterSimpson(_req, res) {
  const readFile = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(readFile);

  const filterCharacters = data.filter(({ id }) => parseInt(id) != 10 && parseInt(id) != 6);

  await fs.writeFile('./simpsons.json', JSON.stringify(data));
  return res.status(200).json(filterCharacters);
}

module.exports = filterSimpson;
