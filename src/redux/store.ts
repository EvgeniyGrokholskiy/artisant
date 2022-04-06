import {appReducer} from './appReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    app: appReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch