import React from 'react';
import { shallow } from 'enzyme';

import ListingImages from '../listing-images';
import ListingImageItem from '../listing-image-item/listing-image-item';

describe('<ListingImages />', () => {
  const props = {
    listing: {
      title: 'Audi a8',
      images: [{
        uri: 'https://my-awesome-car-one'
      }, {
        uri: 'https://my-awesome-car-two'
      }]
    }
  };

  it('renders list of listing images', () => {
    const wrapper = shallow(<ListingImages {...props}/>);

    expect(wrapper).toBeDefined();

    const imagesCount = props.listing.images.length;

    expect(wrapper.find(ListingImageItem).length).toBe(imagesCount);
  });
});
