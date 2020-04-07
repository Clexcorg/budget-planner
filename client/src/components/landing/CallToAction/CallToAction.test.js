import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Root from 'components/Root'
import CallToAction from './CallToAction';

let wrapper;

describe('<CallToAction />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Router>
          <CallToAction />
        </Router>
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the <CallToAction /> section', () => {
    expect(wrapper.find(CallToAction).length).toBe(1)
  })
})