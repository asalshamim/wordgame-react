import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './components/Context/index';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
