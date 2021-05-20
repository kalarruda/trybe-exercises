// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (phrase) => {
  let phraseArray = phrase.split(' ')
  let wordLenght = 0
  let longWord = ''
  
  for (const word of phraseArray) {
    if (word.length > wordLenght) {
      wordLenght = word.length;
      longWord = word;
    }    
  }  
  return longWord;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))


const bigestNumber = (number) => {
  let maxNumber = 0;
  let sizeArray = number;
  let result = '';
  for (const compareNumber of sizeArray) {
    if (compareNumber > maxNumber) {
      maxNumber = compareNumber;
      result = compareNumber;      
    }    
  }
  console.log(number);
  return result;
  // console.log(number); aqui não funciona esse console.log
}
const numbers = [1, 12, 5, 9, 2, 4, 7];

console.log(bigestNumber(numbers));