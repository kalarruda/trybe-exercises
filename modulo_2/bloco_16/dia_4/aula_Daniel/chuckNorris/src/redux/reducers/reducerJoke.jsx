import { GET_API, GET_API_SUCCESS, GET_API_ERROR } from "../actions/actionApi";

const INITIAL_STATE = {
  isLoading: false,
  jokes: '',
  error: '',
}

export const jokeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_API:
    return {
      ...state,
      isLoading: true,
    }
    case GET_API_SUCCESS:
      return {
        ...state,
        jokes: action.jokes,
        isLoading: false,
      }
    case GET_API_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default: return state;
  }
}