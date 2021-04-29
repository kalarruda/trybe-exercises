let player = {// objeto
  name: "Marta", // propriedades
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,      
  },  
  bestInTheWorld:[2006, 2007, 2008, 2009, 2010,2018],
};

console.log(`\nA jogadora ${player.name} ${player.lastName} tem ${player.age} de idade.`);

console.log(`\nA jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`);

console.log(`\nA jogadora ${player.name} ${player.name} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);
