import React from 'react';
import ReactDOM from 'react-dom/client';

import 'shared/global.css'; // load tailwindcss
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';

import AddressForm from './AddressForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="max-w-md mx-auto">
      <AddressForm />
    </main>
  </React.StrictMode>,
);
