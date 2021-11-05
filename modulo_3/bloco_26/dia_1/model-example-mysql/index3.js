// index.js

const express = require('express');

const app = express();

const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
