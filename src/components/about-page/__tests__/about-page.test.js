import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../about-page';

it('renders about page', () => {
  const wrapper = shallow(<AboutPage />);
  expect(wrapper).toBeDefined();
});
