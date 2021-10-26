const express = require('express');

// Criar uma nova aplicação Express;
const app = express();

// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;
app.get('/hello', handleWorldRequest);

// Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
app.listen(3000, () => {
  console.log('Aplicação ouvindo a porta 3000');
});

// Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
function handleWorldRequest(_req, res) {
  res.status(200).send('instalando o "npm i nodemon -D" e usando o "dev": "nodemon index.js" ele atualiza!');
}
