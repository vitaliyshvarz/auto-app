import React from 'react';
import { shallow } from 'enzyme';

import AutoApp from '../AutoApp';

it('renders without crashing', () => {
  const component = shallow(<AutoApp />);
  expect(component).toBeDefined();
});
