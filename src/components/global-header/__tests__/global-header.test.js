import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalHeader from '../global-header';

describe('GlobalHeader', () => {
  const wrapper = mount(
    <Router>
      <GlobalHeader />
    </Router>
  );

  it('renders GlobalHeader page', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders nav', () => {
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('renders topMenu', () => {
    expect(wrapper.find('#topMenu').length).toBe(1);
  });

  describe('navbar-toggler button', () => {

    it('renders navbar-toggler button', () => {
      expect(wrapper.find('.navbar-toggler').length).toBe(1);
    });

    it('toggles topMenu', () => {
      expect(wrapper.find('.navbar-collapse').hasClass('show')).toBe(false);

      wrapper.find('.navbar-toggler').simulate('click');

      expect(wrapper.find('.navbar-collapse').hasClass('show')).toBe(true);
    });
  });
});
