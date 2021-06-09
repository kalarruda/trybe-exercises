
// PARA INSTANCIAR UMA PROMISE É SÓ SEGUIR O EXEMPLO ABAIXO ----
const fetchPromisse = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from({ length: 10 }, // a função Array.from com { length: 10 } cria 10 posições
       () => Math.floor(Math.random() * 50) + 1,  // cria números aleatórios entre 0 e 50
       );

      const sum = myArray
       .map((numberSquare) => numberSquare ** 2) // elevar todos os números do myArray ao quadrado
       .reduce((acc, curr) => curr + acc); // soma todos os valores do myArray que já estão todos ao quadrado
       
       sum < 8000 ? resolve(sum) : reject(sum); // a variável do myArray (sum) é comparado com valor 8000 se for menor = resolve, senão = reject (precisa colocar o "sum" aqui dentro senão não pode usar no "then" e no "catch" senão dá undefined)
  });
  
  myPromise
  // .then((sum) => console.log(`Promise resolvida ${sum}`)) // esse o resolve passou
  .then((divide) => [2, 3, 5, 10].map((number) => divide / number))
  .then((array) => array.reduce((acc, curr) => acc + curr, console.log(array)))
  .catch((sum) => console.log(`É mais de oito mil! Essa promise deve estar quebrada! ${sum}`)); // esse o resolve não passou, logo, entrou o reject

}

fetchPromisse();