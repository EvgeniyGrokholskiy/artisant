import thunk from 'redux-thunk'
import {appReducer, IInitialState} from './appReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, combineReducers, createStore} from 'redux'


const reducer = combineReducers({
    app: appReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export interface IRootState {
    app: IInitialState
}

export type AppDispatch = typeof store.dispatch