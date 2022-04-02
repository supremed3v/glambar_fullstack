import { combineReducers } from "redux";
import itemReducer from "./itemReducer"; 

const reducer = combineReducers({
    item: itemReducer
})