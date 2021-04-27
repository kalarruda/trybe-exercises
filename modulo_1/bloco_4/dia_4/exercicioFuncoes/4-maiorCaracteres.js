//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let listaNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maisCaracteres (lista){
  let maiorNome=0;
  for (let inicio in lista){
    if(lista[maiorNome].length < lista[inicio].length) {
      lista[maiorNome] = lista[inicio];
    };
  };
  return lista[maiorNome];
};

console.log(maisCaracteres(listaNomes));