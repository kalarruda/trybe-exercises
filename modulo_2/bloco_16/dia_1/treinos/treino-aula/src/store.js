// import { number } from 'prop-types';
import { createStore } from 'redux';

export function increaseNumber() {
  return { type: 'INCREASE' };
}

export function decreaseNumber() {
  return { type: 'DECREASE' };
}

const INITIAL_STATE = { number: 0 };

function mudaReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'INCREASE':
      return { number: state.number + 1 };

    case 'DECREASE':
      return { number: state.number - 1 };
    
    default:
      return INITIAL_STATE;
  }
}

const store = createStore(mudaReducer);
// 'createStore' é função para criar a store que vem do Redux
export default store;

// import { createStore } from "redux";

// export function increaseNumber() {
//   return { type: "INCREASE" };
// }

// export function decreaseNumber() {
//   return { type: "DECREASE" };
// }

// const INITIAL_STATE = { number: 0 };

// const store = createStore((state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { number: state.number + 1 };

//     case "DECREASE":
//       return { number: state.number - 1 };

//     default:
//       return state;
//   }
// });

// export default store;

// ============================================

// const produtos = [ 
//   { nome: 'shampo', valor: 1.30 },
//   { nome: 'creme', valor: 5.30 },
//   { nome: 'sabonete', valor: 10.30 },
//   { nome: 'bucha', valor: 7.30 },
// ];

// // const lista = produtos.filter((e ) => e.nome === /CREME/i  || e.valor >= 9 )
// const devedores = [
//   { valor: -14, nome: 'joao', devedor: true },
//   { valor: -100, nome: 'maria', devedor: true },
//   { valor: 31, nome: 'sergio', devedor: false },
//   { valor: -19, nome: 'cintia', devedor: true },
//   { valor: 14, nome: 'felipe', devedor: false },
// ]
// const total = devedores.reduce((acumulador, atual) => {
//   if (atual.devedor) {
//     return acumulador + atual.valor;
//   }
//   // console.log(acumulador);
//   return acumulador;
// }, 0)
// console.log(total)

// // const total = produtos.reduce((acc, cur) => {
// //   console.log('acumulador',acc);
// //   console.log('atual', cur);
// //   return acc;
// // }, 0)

// const texto1 = 'assmi que o dia amanhADASDASDecer lá no mar alto da paixão';

// // const letras = texto.split(' ').join('').toLowerCase();
// const texto = [...texto1]
// // console.log(texto)
// const teste = texto.filter((e) => e !== ' ')
// // console.log(teste)

// const contador = teste.reduce((acc, cur) => {
//   if(!acc[cur]) {
//     acc[cur] = 1;
//     // console.log(acc[cur]);
//     return acc;
//   }
//   acc[cur] += 1;
//   return acc;
// }, {})
// console.log(contador)


 
