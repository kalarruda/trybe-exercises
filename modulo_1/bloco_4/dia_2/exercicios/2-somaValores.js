//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let calculo=0;

for (soma=0 ; soma<numbers.length ; soma +=1){
    calculo = calculo + numbers[soma];    
}

console.log(calculo);