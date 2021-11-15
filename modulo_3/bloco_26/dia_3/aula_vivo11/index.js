const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controllers = require('./controllers/peopleController');

app.use(bodyParser.json());

app.use('/', controllers);

const PORT = 3001;

app.listen(PORT, console.log(`Usando a porta ${PORT}`));
