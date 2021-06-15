// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('../4-exercicios');

describe('4-exercicio', () => {
  it('Testa se número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })

  it('Testa se número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })

  it('Testa se número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })

  it('Testa um número que não é divisível por 3 ou 5 e tem retorno esperado', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  })
  
  it('Testa um valor que não é número e tem retorno esperado', () => {
    expect(myFizzBuzz('7')).toEqual(false);
  })
})