import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { city } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(city,
  composeEnhancers(applyMiddleware(thunk))
)
