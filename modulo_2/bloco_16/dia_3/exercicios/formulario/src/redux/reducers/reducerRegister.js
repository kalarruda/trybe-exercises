import { ADD_REGISTER } from "../actions/actionLogin";
import { DELETE_REGISTER } from "../actions/actionLogin";

const INITIAL_STATE = [];

export const addRegister = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_REGISTER:
      return [...state, action.payload]
    case DELETE_REGISTER:
      return state.filter((filtro) => filtro !== action.payload)
    default:
      return state;
  }
}
