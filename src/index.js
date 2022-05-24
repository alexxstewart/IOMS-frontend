import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';

const variable = "hello there";

ReactDOM.render(
  <React.StrictMode>
    <Login data={variable}></Login>
  </React.StrictMode>,
  document.getElementById('root')
);
