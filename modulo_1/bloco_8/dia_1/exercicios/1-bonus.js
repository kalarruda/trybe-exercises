
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = (dragonPlayer) => {
  const min = 15;
  const { strength } = dragonPlayer; // const min = dragon.strength - também pode
  const dragonDamage = Math.round(Math.random() * (strength - min)) + min; // numero aleatório entre 15 e strength
  dragon.damage = dragonDamage;
  // return `Ataque do dragão: ${dragonDamage} de dano.`;
  return dragonDamage;  
};

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (warriorPlayer) => {
  const { weaponDmg } = warriorPlayer; // max value
  const min = warriorPlayer.strength;
  const warriorDamage = Math.round(Math.random() * (weaponDmg - min) + min);
  warrior.damage = warriorDamage;
  // return `Ataque do guerreiro: ${warriorDamage} de dano.`
  return warriorDamage;
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageAttack = (magePlayer) => {
  const min = magePlayer.intelligence; // OU: const { intelligence } = magePlayer; dano min
  const max = magePlayer.intelligence * 2;
  const mageDamage = Math.round(Math.random() * (max - min) + min);
  // let mana = magePlayer.mana; // OU: const { mana } = magePlayer;
  mage.damage = mageDamage;
  for (let mana = magePlayer.mana; mana > 15; mana -= 15) {
    if (mana > 15) {
      mana -= 15;
      return { damage: mageDamage, manaSpend: 15, mana };      
    }
    return `Não possui mana suficiente`;
  }
};

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

const gameActions = {
  warriorTurn: (warriorAction) => {
    const warriorDamage = warriorAction(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warrior.damage;
    return warrior.damage;
  },
  mageTurn: (mageAction) => {
    const mageDamage = mageAction(mage);
    console.log('teste', Object.keys(mageDamage));
    mage.damage = mageDamage[1];
    dragon.healthPoints -= mage.damage;
    return mage.damage;
  },
};

console.log('Dano do mago:', gameActions.mageTurn(mageAttack));
console.log('Dano do guerreiro:', gameActions.warriorTurn(warriorAttack));
console.log('healthPoints dragao:', dragon.healthPoints);
// console.log('Dano do dragão:', dragonAttack(dragon));
// console.log('Dano do mago:', mageAttack(mage));
// console.log('Dano do guerreiro:', warriorAttack(warrior));