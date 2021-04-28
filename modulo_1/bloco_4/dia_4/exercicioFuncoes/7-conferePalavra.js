// Crie uma função que receba uma string word , e outra, uma string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

//como fazer: inverter as palavras e comparar na ordem progressiva

function conferePalavra(palavra, fimPalavra){
  let palavraInversa = palavra.split('').reverse();//split COM ASPAS transforma as letrasda palavra em array
  let fimInverso = fimPalavra.split('').reverse();
  for (index =0 ; index <=palavra.length ; index +=1){
    if(palavraInversa[index]===fimInverso[index]){
      return true;
    }
    else{
      return false;
    }
  };  
};

console.log(conferePalavra('trybe', 'be'));
console.log(conferePalavra('joaofernando', 'fernan')); 
