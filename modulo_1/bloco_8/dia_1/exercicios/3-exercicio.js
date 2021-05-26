// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultTest = (rightAnswers, studentAnswers, callback) => { 
  return callback(rightAnswers, studentAnswers);
};

const checkTest = (rightAnswers, studentAnswers) => {
  let points = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      points += 1;
    }
    if (rightAnswers[index] !== studentAnswers[index]) {
      points -= 0.5;
    }
    points += 0;
  }
  return `resultado: ${points} pontos`;
};

console.log(resultTest(rightAnswers, studentAnswers, checkTest));
