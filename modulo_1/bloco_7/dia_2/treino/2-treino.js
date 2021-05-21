const casa = {
  area: 2000,
  altura: 2,
  andares: 3,
}

for (let key in casa) {
  console.log(key);
}


const lista = [5, 2, 7, 1];

for (let element of lista) {
  console.log('elemento: ',element);
}

for (let key in lista) {
  console.log('chave', key);
}

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};


console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);