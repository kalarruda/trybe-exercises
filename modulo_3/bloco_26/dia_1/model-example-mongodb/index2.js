const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 3000;
const Author = require('./models/Author');
const Books = require('./models/Books');
const booksRouter = require('./routers/booksRouter');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findById(id);
  if(!authors) {
    return res.status(404).json({ message: 'id não encontrado' });
  }
  return res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { primeiroNome, nomeDoMeio, sobrenome } =req.body;
  if(!Author.isValid(primeiroNome, nomeDoMeio, sobrenome)) return res.status(400).json({ message: 'campos preenchidos incorretos' });
  await Author.createAuthor(primeiroNome, nomeDoMeio, sobrenome);
  return res.status(201).json({ message: 'autor criado com sucesso!' });
});

// app.get('/books', async (req, res) => {
//   const books = await getAllBooks();

//   res.status(200).json(books);
// })

app.get('/books', async (req, res) => {
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
  
  // DUAS CONDIÇÕES PARECIDAS
  // const books = (author_id) ? await Books.getByAuthorId(author_id) : await Books.getAllBooks();
  // res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getByAuthorId(id);
  if(!book) {
    return res.status(404).json({ message: 'id não encontrado' });
  }
  return res.status(200).json(book);
});

app.use('/books', booksRouter);
// app.post('/books', async (req, res) => {
//   const { titulo, autorId } = req.body;
//   if(!await Books.isValid(titulo, autorId)) {
//     return res.status(400).json({ message: 'dados inválidos' });
//   }
//   await Books.createBook(titulo, autorId)
//   return res.status(201).json({ message: 'Livro criado com sucesso!'});
// });

app.listen(port, console.log(`conected on port ${port}`));
