const fs = require('fs').promises;

async function funcao() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão porra!!!');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

funcao();


// const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Meu textão de MERDA!!!')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });