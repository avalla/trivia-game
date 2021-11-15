import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(Routes, null)),
  document.getElementById('root')
);

reportWebVitals();
