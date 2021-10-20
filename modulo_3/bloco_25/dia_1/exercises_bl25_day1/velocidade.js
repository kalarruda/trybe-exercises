const readline = require('readline-sync');

const medSpeed = () => {
  const distancia = readline.questionInt('Qual a distância(quilômetros)? ');
  const tempo = readline.questionInt('Qual foi o tempo(horas)? ');

  const media = (distancia / tempo).toFixed(2);
  console.log(`À velocidade média é ${media}km/h`);
}

medSpeed();