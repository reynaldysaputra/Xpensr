import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './states/store';
import './index.css';
import ScrollObserver from './utils/scrollObserver';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ScrollObserver>
        <App />
      </ScrollObserver>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
