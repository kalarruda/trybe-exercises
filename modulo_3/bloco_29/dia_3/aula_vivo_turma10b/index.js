const express = require('express');
const bodyparser = require('body-parser');

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const sellsOffController = require('./controllers/sellsOffController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());

app.use('/users', userController);
app.use('/products', productController);
app.use('/sellsOffs', sellsOffController);

app.listen(PORT, console.log(`Está rodando na porta ${ PORT}` ));

