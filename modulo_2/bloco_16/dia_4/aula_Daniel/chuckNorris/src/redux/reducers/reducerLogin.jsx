import { ADD_DATA_LOGIN } from "../actions/actionLogin";

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const reducerLogin = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_DATA_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      }
    default:
      return state;
  }
}
