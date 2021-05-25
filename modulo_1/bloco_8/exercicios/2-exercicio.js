// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numbers = () => {
  const randomNumber = Math.ceil(Math.random() * 5);
  console.log(`numero sorteado: ${randomNumber}`);
  return randomNumber;  
};

const chooseNumber = (numero) => {
  if (numbers() === numero) {
    return console.log('Parabéns você ganhou');
  }
  return console.log('Tente novamente');
};

chooseNumber(4);

// ----------------------OUTRO EXERCÍCIO---------------

const persona = {
  name: 'carol',
  lastname: 'santos',
};

const greetingPeople = (person) => {
  person = persona;
  console.log(`Olá ${person.name}, como vai?`);
};

persona.greet = (callback) => {
  return callback();
};

persona.greet(greetingPeople);
