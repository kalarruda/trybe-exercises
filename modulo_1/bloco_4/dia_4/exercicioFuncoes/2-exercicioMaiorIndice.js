//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function indice(lista){
//   let maiorIndice =0;
//   for (let indice in lista){// o indice é incrementado toda vez que executa o for
//     if(lista[maiorIndice] < lista[indice]){//lista[maioIndice] tem o valor do índice (não a posição)
//       maiorIndice = indice;//indice tem a posição e não o valor 
//     };
//   };
//   return maiorIndice;
// };

// let listNumbers =[2, 3, 6, 7, 10, 1];

// console.log(indice(listNumbers));



function HighValue(lista){
  let maiorIndice = 0;
  for (let index =1 ; index < lista.length ; index +=1 ){    
    if(lista[maiorIndice] < lista[index]){
      maiorIndice = index;
    };   
  };
  return maiorIndice;
};

let listNumbers =[2, 3, 6, 7, 10, 1];

console.log(HighValue(listNumbers));




// MAIOR VALOR DA LISTA---------------------------------------------
// let list =[2, 3, 6, 7, 10, 1]; 

// function HighValue(lista){
//   let maiorValor = lista[0];
//   for (let index =1 ; index < lista.length ; index +=1 ){    
//     if(maiorValor > lista[index]){
//       maiorValor = maiorValor;
//     }
//     else{
//       maiorValor = lista[index];
//     };
//   };
//   return maiorValor;
// };

// console.log(HighValue(list));

// console.log(list);
// ------------------------------------------------------------------


// function array (caracter){
//   let array =[];
//   for(let index =0 ; index <100 ; index +=1){
//     array.push(caracter);
//   };
//   return array;
// };

// console.log(array(7));