
// REFATORAR O EXERCICIO 2 USANDO ASYNC E AWAIT
const resultSumArray = () => {
  const myArray = Array.from({ length: 10 }, // a função Array.from com { length: 10 } cria 10 posições
    () => Math.floor(Math.random() * 50) + 1,  // cria números aleatórios entre 0 e 50
    );

   const sum = myArray
    .map((numberSquare) => numberSquare ** 2) // elevar todos os números do myArray ao quadrado
    .reduce((acc, curr) => curr + acc); // soma todos os valores do myArray que já estão todos ao quadrado

    if (sum >= 8000) { // se for maior que 8000 retorna Error
      throw new Error;
    }
    return sum; // se for menor que 8000 retorna const sum
}

const arraySum = (array) => [2, 3, 5, 10].map((number) => array / number)
.reduce((acc, curr) => acc + curr);

const fetchPromisse = async () => {
  try {
    const sum = await resultSumArray();
    const sumTotal = await arraySum(sum);
  } catch {
    console.log('essa parada é mais de 8 mil!');
  }
  
       
  
  };
  

fetchPromisse();