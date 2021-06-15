// Para as funções encode e decode crie os seguintes testes:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// Desafio 9
function encode(string) {
  let stringSeparada = string.split('');//para separar as letras em indices
  // let stringJunta =stringSeparada.join('');
  // let letras = [`a`, `e`, `i`, `o`, `u`];
  // let valor;
  for (let index = 0 ; index < stringSeparada.length; index += 1) {
    // stringSeparada[index] = valor;
    // valor +=1;
    if (stringSeparada[index] === 'a') {
      stringSeparada[index] = 1;
    }
    else if (stringSeparada[index] === 'e') {
      stringSeparada[index] = 2;
    }
    else if (stringSeparada[index] === 'i') {
      stringSeparada[index] = 3;
    }
    else if (stringSeparada[index] === 'o') {
      stringSeparada[index] = 4;
    }
    else if (stringSeparada[index] === 'u') {
      stringSeparada[index] = 5;
    }
  }
  return stringSeparada.join('');//usando o join('') os indices somem e não tem vírgula
}
  console.log(encode(`hi there!`));

function decode(string) {

  let stringSeparada = string.split('');//para separar as letras em indices
  for (let index = 0; index < stringSeparada.length; index += 1) {
    if (stringSeparada[index] === '1') {
      stringSeparada[index] = 'a';
    }
    else if (stringSeparada[index] === '2') {
      stringSeparada[index] = 'e';
    }
    else if (stringSeparada[index] === '3') {
      stringSeparada[index] = 'i';
    }
    else if (stringSeparada[index] === '4') {
      stringSeparada[index] = 'o';
    }
    else if (stringSeparada[index] === '5') {
      stringSeparada[index] = 'u';
    }
  }
  return stringSeparada.join('');
}

const functions = { encode, decode }
module.exports = functions;

  // console.log(decode(`h3 th2r2!`));