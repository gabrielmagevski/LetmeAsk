import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from 'firebase/app';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


