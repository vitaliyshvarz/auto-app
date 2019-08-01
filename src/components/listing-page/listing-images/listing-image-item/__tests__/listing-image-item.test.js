import React from 'react';
import { shallow } from 'enzyme';

import ListingImageItem from '../listing-image-item';
import ListingImageModal from '../listing-image-modal/listing-image-modal';

describe('ListingImageItem', () => {
  const listing = {
    title: 'Some titile',
    images: [{
      uri: '123'
    }, {
      uri: '123'
    }]
  };
  const wrapper = shallow(<ListingImageItem listingImage={listing.images[0]} carTitle={listing.title}/>);

  it('renders listing image item', () => {
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.listing-image-thumb').length).toBe(1);
    expect(wrapper.find(ListingImageModal).length).toBe(1);
  });

  it('should toggle ListingImageModal', () => {
    expect(wrapper.find(ListingImageModal).props().isOpen).toBe(false);

    wrapper.find('.listing-picture').simulate('click');

    expect(wrapper.find(ListingImageModal).props().isOpen).toBe(true);
  });
});
