const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (arrayOfPeople.filter((people) => (people.age < 18)));
console.log(verifyAgeDrive(objPeople));

// também pode fazer função como embaixo:
const verifica = objPeople.filter((people) => people.age < 18);
console.log(verifica);
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]