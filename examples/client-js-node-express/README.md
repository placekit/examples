# Address search Express API route with PlaceKit JS Client

Address search API routes with [Express](https://expressjs.com) router and [PlaceKit JS Client](https://github.com/placekit/client-js).

## Run

See [root README](../../README.md) for installation process.

```sh
npm run dev -w=client-js-node-express

curl -l -X POST 'http://localhost:3000/address'
  -H 'Content-Type: application/json' \
  -d '{ "query": "42 avenue Champs-Élysées Paris" }'

curl -l -X POST 'http://localhost:3000/city'
  -H 'Content-Type: application/json' \
  -d '{ "query": "New York" }'
```

And your server will be listening on http://localhost:3000.
