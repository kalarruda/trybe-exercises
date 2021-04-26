//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// *
// **
// ***
// ****
// *****

// let numbers =5;

// for (let linha = 0 ; linha <= numbers ; linha +=1){
//   let asteriscos=``;
//   for (let coluna = 0 ; coluna < coluna ; coluna +=1){    
//     asteriscos += `*`;
    
//   };
//   console.log(asteriscos);
// };

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};

// PARA COMEÇAR SEM ESPAÇO VAZIO NA PRIMEIRA LINHA (COLUNA=1)
// for (let coluna = 1 ; coluna <= numbers ; coluna +=1){
//   let asteriscos=``;
//   for (let linha = 0 ; linha < coluna ; linha +=1){    
//     asteriscos += `*`;
    
//   };
//   console.log(asteriscos);
// };
