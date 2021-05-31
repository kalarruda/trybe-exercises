// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
// Dica: use parâmetro rest .

const assert = require('assert');

// const calc = (number1, number2) => {
//   if (number1 !== '' || number2 !== '') {
//     return number1 + number2;
//   }
//   return 0;  
// } 
// console.log(calc(1, 7));

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log('sou burro demais',sum());

// assert.strictEqual(sum(), 0);
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);
// assert.strictEqual(sum(1, 2, 3, 4), 10);