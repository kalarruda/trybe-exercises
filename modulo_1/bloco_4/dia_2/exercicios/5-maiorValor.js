//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior=0;

for (valor=0 ; valor<numbers.length ; valor +=1){
    if (maior>numbers[valor]){
        maior = maior;
    }
    else{
        maior= numbers[valor];
    }
}
console.log(maior);