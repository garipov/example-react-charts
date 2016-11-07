import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

const storeEnhancers = [
  applyMiddleware(thunk, logger)
];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const finalCreateStore = compose(...storeEnhancers)(createStore);

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};
