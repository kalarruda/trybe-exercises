// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const random = require('../1-exercicio');

describe('função ramdom', () => {
  it('Testa função receber 3 parâmetros e multiplique', () => {
    random.randomNumbers = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(random.randomNumbers(2, 2, 2)).toBe(8);
    expect(random.randomNumbers).toHaveBeenCalled();
    expect(random.randomNumbers).toHaveBeenCalledTimes(1);
    expect(random.randomNumbers).toHaveBeenCalledWith(2, 2, 2);
  })

  it('Testa função recebe parâmetro e retorna o dobro', () => {
    random.randomNumbers.mockReset(); // reseta a função
    expect(random.randomNumbers).toHaveBeenCalledTimes(0);
    random.randomNumbers = jest.fn().mockImplementation((a) => a * 2);

    expect(random.randomNumbers(4)).toBe(8);
    expect(random.randomNumbers).toHaveBeenCalled();
    expect(random.randomNumbers).toHaveBeenCalledTimes(1);
    expect(random.randomNumbers).toHaveBeenCalledWith(4);
  })
})