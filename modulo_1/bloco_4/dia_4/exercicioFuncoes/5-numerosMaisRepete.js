//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete

let listaValores =[2, 3, 2, 5, 8, 3, 3, 3, 3];
let quantRepetido=0;

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];//verificaNumero =2, 3
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {//verificaNumero =2 , 3 ,2, 5, 8, 3, 3
        contNumero += 1; //contNumero =1, 2
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
      quantRepetido = contRepetido;//para contar quantas vezes repetiu
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

// console.log(maisRepetido(listaValores));
console.log(`O número que mais repete é: ${maisRepetido(listaValores)}.` );
console.log(`A quantidade de repetições é: ${quantRepetido}.`);