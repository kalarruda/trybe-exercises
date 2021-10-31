const numbers = (number) => {
  if(typeof number !== 'number') {
    return 'não é número';
  }

  if(number < 0){
    return 'negativo'
  };

  if(number == 0) {
    return 'neutro';
  }

  return 'positivo';
}

module.exports = numbers;
