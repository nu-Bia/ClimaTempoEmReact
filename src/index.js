import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//Se você quiser começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou enviar para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals

reportWebVitals();
