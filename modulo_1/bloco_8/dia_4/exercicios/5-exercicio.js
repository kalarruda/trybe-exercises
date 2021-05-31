// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const nameSize = names.reduce((acc, curr) => {
    return acc += curr.match(/a/gi).length;
  },0)  
  return nameSize;
}

console.log('RESPOSTA',containsA());

assert.deepStrictEqual(containsA(), 20);