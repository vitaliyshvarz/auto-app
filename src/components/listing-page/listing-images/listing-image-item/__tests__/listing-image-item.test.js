import React from 'react';
import { shallow } from 'enzyme';

import ListingImageItem from '../listing-image-item';
import ListingImageModal from '../listing-image-modal/listing-image-modal';

describe('<ListingImageItem />', () => {
  const props = {
    carTitle: 'Audi a4',
    listingImage: {
      uri: 'uri.some.uri'
    }
  };
  const wrapper = shallow(<ListingImageItem {...props}/>);

  it('renders listing image item', () => {
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.listing-image-thumb').length).toBe(1);
    expect(wrapper.find(ListingImageModal).length).toBe(1);
  });

  it('should toggle ListingImageModal', () => {
    expect(wrapper.find(ListingImageModal).props().isOpen).toBe(false);

    wrapper.find('.listing-image').simulate('click');

    expect(wrapper.find(ListingImageModal).props().isOpen).toBe(true);
  });
});
