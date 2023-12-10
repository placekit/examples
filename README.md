<h1 align="center">
  PlaceKit implementation examples
</h1>

<p align="center">
  <b>Implementation examples for most common stacks and use-cases</b>
</p>

## Installing and running examples

```sh
# clone project and access this example
git clone git@github.com:placekit/examples.git placekit-examples
cd placekit-examples

# install dependencies
npm install

# create .env file
cp .env .env.local
```

Open the `.env.local` file and replace `<your-api-key>` with a PlaceKit API key.

Reminder: **never commit an API key.**

Then run:

```sh
npm run dev -w=<example-dir-name>
```

replacing `<example-dir-name>` with the directory name of the example you want to try.

## Examples index

<!-- prettier-ignore -->
| Description | Environment |
| :---         | :---      |
| [Auto-fill form with address autocomplete](./examples/autocomplete-js-address-form) | vanilla |
| [Basic address autocomplete](./examples/autocomplete-js-basic) | vanilla |
| [Basic address autocomplete](./examples/autocomplete-js-cdn) | cdn, vanilla |
| [Global city search](./examples/autocomplete-js-cities) | vanilla |
| [Countries search](./examples/autocomplete-js-countries) | vanilla |
| [Address autocomplete with countries whitelist](./examples/autocomplete-js-countries-whitelist) | vanilla |
| [Address autocomplete with user's geolocation](./examples/autocomplete-js-geolocation) | vanilla |
| [Address search on map with Leaflet](./examples/autocomplete-js-leaflet) | leaflet, vanilla |
| [Svelte autocomplete component](./examples/autocomplete-js-svelte) | svelte |
| [Address autocomplete with user's geolocation](./examples/autocomplete-js-typescript) | typescript, vanilla |
| [Vue autocomplete component](./examples/autocomplete-js-vue) | vue |
| [Auto-fill form with address autocomplete](./examples/autocomplete-react-address-form) | react |
| [Basic address autocomplete](./examples/autocomplete-react-basic) | react |
| [Global city search](./examples/autocomplete-react-cities) | react |
| [Countries search](./examples/autocomplete-react-countries) | react |
| [Address autocomplete with countries whitelist](./examples/autocomplete-react-countries-whitelist) | react |
| [Address search on map with Leaflet](./examples/autocomplete-react-leaflet) | leaflet, react |
| [Auto-fill form with address autocomplete in React Hook Form](./examples/autocomplete-react-react-hook-form) | react |
| [Auto-fill form with address autocomplete](./examples/autocomplete-react-typescript) | react, typescript |
| [Custom address autocomplete with Algolia Autocomplete](./examples/client-js-algolia-autocomplete) | vanilla |
| [Custom address autocomplete with HeadlessUI React](./examples/client-js-headlessui-react) | react |
| [Custom address autocomplete with HeadlessUI Vue](./examples/client-js-headlessui-vue) | vue |
| [Simple address search request](./examples/client-js-node) | node, vanilla |
| [Simple address search request with ESM](./examples/client-js-node-esm) | node, vanilla |
| [Address search Express API route](./examples/client-js-node-express) | express, node |
| [Simple address search request](./examples/client-js-node-typescript) | node, typescript |

## Notes

- We're only using [TailwindCSS](https://tailwindcss.com) as a convenience for the basic styling of the examples.
- To turn on dark mode on autocomplete, add `.dark` class or `data-theme="dark"` to `<body>` in any autocomplete example.
