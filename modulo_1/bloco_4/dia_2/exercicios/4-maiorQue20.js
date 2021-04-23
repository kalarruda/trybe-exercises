//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

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

if(media>20){
    console.log("\nValor maior que 20.");
}
else{
    console.log("\nValor menor ou igual a 20.");
}