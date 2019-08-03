import React from 'react';
import { shallow } from 'enzyme';

import ListingHeader from '../listing-header';

describe('<ListingHeader/>', () => {
  const props = {
    title: 'Audi a6'
  };

  it('renders ListingHeader', () => {

    const wrapper = shallow(<ListingHeader {...props}/>);

    expect(wrapper).toBeDefined();

    expect(wrapper.find('h3').length).toBe(1);
  });
});
