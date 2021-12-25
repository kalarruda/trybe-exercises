const bodyParser = require('body-parser');
const express = require('express');

const productController = require('./controllers/ProductsController');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/products', productController);

app.listen(PORT, console.log(`Está rodando na porta ${PORT}`));
