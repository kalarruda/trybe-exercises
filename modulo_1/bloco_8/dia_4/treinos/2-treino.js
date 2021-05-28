const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log('verificando valor: ',accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

// O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função . Veja a seguir, será usado o último exemplo dado da soma dos números:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum1 = (result, number) => {
  console.log('teste do result:',result); // 0 32 47 50 52 47 103
  return result + number;
  };
  const sumNumbers2 = numbers.reduce(getSum1); // sem adicionar o "0" no reduce
const sumNumbers1 = numbers.reduce(getSum1, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers1); // 113