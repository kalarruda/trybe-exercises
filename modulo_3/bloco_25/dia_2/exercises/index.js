function calculo(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b!== 'number' || typeof c !== 'number') {
      reject('Informe somente números');
    }
    const resultado = (a + b) * c;

    if(resultado < 50) {
      reject("Valor muito baixo");
    }
    resolve(resultado)
  })
}

// TESTES PARA VER O RESULTADO
calculo(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((erro) => console.log(erro));

calculo(10, 'a', 5)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

calculo(1, 1, 1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
// USANDO O THEN =======================

// function testArrayNumbers() {
//   const numbers = Array.from({ length: 3 }).map(randomNumber);
//   console.log(numbers);
//   calculo(...numbers)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));
// }

// USANDO O ASYNC AWAIT===================

async function testArrayNumbers() {
  const numbers = Array.from({ length: 3 }).map(randomNumber);
  console.log(numbers);
  // const calc = await calculo(...numbers);
  try {
    const resolve = await calculo(...numbers);
    console.log(resolve);
  }
  catch (error) {
    console.error(error);
  }
}
testArrayNumbers()
