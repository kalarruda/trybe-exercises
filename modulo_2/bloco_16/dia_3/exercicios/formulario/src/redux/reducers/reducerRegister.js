import { ADD_REGISTER } from "../actions/actionLogin";

const INITIAL_STATE = {
    // email: '',
  // password: '',
  // pode ser com esses objetos ou sem já que vão ser adicionados dentro de clients.js np mapStateToProps
};

export const addRegister = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_REGISTER:
      return action.payload;
    default:
      return state;
  }
}
