import placekitAutocomplete from '@placekit/autocomplete-js';

import 'shared/global.css'; // load tailwindcss
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';

// instantiate PlaceKit Autocomplete JS
const pka = placekitAutocomplete(import.meta.env.VITE_PLACEKIT_API_KEY, {
  target: '#placekit-input',
  types: ['city'],
  // types: ['city', 'country'], // add 'country' to show both world cities and countries
  countrySelect: false,
});

// clear input on click
const clearButton = document.querySelector('#placekit-clear');
clearButton.addEventListener('click', pka.clear);

// hide clear button when input is empty
pka.on('empty', (empty) => {
  clearButton.setAttribute('aria-hidden', empty);
});
