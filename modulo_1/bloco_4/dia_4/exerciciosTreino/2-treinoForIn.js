//Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
}

for (let key in names){
  console.log(`Olá ${key} ${names[key]}`);
}

console.log(names);