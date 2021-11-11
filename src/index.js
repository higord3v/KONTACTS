import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rotas from './Rotas';

ReactDOM.render(
  <React.StrictMode>
    <Rotas />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
