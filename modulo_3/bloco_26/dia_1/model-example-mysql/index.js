const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 3001;

const booksRouter = require('./routers/booksRouter');
const authorsRouter = require('./routers/authorsRouter');

app.use(bodyParser.json());

app.use('/authors', authorsRouter);
app.use('/:id', authorsRouter);

app.use('/books', booksRouter);
app.use('/:id', booksRouter);

app.listen(port, console.log(`conected on port ${port}`));
