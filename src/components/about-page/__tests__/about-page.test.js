import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../about-page';

describe('<AboutPage />', () => {
  it('renders about page', () => {
    const wrapper = shallow(<AboutPage />);

    expect(wrapper).toBeDefined();
  });
});
