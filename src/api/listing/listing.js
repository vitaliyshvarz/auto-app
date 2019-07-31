/*eslint no-console: ["error", { allow: ["error"] }] */
import axios from 'axios';

import { API_DUMMY_LISTING_URL } from '../constants';

const listingApi = {
  getDummyListing: async function () {
    try {
      const result = await axios.get(API_DUMMY_LISTING_URL);

      if (result) {
        return result.data;
      }

    } catch (err) {
      console.error('Failed to load dummy listing', err);

      return;
    }
  }
};

export default listingApi;
