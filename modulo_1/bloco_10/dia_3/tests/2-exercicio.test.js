// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const random = require('../1-exercicio');
// const random = require('../2-exercicio');

describe('Função randomNumbers', () => {
  it('Testa receber dois parâmetros e divide pelo outro', () => {
    random.randomNumbers = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(random.randomNumbers(10, 5)).toBe(2);
    expect(random.randomNumbers).toHaveBeenCalled();
    expect(random.randomNumbers).toHaveBeenCalledTimes(1);
    expect(random.randomNumbers).toHaveBeenCalledWith(10, 5);
  })
})