const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const songsController = require('./controllers/songsController');

app.use(bodyparser.json()); // PRECISA PARA PODER USAR MÉTODO POST

app.get('/songs', songsController.getAllSongs);
app.post('/songs', songsController.createSong);

const PORT = 3000;

app.listen(PORT, console.log(`Usando a porta ${PORT}`));
