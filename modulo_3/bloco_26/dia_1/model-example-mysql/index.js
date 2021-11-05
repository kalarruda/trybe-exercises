const express = require('express');
const app = express();

const port = 3000;
const {getAll} = require('./models/Author');

app.get('/authors', async (_req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
});

app.listen(port, console.log('conected on port 3000'));
