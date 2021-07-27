import { createStore } from 'redux';

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

export function nextColor() {
  return { type: 'NEXT_COLOR' };
}

export function previousColor() {
  return { type: 'PREVIOUS_COLOR'};
}
//função que foi disponibilizada no exercício ========
export function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return {
    colors: cor,
    type: 'RANDOM_COLOR'};
}

function reducer(state = ESTADO_INICIAL, action) {
  switch(action.type){
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
        // se index é igual a 5 então ele recebe valor 0 senão recebe valor atual mais 1
      };

    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
        // se index é igual a 0 então recebe 5 senão recebe valor igual atual menos 1
      };

    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };

    default:
      return state; 
  }
}

const store = createStore(reducer);
export default store;