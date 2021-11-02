const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.get('/ping', (req, res) => {
  const { nome } = req.body; 
  res.status(200).json({ message: `${nome}` });
});


app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello ${name}` });
});
// não sei porque não funcionou no insomnia

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(parseInt(age, 10) > 17) {
    res.status(200).json({ message: `Hello, ${name}!`})
  }
  res.status(401).json({ message: `Unauthorized` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});



app.listen(3000, console.log('usando a porta 3000'));

