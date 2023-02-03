import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HorarioProvider } from './context/HorarioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HorarioProvider>
      <App />
    </HorarioProvider>
  </React.StrictMode>
);