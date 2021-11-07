import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store