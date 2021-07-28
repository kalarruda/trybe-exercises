const { sumNumber } = require('../src/App');

describe('testa função de App', () => {
  it('verifica se é uma função', () => {
    expect(typeof sumNumber).toBe('function');
  });

  it('verifica se recebe um array', () => {
    expect(sumNumber('não é array')).toBe('Não é um array');
  });

  it('verifica se não recebe parâmetro', () => {
    expect(sumNumber()).toBe('Não foi passado parâmetro');
  });
  it('verifica soma se receber parâmetros', () => {
    expect(sumNumber([1, 2, 3])).toBe(6);
  });
})