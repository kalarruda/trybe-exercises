const bodyparser = require('body-parser');
const express = require('express');

const UserController = require('./controllers/UsersController');

const app = express();

const PORT = 3000;

app.use(bodyparser.json());

app.use('/user', UserController);

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}!`));
