import React from 'react';
import { shallow } from 'enzyme';

import ListingImages from '../listing-images';
import ListingImageItem from '../listing-image-item/listing-image-item';

it('renders list of listing images', () => {
  const listing = {
    title: 'Some titile',
    images: [{
      uri: '123'
    }, {
      uri: '123'
    }]
  };
  const wrapper = shallow(<ListingImages listing={listing}/>);

  expect(wrapper).toBeDefined();

  expect(wrapper.find(ListingImageItem).length).toBe(listing.images.length);
});
