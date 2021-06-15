// A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

// string recebida
// '1 cerveja'
// // retorno da função
// '1 copo de água'

// // string recebida
// '1 cerveja, 2 shots e 1 catuaba'
// // retorno da função
// '4 copos de água'

// // string recebida
// '2 caipirinhas'
// // retorno da função
// '2 copos de água'

const hydrate = (string) => {
  const numbers = string.match(/\d/g); // para pegar todos números globais (mas são strings)
  const totalDrinks = numbers.reduce((acc, curr) => {
     acc += parseInt(curr, 0) // para transformar números string em números int
     return acc;
  }, 0)
  return totalDrinks === 1 ? `${totalDrinks} copo de água` : `${totalDrinks} copos de água`
}

module.exports = hydrate;