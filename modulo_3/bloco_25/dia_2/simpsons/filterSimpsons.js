const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json')
  .then((content) => JSON.parse(content));
  const arrayList = simpsons.filter(({ id }) => id !== '6' && id !== '10');

  await fs.writeFile('./simpsons', JSON.stringify(arrayList))
}

filterSimpsons()