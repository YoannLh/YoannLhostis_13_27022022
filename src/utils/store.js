import { createStore, combineReducers } from 'redux'
import { userReducer } from '../features/user'
import rememberMeReducer from '../features/rememberMe'

const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducer = combineReducers({
    user: userReducer,
    rememberMe: rememberMeReducer,
})

export const store = createStore(reducer, reduxDevtools)
