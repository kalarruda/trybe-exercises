//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let numbers =5;

for (coluna = 1 ; coluna <= numbers ; coluna +=1){
  let asteriscos=``;
  for (linha = 0 ; linha < coluna ; linha +=1){    
    asteriscos += `*`;
    
  };
  console.log(asteriscos);
};
