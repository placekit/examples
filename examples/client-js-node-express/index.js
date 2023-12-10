import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env.local' });

import express from 'express';
import placekit from '@placekit/client-js';

const pk = placekit(process.env.VITE_PLACEKIT_API_KEY);

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Search for addresses
app.post('/address', async (req, res) => {
  const results = await pk.search(req.body.query, {
    types: ['street'],
    maxResults: 5,
  });
  res.json(results.results);
});

// Search for city only
app.post('/city', async (req, res) => {
  const results = await pk.search(req.body.query, {
    types: ['city'],
    maxResults: 2,
  });
  res.json(results.results);
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`);
});
