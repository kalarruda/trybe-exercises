const readline = require("readline-sync");

function resultado(numb, result) {
  if(numb != result) {
    return console.log(`Errou, o número escolhido foi ${result} e o seu é ${numb}\n`);
  }

  return console.log(`Parabéns o número escolhido foi ${result}!\n`)
}


const randomNumb = () => {
  let random = parseInt(Math.random()* 10);
  const choose = readline.questionInt('Escolha um número entre 0 e 10: ');

  resultado(choose, random);

  const playAgain = readline.question('Deseja jogar novamente?(Digite s para sim, e qualquer outra coisa para não)');

  if(playAgain == 's') {
    return randomNumb();
  }

  return console.log('OK, até a próxima!');
}

randomNumb();