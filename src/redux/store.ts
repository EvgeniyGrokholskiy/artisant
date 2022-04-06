import {appReducer} from "./appReducer";
import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";


const reducer = combineReducers({
    app: appReducer
})

export const store = createStore(reducer, composeWithDevTools())