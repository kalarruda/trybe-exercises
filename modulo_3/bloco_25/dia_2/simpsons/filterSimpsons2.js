const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content));

  const simpsonsFamily = simpsons.filter(({ id }) => [1, 2, 3, 4].includes(id));
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

filterSimpsons();

