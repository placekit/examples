import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env.local' });

import PlaceKit from '@placekit/client-js';
import type { PKClient, PKOptions, PKSearchResponse } from '@placekit/client-js';

const options: PKOptions = {
  maxResults: 1,
  countries: ['fr'],
};

const pk: PKClient = PlaceKit(process.env.VITE_PLACEKIT_API_KEY, options);

const [query] = process.argv.slice(2);

(async () => {
  try {
    const res: PKSearchResponse = await pk.search(query || '');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
