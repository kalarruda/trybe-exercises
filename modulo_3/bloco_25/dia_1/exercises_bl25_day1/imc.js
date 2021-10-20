const readline = require('readline-sync'); // foi instalada pelo npm i readline-sync

function calcIMC() {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const alt = readline.questionInt('Qual a sua altura? (em cm)');

  console.log(`O peso é ${peso}, e a altura: ${alt}.`);
  const imc = (peso / Math.pow(alt / 100 , 2)).toFixed(2);

  if(imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
  
  console.log(`O IMC é: ${imc}`)
}

calcIMC();
