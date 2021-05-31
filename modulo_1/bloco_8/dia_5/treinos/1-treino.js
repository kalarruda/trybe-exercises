const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6]; // usando o spread Operator
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

// ----------------------outro exemplo -------------------------------

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

//-------------------------------------------------------------

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log('com spread Operator',imc(...patientInfo)); // 20.76
console.log('sem spread Operator',imc( patientInfo[0], patientInfo[1])); // 20.76

// -----------------------------------------------------------------------

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // pega o maior valor do array = 800
console.log(Math.min(...randomNumbers)); // pega o menor valor do array = 5

// ----------------------------------------------------------------------

// const letar = ['bosta', 'arraombado', 'sei la', 'nao'];

// const maior = () => letar.Math.max(...letar).length;
// console.log(maior());