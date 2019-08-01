import React from 'react';
import { shallow, mount } from 'enzyme';

import listingApi from '../../../api/listing/listing';
import ListingPage from '../listing-page';
import ListingHeader from '../listing-header/listing-header';
import ListingImages from '../listing-images/listing-images';

describe('ListingHeader', () => {
  const wrapper = shallow(<ListingPage />);

  it('renders ListingHeader and ListingImages', () => {
    expect(wrapper.find(ListingHeader).length).toBe(1);
    expect(wrapper.find(ListingImages).length).toBe(1);
  });

  it('calls listingApi.getDummyListing on mount', () => {
    jest.spyOn(listingApi, 'getDummyListing');

    mount(<ListingPage />);

    expect(listingApi.getDummyListing).toHaveBeenCalled();
  });

  // here we do not mock the request responce to be sure that the
  // dummy API always works and sends us data that we expect
  it('updates the state when listing received', async () => {
    const wrapper = shallow(<ListingPage />);
    const instance = wrapper.instance();

    try {
      await instance.componentDidMount();
    } catch (err) {
      throw new Error('error fetching dummy listing', err);
    }

    expect(typeof wrapper.state().listing.title).toBe('string');
    expect(Array.isArray(wrapper.state().listing.images)).toBe(true);
  });
});
