import axios from 'axios';

import listingApi from '../listing';

it('should have .getDummyListing method', () => {
  expect(listingApi.getDummyListing).toBeDefined();
});

describe('getDummyListing', () => {

  it('should make a get request to API_DUMMY_LISTING_URL', async (done) => {
    const listing = await listingApi.getDummyListing();

    expect(typeof listing.title).toBe('string');

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
