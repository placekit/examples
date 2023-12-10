import React from 'react';
import ReactDOM from 'react-dom/client';

import 'shared/global.css'; // load tailwindcss
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="flex justify-center">
      <App />
    </main>
  </React.StrictMode>,
);
