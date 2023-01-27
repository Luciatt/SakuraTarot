import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AllCards from './components/AllCards';
import reportWebVitals from './reportWebVitals';
import AllCards from './components/AllCards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tablero />
    <AllCards />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
