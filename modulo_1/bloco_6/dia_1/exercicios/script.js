function handleSubmit(event) {
  event.preventDefault();
}

const states = document.getElementById('state');

const statesList = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < statesList.length; index += 1) {
  const options = document.createElement('option');
  options.innerHTML = statesList[index];
  states.appendChild(options);
}


// let valor = '10/02/21';
// let valorArray = valor.split('/');
// console.log(valorArray);

let valorData = document.getElementById('date').value;
let valorArray2 = valorData.split('/');
let botao = document.getElementById('btn');
let arrayData = [];

botao.addEventListener('click', function(event) {
  arrayData = valorArray2;
  return `${arrayData[2]}`;
});


// function validaDate(valor) {
//   nova = valor.split('/');
//   let dia = nova[0];
//   let mes = nova[1];
//   let ano = nova[2];

//   return `${dia} ${mes} ${ano} `;

//   // let data_array = valor.split('/');
//   // let dia = data_array[0];
//   // let mes = data_array[1];
//   // let ano = data_array[2];

//   // return console.log(nova);
//   return ` ${dia}`;
//   // console.log(mes);
//   // console.log(ano);
// }



botao.addEventListener('click', function (e) {
  e.preventDefault();
});

// let data = '10/02/2021';
// let barra = '/';

// // console.log(nova);
// validaDate(nova, barra);





//+++++++++++++++++++++++

// const separador = input.value.split('/');
// const dia = separador[0];
// const mes = separador[1];
// const ano = separador[2];
// console.log(separador[0]);

// function verificaData() {
//   let diaInicial = document.getElementById('date');

// }