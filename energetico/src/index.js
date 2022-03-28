import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Imposto from './components/Imposto';

ReactDOM.render(
  <React.StrictMode>
    <Imposto quantidade={400} valor={4.50} />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);