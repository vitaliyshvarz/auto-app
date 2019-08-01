import React from 'react';
import { shallow } from 'enzyme';

import AutoApp from '../AutoApp';

it('renders without crashing', () => {
  const wrapper = shallow(<AutoApp />);
  expect(wrapper).toBeDefined();
});
