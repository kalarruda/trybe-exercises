// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const myRemove = require('../2-exercicio');

describe('function myRemove', () => {
  it('Testa se ([1, 2, 3, 4], 3) retorna array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]); // por que toEqual e não toBe??
  })

  it('Testa se ([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Testa se array passado não sofre alterações', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 1);
    expect(array).toEqual([1, 2, 3, 4]);
  })

  it('Testa se ([1, 2, 3, 4], 5) retorna array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});