// Para as funções encode e decode crie os seguintes testes:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

const { encode, decode } = require('../6-exercicio');
// const decode = require('../6-exercicio');

describe('Enconde function', () => {
  it('Testa se enconde é função', () => {
    expect(typeof encode).toEqual('function'); // tanto faz aqui ser toEqual ou toBe
  })
  it('Testa se decode é função', () => {
    expect(typeof decode).toBe('function'); // tanto faz aqui ser toEqual ou toBe
  })

  it('Testa se encode converte vogais em números', () => {
    expect(encode('aeiou')).toEqual('12345');
  })

  it('Testa se decode converte números em vogais', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  it('Testa se no encode as consoantes não são convertidas em números', () => {
    expect(encode('abcdefghijklmnopqrstuvxyz')).toBe('1bcd2fgh3jklmn4pqrst5vxyz');
  })

  it('Testa se no decode os números não são convertidas em letras', () => {
    expect(decode('06789')).toBe('06789');
  })

  it('Testa se a string retornada tem a mesma quantidade de caracteres', () => {
    expect(encode('ola').length).toBe(3);
  })

})