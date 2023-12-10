# Address autocomplete with countries whitelist with PlaceKit Autocomplete JS

Address autocomplete with [PlaceKit Autocomplete JS](https://github.com/placekit/autocomplete-js) and a custom country selector to constrain the list of available countries.

In some use-cases, you may want control over the list of allowed countries. Our built-in country selector is actually a country search and we do not support whitelists (nor blacklists) at the moment. Therefore we suggest this example as a workaround.

**NOTE:** We recommend not whitelisting the countries and checking for country availability after submitting form, so that you get insights about which countries your website is being accessed from.

## Run

See [root README](../../README.md) for installation process.

```sh
npm run dev -w=autocomplete-js-countries-whitelist
```

And your project will be served at http://localhost:5173.
