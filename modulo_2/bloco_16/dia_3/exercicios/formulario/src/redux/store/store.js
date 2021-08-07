import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './combined';

const store = createStore(rootReducers, composeWithDevTools());

export default store;
