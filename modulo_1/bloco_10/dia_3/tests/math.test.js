// Faça o mock da funcão subtrair e teste sua chamada.
// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução

const calculo = require('../math');

describe('Testa funções de calculo', () => {  
  it('Testa se função subtrair é chamada', () => {
    calculo.subtrair = jest.fn(); // faz mock da função

    calculo.subtrair(); // chama a função
    expect(calculo.subtrair).toHaveBeenCalled(); // faz o teste se função foi chamada
  })

  it('Testa se função multiplicar com retorno 10', () => {
    calculo.multiplicar = jest.fn().mockReturnValue(10); // colocar valor no mock

    calculo.multiplicar(); // chama a função
    expect(calculo.multiplicar).toHaveBeenCalled(); // testa se foi chamada
    expect(calculo.multiplicar()).toBe(10); // testa se o valor foi igual a 10
  })

  it('Testa se função somar recebe dois valores e retorna a soma', () => {
    calculo.somar = jest.fn().mockReturnValue(10);

    calculo.somar(5,4); // chama a função
    
    expect(calculo.somar).toHaveBeenCalled(); // testa chamada da função
    expect(calculo.somar).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    expect(calculo.somar).toHaveBeenCalledWith(5, 4); 
    expect(calculo.somar(5,4)).toBe(10); // não entendi essa parte do valor
  })

  // test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", () => {
  //   const mockSomar = jest.spyOn(calculo, "somar");
  //   mockSomar.mockResolvedValue(5);
  
  //   mockSomar(2, 3);
  //   expect(mockSomar).toHaveBeenCalled();
  //   expect(mockSomar).toHaveBeenCalledTimes(1);
  //   expect(mockSomar).toHaveBeenCalledWith(2, 3);
  //   expect(mockSomar(2, 3)).resolves.toBe(6);
  // });

  it('Testar função dividir implementando valor 15 e ter duas chamadas', () => {
    const mockDividir = jest.spyOn(calculo, 'dividir');
    mockDividir.mockReturnValue(15);
    mockDividir.mockReturnValueOnce(2);
    mockDividir.mockReturnValueOnce(5);

    expect(mockDividir(4, 2)).toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);
    expect(mockDividir).toHaveBeenCalledWith(4, 2);

    expect(mockDividir(10, 2)).toBe(5);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledWith(10, 2);

    expect(mockDividir(30, 2)).toBe(15);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(3);
    expect(mockDividir).toHaveBeenCalledWith(30, 2);
  })

  

})
