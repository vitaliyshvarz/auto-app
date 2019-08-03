import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import listingApi from '../../../api/listing/listing';
import ListingPage from '../listing-page';
import ListingHeader from '../listing-header/listing-header';
import ListingImages from '../listing-images/listing-images';

describe('<ListingPage />', () => {
  const wrapper = shallow(<ListingPage />);

  it('renders ListingHeader and ListingImages', () => {
    expect(wrapper.find(ListingHeader).length).toBe(1);
    expect(wrapper.find(ListingImages).length).toBe(1);
  });

  it('calls listingApi.getDummyListing on mount', () => {
    jest.spyOn(listingApi, 'getDummyListing');

    shallow(<ListingPage />);

    expect(listingApi.getDummyListing).toHaveBeenCalled();
  });

  it('updates the state when listing received', async () => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
      data: {
        title: 'Super car',
        images: []
      }
    }));

    const wrapper = shallow(<ListingPage />);
    const instance = wrapper.instance();

    try {
      await instance.componentDidMount();
    } catch (err) {
      throw new Error('error fetching dummy listing', err);
    }

    expect(listingApi.getDummyListing).toHaveBeenCalled();
    expect(typeof wrapper.state().listing.title).toBe('string');
    expect(Array.isArray(wrapper.state().listing.images)).toBe(true);
  });
});
