const players = [
  {nome: 'jose', email: 'jose@gmail.com'},
  {nome: 'Maria', email: 'MariaLaLaLa@gmail.com'},
  {nome: 'Porra', email: 'Porrilda@gmail.com'},
  {nome: 'Roberto', email: 'RObertão@gmail.com'},
]
console.log('quantas chaves têm players:', players.length);
const newPlayer = players.reduce((acc, curr) => { // essa chave é o escopo da função de callback (acc)
  acc[curr.nome] = curr.email; // para criar chaves é preciso colocar dentro de colchetes
  return acc;
}, {});
console.log(newPlayer);
