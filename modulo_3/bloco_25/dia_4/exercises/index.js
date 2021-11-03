const express = require('express');
const app = express();
const fs = require('fs').promises;

const rescue = require('express-rescue');
const { writeSimpsons, readSimpsons } = require('./middleware/writeRead');

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.get('/ping', (req, res) => {
  const { nome } = req.body; 
  res.status(200).json({ message: `${nome}` });
});


app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello ${name}` });
});
// não sei porque não funcionou no insomnia

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(parseInt(age, 10) > 17) {
    res.status(200).json({ message: `Hello, ${name}!`})
  }
  res.status(401).json({ message: `Unauthorized` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});


// Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await readSimpsons();

  res.status(200).json(simpsons);
}));

// Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

app.get('/simpsons/:id', rescue( async (req, res) => {
  const { id } = req.params;
  const simpsons = await readSimpsons();
  const findSimpson = simpsons.find((s) => s.id === id);
  console.log(findSimpson)
  if (!findSimpson) { // se esse simpson não existir
    return res.status(404).json({ message: 'simpson not found!!' });
  }
  return res.status(200).json(findSimpson);
}));

// Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();

// app.post('/simpsons', rescue( async (req, res) => {
//   const { id, name } = req.body;
//   const simpsons = await readSimpsons();

//   const findSimpson = simpsons.find((s) => s.id === id);
//   console.log(findSimpson)
//   if (findSimpson) {
//     return res.status(409).json({ message: 'id already exists' });
//   }
//   simpsons.push({ id, name });

//   await writeSimpsons(simpsons);

//   return res.status(204).json({ message: 'personagem adicionado!' });

// }));

/// =================================

app.post('/simpsons', rescue( async (req, res) => {
  const { id, name } = req.body;
  const readFile = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(readFile);

  const findSimpson = data.find((s) => s.id === id);
  if (findSimpson) {
    return res.status(409).json({ message: 'id already exists' });
  }

  await fs.writeFile('./simpsons.json', JSON.stringify(findSimpson))

  return res.status(204).json({ message: 'personagem adicionado!' });

}));


app.listen(3000, console.log('usando a porta 3000'));

