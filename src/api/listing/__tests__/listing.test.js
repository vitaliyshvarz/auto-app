import axios from 'axios';

import listingApi from '../listing';
import { API_DUMMY_LISTING_URL } from '../../constants';

it('should have .getDummyListing method', () => {
  expect(listingApi.getDummyListing).toBeDefined();
});

describe('getDummyListing', () => {

  it('should make a get request to API_DUMMY_LISTING_URL', async (done) => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
      data: {
        title: 'Super car'
      }
    }));

    const listing = await listingApi.getDummyListing();

    expect(typeof listing.title).toBe('string');

    expect(axios.get).toHaveBeenCalledWith(API_DUMMY_LISTING_URL);

    done();
  });

  it('should log an error when no data is returned', async (done) => {
    const axiosSpy = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ code: 404 }));
    jest.spyOn(global.console, 'error').mockImplementation(() => {});

    await listingApi.getDummyListing();

    expect(global.console.error).toHaveBeenCalledWith('Failed to load dummy listing', 404);

    done();

    axiosSpy.mockReset();
    axiosSpy.mockRestore();
  });

});
