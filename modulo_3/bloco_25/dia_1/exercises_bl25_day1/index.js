const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

  // Iteramos sobre os scripts para criar a lista numerada
  // let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);
  let mensagem = scripts.map((script, index) => `${index +1} - ${script.name}`)
   
  // o unshift é como se fosse um push mas coloca o elemento dentro do array no início
    mensagem.unshift('Escolha um número para executar o script correspondente'); 
  
    // Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
    mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) -1 ;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);
