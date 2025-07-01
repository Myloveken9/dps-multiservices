import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom'; // ← ajoute ceci

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>      {/* ← enveloppe ici */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
