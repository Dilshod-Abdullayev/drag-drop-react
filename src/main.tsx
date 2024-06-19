
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import '@atlaskit/css-reset';
const consoleError = console.error.bind(console);
console.error = (message, ...args) => {
  if (message.includes('Support for defaultProps will be removed from memo components')) {
    return;
  }
  consoleError(message, ...args);
};
import './index.css'
import store from './context/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)