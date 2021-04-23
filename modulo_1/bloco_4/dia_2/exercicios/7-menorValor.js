//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor=numbers[0];

for (let n=0 ; n<numbers.length ; n +=1){
    if(menor>numbers[n]){
        menor = numbers[n];
    }
    else{
        menor = menor;
    }
}

console.log (menor);