// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (listPeople) => listPeople
.filter(({bornIn, nationality}) => nationality === 'Australian' && bornIn > 1901);

const filteredPeople = filterPeople(people);
console.log(filteredPeople);

// assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
// assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });

// NAO ERA ISSO QUE ELE QUERIA ------------------------------------
// const filterPeople = ({name, bornIn, nationality}) => {
//   if (bornIn > 1901 && nationality === 'Australian')
//   return {
//     name, 
//     bornIn,
//     nationality,
//   }
// }