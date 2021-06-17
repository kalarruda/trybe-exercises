// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const random = require('../1-exercicio');

describe('Testa função randomNumbers', () => {
  it('Testa se função foi chamada, seu retorno e quantas vezes chamada', () => {
    random.randomNumbers = jest.fn().mockReturnValue(10);

    random.randomNumbers(); // função foi chamada uma vez
    expect(random.randomNumbers()).toBe(10);
    expect(random.randomNumbers).toHaveBeenCalled();
    expect(random.randomNumbers).toHaveBeenCalledTimes(1);
  })
})

