const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const port = 3000;

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`rodando na porta ${port}`));
