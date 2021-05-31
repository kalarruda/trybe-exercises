//SEM DESESTRUTURAÇÃO ----------------------------------

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

console.log('------------------------------------------------------------');

//COM DESESTRUTURAÇÃO ----------------------------------

const [firstCountry1, secondCountry1, thirdCountry1, fourthCountry1] = arrayCountries;

console.log(firstCountry1); // Brazil
console.log(secondCountry1); // Japan
console.log(thirdCountry1); // China
console.log(fourthCountry1); // Canada

// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [olazinho, funcaoOla] = saudacoes;

funcaoOla(olazinho);

