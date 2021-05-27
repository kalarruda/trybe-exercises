// usando o for para uma função ---------------
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
console.log('com for:', fullNames);

// usando o map para a mesma função -------------

const fullNames1 = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log('com map:',fullNames1); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]