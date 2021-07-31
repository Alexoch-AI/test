import { createStore, applyMiddleware } from 'redux'
import initState from './initState'
import peopleReducer from './reducers/peopleReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(peopleReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))

export default store
