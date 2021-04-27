//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Exemplo de palíndromo: arara .

//usar o método "split" para separar as letras da string em array

//COMO USAR O MÉTODO SPLIT ------------------------
let palavra = 'pulo';

console.log(palavra.split("")); 
//separa array de 3 posições MAS TEM QUE COLOCAR DENTRO DO PARENTESES AS ASPAS SEM ESPAÇO

//--------------------------------------------------

//COMO USAR O MÉTODO REVERSE -----------------------
let palavra = 'pulo';

console.log(palavra.split('').reverse()); 

//--------------------------------------------------


//COMO USAR O MÉTODO JOIN---------------------------
let palavra = 'pulo';

console.log(palavra.split('').reverse().join(''));
//se não colocar aspas dentro de join vai ter vírgulas na palavra 

//--------------------------------------------------

function palindromo(palavra){
  if (palavra.split('').reverse().join('')=== palavra){
    console.log(`A palavra ${palavra} é um palíndromo.`);
    return true;
  }
  else{
    console.log(`A palavra ${palavra} não é um palídromo.`);
    return false;
  }
}

console.log(palindromo('arara'));
console.log(palindromo('pneu'));