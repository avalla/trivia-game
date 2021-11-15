import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';

const reducer = combineReducers(reducers);

function render(ui, { preloadedState = {}, store = createStore(reducer, preloadedState), ...renderOptions } = {}) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return React.createElement(Router, null, React.createElement(Provider, { store }, children));
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
