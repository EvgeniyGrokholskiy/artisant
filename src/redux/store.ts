import {combineReducers, createStore} from 'redux'
import {appReducer, IInitialState} from "./appReducer";
import {Dispatch} from "react";

export interface IStore {
    app: IInitialState,
    dispatch: Dispatch<any>
}

const reducer = combineReducers({
    app: appReducer
})

export const store: IStore = createStore(reducer)