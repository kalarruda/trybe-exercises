// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('../1-exercicios')

describe('1-sum function', () => {
  it('Testa se (4, 5) retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('Testa se (0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('Testa se (4, "5") retorna erro', () => {
    expect(() => { // aqui chama uma função anônima para dentro dela chamar a sum e testar se tem erro
      sum(4, "5");
    }).toThrow();    
  })

  it('Testa se (4, "5") retorna mensagem de "parameters must be numbers"', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow('parameters must be numbers');
  })
});