import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Routes from './Routes';
import store from '../store';
import 'bulma/css/bulma.css';
import Loader from '../components/Loader';

const persistor = persistStore(store, null, () => {
  console.log('Store rehydrated');
});

function Application() {
  return (
    <PersistGate persistor={persistor} loading={<Loader />}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  );
}

Application.defaultProps = {};
Application.propTypes = {};
export default Application;
