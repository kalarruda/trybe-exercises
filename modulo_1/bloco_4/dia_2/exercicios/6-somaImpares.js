//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let numbers = [4,2];

let impar=0;
let somaImpar=0;

for (n=0 ; n<numbers.length ; n +=1){
    if (numbers[n]%2 != 0){
        somaImpar = somaImpar + numbers[n];
    }
    else{
        somaImpar = somaImpar;
    }
}

if(somaImpar==0){
    console.log("Nenhum valor ímpar encontrado.");
}
else{
    console.log("Soma dos ímpares: "+somaImpar);
}


