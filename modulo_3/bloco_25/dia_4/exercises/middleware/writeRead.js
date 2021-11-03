const fs = require('fs').promises;

async function readSimpsons() {
  const readFile = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(readFile);
  return data;
}

async function writeSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { readSimpsons, writeSimpsons }
