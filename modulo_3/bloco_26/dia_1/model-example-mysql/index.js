const express = require('express');
const app = express();

const port = 3000;
const { getAll, findById } = require('./models/Author');
const { getAllBooks, getByAuthorId } = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await findById(id);
  if(!authors) {
    return res.status(404).json({ message: 'id não encontrado' });
  }
  return res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await getByAuthorId(id);
  if(!book) {
    return res.status(404).json({ message: 'id não encontrado' });
  }
  return res.status(200).json(book);
});

app.listen(port, console.log('conected on port 3000'));
