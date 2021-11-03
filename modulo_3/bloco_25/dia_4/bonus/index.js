// Adicione autenticação a todos os endpoints.
// O token deve ser enviado através do header Authorization .
// O token deve ter exatamente 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

const express = require('express');
const app = express();
const auth = require('./middlewares/auth');

app.use('/algo', auth);




app.get('/sign', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'campos em falta!' });
  }
  return res.status(200).json({ message: 'porra cara' });
});

app.listen(3000, console.log('usando porta 3000'));
