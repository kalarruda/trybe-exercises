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