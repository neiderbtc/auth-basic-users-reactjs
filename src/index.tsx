import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import AuthState from './context/AuthState';

ReactDOM.render(
    <AuthState>
      <App />
    </AuthState>,
  document.getElementById('root')
);
