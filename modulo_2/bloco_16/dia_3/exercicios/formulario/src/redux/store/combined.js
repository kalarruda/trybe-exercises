import { combineReducers } from "redux";
import { addInfo } from "../reducers/reducerLogin";
import { addRegister } from "../reducers/reducerRegister";

export const rootReducers = combineReducers({ addInfo, addRegister });
