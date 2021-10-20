const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

function teste() {
  // Iteramos sobre os scripts para criar a lista numerada
  let mensagem = scripts
    .map((script, index) => `${index + 1} - ${script.name}`);
   
    mensagem.unshift('Escolha um número para executar o script correspondente');
  
    mensagem = mensagem.join('\n');
}

teste();