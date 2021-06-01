const person1 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality1 = 'Brazilian'} = person1;
console.log(nationality1); // brazilian

//------------------------------------------------------------------

const position2d = [1.0, 2.0];
const [x, y, z = 4] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 4

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const {nationality} = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));