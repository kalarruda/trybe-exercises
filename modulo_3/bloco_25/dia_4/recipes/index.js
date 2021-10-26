const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// ======== drink ===================================================

app.get('/drinks', function(_req, res) {
  res.json(drinks);
});

app.get('/drinks/search', function(req, res) {
  const { name } = req.query;
  const filterDrinks = drinks.filter((d) => d.name.includes(name))
  res.status(200).json(filterDrinks);
});

app.get('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Bebida não encontrada!' });

  res.status(200).json(drink);
});


// ======== recipes ===================================================
app.get('/recipes', function (_req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

fetch('http://localhost:3001/recipes/', {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com frango',
    price: 30,
  })
})

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/recipes/search', function(req, res) {
  const { name, maxPrice } = req.query;
  const filterRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filterRecipes);
});

app.get('/recipes/:idParamtro', function (req, res) {
  const { idParamtro } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(idParamtro));

  if (!recipe) return res.status(404).json({ message: 'Receita não encontrada!'});

  res.status(200).json(recipe); // o que esse .json faz? ele transforma o json em javascript na tela?
});
