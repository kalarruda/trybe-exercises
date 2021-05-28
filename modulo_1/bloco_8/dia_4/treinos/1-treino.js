const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log('com uso do For:', sumNumbers); // 113

// -------------usando o reduce ----------------------------

const sumNumbers0 = numbers.reduce((result, number) => result + number) ; // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log('usando o reduce:',sumNumbers0); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers1 = numbers.reduce(getSum);
console.log('outra forma de usar o reduce:',sumNumbers1); // 113