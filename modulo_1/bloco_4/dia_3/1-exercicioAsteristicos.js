//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// *****
// *****
// *****
// *****
// *****

let number = 5;

for (let line=0 ; line<number ; line +=1){//2
  let asteristico =``;
  for (let col=0 ; col < number ; col +=1){
    asteristico += `*`;    
  };
  console.log(asteristico);
};


// let colunas = 7;

// for(let l = 0; l < colunas; l++){
//     for(let c = 0; c < colunas; c++){
//         console.log("*"); // colunas
//     }
//     console.log(); // linhas
// }