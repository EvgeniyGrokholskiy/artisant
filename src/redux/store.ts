import {combineReducers, createStore} from 'redux';
import {appReducer, IInitialState} from "./appReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export interface IStore {
    app: IInitialState,
}

const reducer = combineReducers({
    app: appReducer
})

export const store = createStore(reducer, composeWithDevTools())