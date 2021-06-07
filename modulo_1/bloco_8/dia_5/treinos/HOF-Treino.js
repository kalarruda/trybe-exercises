//EXEMPLO DE HIGH ORDER FUNCTION -----------

const multiplier = (multiplier) => aNumber => aNumber * multiplier;
// function multiplier (multiplier) {
//   return function number (aNumber) {
//     return aNumber * multiplier;
//   }
// }

const double = multiplier(3);
// console.log(double(2));

const tvShows = [
  {name: 'Breakin Bad', releaseYear: 2008},
  {name: 'Mr. Robot', releaseYear: 2015},
  {name: 'True Detective', releaseYear: 2014},
  {name: 'Hannibal', releaseYear: 2013},
  {name: 'The Handmaid\'s Tale', releaseYear: 2017},
]
// const names = tvShows.map((namesShow) => namesShow.name);
const names = tvShows.map(({name}) => name);
// console.table(names);

const filterNames = tvShows.filter((namesShow) => namesShow.name === 'Breakin Bad');
// vai voltar todo o array tvShows

const filterNames1 = tvShows.filter((namesShow) => namesShow.name === 'Breakin Badss');
// vai voltar um array vazio pois não encontrou nada

return tvShows.filter(({name},index) => 'Hannibal' === name[index])
// vai voltar o array completo pois encontrou 'Hannibal' dentro do array
// se o filter não achar o valor ele retorna array vazio
// console.log(filterNames);

const firstTraveler = [
  'Sydney', 'Berlim', 'Lisboa', 'Sofia', 'Praga', 'Bali', 'Rio de Janeiro'
]

const secondTraveler = [
  'Praga', 'Roma', 'São Paulo', 'Bali'
]
//USANDO O INCLUDES PARA COMPARAR
const commonCities = firstTraveler.filter((city) => secondTraveler.includes(city));
// console.log(commonCities);


//USANDO O REDUCE 
const tvShows2 = [
  {name: 'Breakin Bad', releaseYear: 2008},
  {name: 'Mr. Robot', releaseYear: 2015},
  {name: 'True Detective', releaseYear: 2014},
  {name: 'Hannibal', releaseYear: 2013},
  {name: 'The Handmaid\'s Tale', releaseYear: 2017},
]

const namesList = tvShows2.reduce((accumulator, {name}) => `${accumulator}- ${name}\n`, '');
console.log(namesList)


//NÃO ENTENDI ESSE DE BAIXO PARA VER QUANTO A IDADE REPETE 
const people = [
  {name: 'Gabriel', age: 18},
  {name: 'Joana', age: 19},
  {name: 'Fidel', age: 18},
  {name: 'Castro', age: 18},
  {name: 'João', age: 20},
  {name: 'Fernando', age: 19},
]

const frequencyAges = people.reduce((accumulator, {age}) => {
  // accumulator.age =1;
  // accumulator[age + 5] =1;
  accumulator[age] = accumulator[age] + 1 || 1;

  return accumulator;
}, {})
console.log(frequencyAges);

// PEGAR TODOS OS CACHORROS E TRANSFORMAR IDADE EM IDADE HUMANA (VEZES 7)
const pets = [
  {name: 'Boris', age: 4, gender: 'Male', type: 'Dog'},
  {name: 'Viti', age: 1, gender: 'Male', type: 'Cat'},
  {name: 'Layde', age: 2, gender: 'Female', type: 'Dog'},
  {name: 'Bob', age: 4, gender: 'Female', type: 'Cat'},
  {name: 'Zara', age: 3, gender: 'Female', type: 'Dog'},
  {name: 'Teka', age: 6, gender: 'Male', type: 'Dog'},
]

const typeDogs = ({type}) => type === 'Dog';
//função faz destructor de "type" que é chamada na função de baixo 

const converterAge = ({ name, age, gender, type }) => ({
  name,
  age: age * 7,
  gender,
  type,
})

const dogsAgeConverted = (pets
  .filter(typeDogs)
  .map(converterAge)
  )
console.log(dogsAgeConverted);


// const typePets = pets.filter(({type}) => type === 'Dog');
// //retorna todos os animais do tipo cachorro
// console.log(typePets);