const express = require('express');
const app = express();

const port = 3001;
const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.listen(port, console.log('conected on port 3000'));
