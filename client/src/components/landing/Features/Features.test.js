import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Root from 'components/Root'
import Features from './Features';

let wrapper;

describe('<Features />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Router>
          <Features />
        </Router>
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the <Features /> section', () => {
    expect(wrapper.find(Features).length).toBe(1)
  })
})