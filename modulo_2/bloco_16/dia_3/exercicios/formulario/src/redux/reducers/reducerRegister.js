import { ADD_REGISTER } from "../actions/actionLogin";

const INITIAL_STATE = [];

export const addRegister = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_REGISTER:
      return [...state, action.payload]
    default:
      return state;
  }
}
