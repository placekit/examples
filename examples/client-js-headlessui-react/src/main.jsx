import React from 'react';
import ReactDOM from 'react-dom/client';

import 'shared/global.css'; // load tailwindcss

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
