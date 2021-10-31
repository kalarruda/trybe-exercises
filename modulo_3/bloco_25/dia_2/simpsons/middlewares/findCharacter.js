// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const fs = require('fs').promises;
 
async function findSimpsons(req, res) {
  const { id } = req.params;
  const readFile = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(readFile);

  const findCharacter = data.find((s) => parseInt(s.id) === parseInt(id, 10));
  if(!findCharacter) {
    return res.status(404).json({ message: 'personagem não encontrado' });
  }
  return res.status(200).json(findCharacter);
};

module.exports = findSimpsons;
