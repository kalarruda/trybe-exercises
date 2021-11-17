// const express = require('express');
// const router = express.Router(); // OU PODE USAR ESSA CHAMADA DE BAIXO
const router = require('express').Router();
const Books = require('../models/Books');
const Author = require('../models/Authors');

router.post('/', async (req, res) => {
  const { titulo, autorId } = req.body;
  if(!await Books.isValid(titulo, autorId)) {
    return res.status(400).json({ message: 'dados inválidos' });
  }
  await Books.createBook(titulo, autorId)
  return res.status(201).json({ message: 'Livro criado com sucesso!'});
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getByAuthorId(id);
  if(!book) {
    return res.status(404).json({ message: 'id não encontrado' });
  }
  return res.status(200).json(book);
});

router.get('/', async (req, res) => {
  const { author_id } = req.query;

  if(author_id) {
    if(!await Author.findById(author_id)) {
      return res.status(400).json({ message : 'autor não encontrado' });
    }
    const author = await Books.getByAuthorId(author_id);
    return res. status(200).json(author);
  }
  const all = await Books.getAllBooks();
  return res.status(200).json(all);
});

module.exports = router;
