// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const myRemoveWithoutCopy = require('../3-exercicio');

describe('myRemoveWithoutCopy', () => {
  it('Teste ([1, 2, 3, 4], 3) retorna array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it('Teste ([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Teste se o array passado permanece igual', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 1);
    expect(array).toEqual(array)
  })

  it('Teste ([1, 2, 3, 4], 5) retorna array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})