// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  callback(str.toUpperCase());  
};

// console.log(uppercase('palavra', (callback('palavra'))))

describe('uppercase function', () => {
  it('Testa se letras ficam uppercase', () => {
    uppercase('palavra', (str) => {
      expect(str).toBe('PALAVRA');      
    })
  }) 
})
