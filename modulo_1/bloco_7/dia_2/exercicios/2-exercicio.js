



const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// -----------------------------------------------------------
// 1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const modifLessons = (object, key, value) => {
  object[key] = value;
}

modifLessons(lesson2,'turno', 'manhã');
console.log(lesson2);
// ---------------------------------------------------
// 2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const objectKeys = (object) => {
//   for (let index in object) {
//     console.log(index);
//   }
// }
// objectKeys(lesson2);

const objectKeys = (obj) => Object.keys(obj); // mostra somente as chaves do objeto
console.log(objectKeys(lesson2));

// ---------------------------------------------------------
// 3-Crie uma função para mostrar o tamanho de um objeto.

const objectSize = (obj) => Object.keys(obj).length;
console.log(objectSize(lesson1));

// ---------------------------------------------------------
// 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectList = (obj) => Object.values(obj); // recebe o valor relacionado de cada chave.
console.log(objectList(lesson1));

// ----------------------------------------------------------
// 5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (obj) => {
  let total = 0;
  const list = Object.keys(obj); // pega as chaves
  for (let index in list) {
    const valueKey = list[index];
    total += obj[valueKey].numeroEstudantes;
    // total += obj[list[index]].numeroEstudantes; FUNCIONA TAMBÉM
    // total += Object.values([index]).numeroEstudantes; ERRADO
  }
  return total;
}
console.log(totalStudents(allLessons));
// 7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// const getValueByNumber = (obj,number) => Object.values(obj)[number];
// console.log(getValueByNumber);

const getValueByNumber = (obj,number) => Object.values(obj)[number];

console.log(getValueByNumber(lesson3, 0));

// 8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (obj, key, value) => {
  const objectList = Object.entries(obj); // pega cada key com seu valor
  // return objectList[0][0]; //mostra o valor do primeiro conteudo do primeiro array DESCOMENTAR PARA VER O TESTE
  let result = false;
  for (let index in objectList) {
    if (key === objectList[index][0] && value === objectList[index][1]) {
      result = true;
    }
  }
  return result;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));


// 1-BONUS Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const mathStudents = (obj) => {
  let total = 0;
  // const objectList = Object.entries(obj);
  const objectKeys = Object.keys(obj);
  // return objectKeys; // aparece [ 'lesson1', 'lesson2', 'lesson3' ]
  for (let index in objectKeys) {
    if (obj[objectKeys[index]].materia === 'Matemática') {
      total += obj[objectKeys[index]].numeroEstudantes;
    }
  }
  return total;  
}

console.log(mathStudents(allLessons));

// ----------------------------------------------------------
// 2-BONUS Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: