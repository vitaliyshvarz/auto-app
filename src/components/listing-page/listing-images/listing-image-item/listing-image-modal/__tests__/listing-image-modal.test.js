import React from 'react';
import { mount } from 'enzyme';

import ListingImageModal from '../listing-image-modal';

describe('ListingImageModal', () => {
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'root');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  const props = {
    imageUri: 'uri',
    imageTitle: 'title',
    onClick: jest.fn(),
    isOpen: true
  };
  const wrapper = mount(<ListingImageModal {...props}/>);

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders listing-image-modal item', () => {
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.listing-image-modal').length).toBe(1);
  });
});
