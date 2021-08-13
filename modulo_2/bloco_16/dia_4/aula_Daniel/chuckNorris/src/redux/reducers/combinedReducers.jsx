import { combineReducers } from 'redux';
import { reducerLogin } from './reducerLogin';
import { jokeReducer } from './reducerJoke';

export const rootReducers = combineReducers({ reducerLogin, jokeReducer });
