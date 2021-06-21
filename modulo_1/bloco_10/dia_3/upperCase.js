// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const upperCase = (str) => str.toUpperCase(); // transforma em letras maiúsculas
const firstLetter = (str) => str.charAt(0); // pega a letra da posição que quer
const concat = (strA, strB) => strA.concat(strB); // concatena as strings

console.log(upperCase('zsdsdfsdf'))
console.log(firstLetter('zsdsdfsdf'))
console.log(concat('merda', 'bosta'))

module.exports =  { upperCase, firstLetter, concat };