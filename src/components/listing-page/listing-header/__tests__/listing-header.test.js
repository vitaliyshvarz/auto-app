import React from 'react';
import { shallow } from 'enzyme';

import ListingHeader from '../listing-header';

it('renders ListingHeader', () => {
  const wrapper = shallow(<ListingHeader title='Test Car'/>);

  expect(wrapper).toBeDefined();

  expect(wrapper.find('h3').length).toBe(1);
});
