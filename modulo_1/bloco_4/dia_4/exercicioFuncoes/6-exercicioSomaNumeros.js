//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let n = 5;

function somaNumeros(numeros){
  let soma = 0;
  for(let index=0 ; index<=numeros ; index +=1){    
    soma += index;
  };  
  return soma;
};
  
console.log(somaNumeros(n));
  
