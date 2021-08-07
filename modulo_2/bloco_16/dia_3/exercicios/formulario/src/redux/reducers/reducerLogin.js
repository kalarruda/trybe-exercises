import { ADD_EMAIL } from "../actions/actionLogin";

const INITIAL_STATE = {
  // email: '',
  // password: '',
  // pode ser com esses objetos ou sem já que vão ser adicionados dentro de clients.js np mapStateToProps
}

export const addInfo = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_EMAIL:
      return action.payload;
    default:
      return state;
  }
}
