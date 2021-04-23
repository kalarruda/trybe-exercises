//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media=0;
let soma=0;

for (n=0 ; n<numbers.length ; n +=1){
    soma = soma + numbers[n];
}

media = soma /numbers.length;
console.log("Tamanho Array: "+numbers.length+" itens.");
console.log("Soma: "+soma);
console.log("Média: "+media);