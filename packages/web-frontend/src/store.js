import { createStore, applyMiddleware, compose } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import localForage from 'localforage';

import reducers from './reducers';

const config = {
  key: 'primary',
  storage: localForage,
  blacklist: ['application'], // Don't persist some stuff
  debug: process.env.NODE_ENV !== 'production',
};
const reducer = persistCombineReducers(config, reducers);

/**
 * Redux store
 */
const store = createStore(
  reducer,
  {}, // initial state
  compose(
    applyMiddleware(),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : (f) => f
  )
);
if (window.Cypress) {
  window.store = store;
}
export default store;
