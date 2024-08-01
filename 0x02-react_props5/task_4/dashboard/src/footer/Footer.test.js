// src/Footer/Footer.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
