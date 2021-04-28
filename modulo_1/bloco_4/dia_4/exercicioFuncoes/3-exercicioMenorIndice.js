//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let listaValores = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(lista){
  let menor =0;
  for (let indice in lista){
    if (lista[menor]> lista[indice]){
      menor = indice;
    };
  };
  return menor;
};

console.log(menorIndice(listaValores));


