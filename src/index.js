import React from 'react';
import ReactDOM from 'react-dom/client';
import './galeria.css';
import Principia from './Principia';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

export { Deuses } from './Deuses';
export { Outros } from './Outros';
export { Inimigos } from './Inimigos';
export { Jogadores } from './Jogadores';
export { Lugares } from './Lugares';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Principia />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
