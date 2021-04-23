//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numeros of numbers){
    console.log("jeito 1: "+numeros);
}

for (let valor =0 ; valor<numbers.length ; valor +=1){
    console.log("jeito 2: "+numbers[valor]);
}