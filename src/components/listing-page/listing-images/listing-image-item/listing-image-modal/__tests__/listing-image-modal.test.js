import React from 'react';
import { mount } from 'enzyme';

import ListingImageModal from '../listing-image-modal';

describe('ListingImageModal', () => {
  const props = {
    imageUri: 'uri',
    imageTitle: 'title',
    onClick: jest.fn(),
    isOpen: true
  };
  const wrapper = mount(<ListingImageModal {...props}/>);

  it('renders listing-image-modal item when isOpen is true', () => {
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.listing-image-modal').length).toBe(1);
  });

  it('NOT renders listing-image-modal item when isOpen is false', () => {
    const newProps = {
      ...props,
      isOpen: false
    };

    const wrapper = mount(<ListingImageModal {...newProps}/>);

    expect(wrapper.find('.listing-image-modal').length).toBe(0);
  });

  it('removes modal from root on unmount', () => {
    const wrapper = mount(<ListingImageModal {...props}/>);

    expect(wrapper.find('.listing-image-modal').length).toBe(1);

    wrapper.unmount();

    expect(wrapper.find('.listing-image-modal').length).toBe(0);
  });
});
