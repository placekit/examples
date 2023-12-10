import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env.local' });

import placekit from '@placekit/client-js';

const pk = placekit(process.env.VITE_PLACEKIT_API_KEY, {
  maxResults: 5,
});

const [query] = process.argv.slice(2);

try {
  const res = await pk.search(query || '');
  console.log(res);
} catch (err) {
  console.error(err);
}
