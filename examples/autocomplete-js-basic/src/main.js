import placekitAutocomplete from '@placekit/autocomplete-js';

import 'shared/global.css'; // load tailwindcss
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';

const pka = placekitAutocomplete(import.meta.env.VITE_PLACEKIT_API_KEY, {
  target: '#placekit-input',
});
