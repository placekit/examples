import { PlaceKit } from '@placekit/autocomplete-react';

const App = () => {
  return (
    <div className="flex items-center justify-center">
      <PlaceKit
        apiKey={import.meta.env.VITE_PLACEKIT_API_KEY}
        geolocation={false}
        options={{
          types: ['city'],
          // types: ['city', 'country'], // add 'country' to show both world cities and countries
          countrySelect: false,
        }}
        className="w-96"
      />
    </div>
  );
};

export default App;
