/*eslint no-console: ["error", { allow: ["error"] }] */
import axios from 'axios';

import { API_DUMMY_LISTING_URL } from '../constants';

const listingApi = {
  getDummyListing: async function () {
    try {
      const response = await axios.get(API_DUMMY_LISTING_URL);

      if (response && response.data) {
        return response.data;
      }

      throw response.code;

    } catch (err) {
      console.error('Failed to load dummy listing', err);

      return;
    }
  }
};

export default listingApi;
