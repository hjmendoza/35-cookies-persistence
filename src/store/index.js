import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-react';

import authReducer from './auth';

const appReducer = combineReducers({authState: authReducer});

const composeEnahncers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnahncers(applyMiddleware(thunk)));