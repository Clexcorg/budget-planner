import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Root from 'components/Root'
import Header from './Header';

let wrapper;

describe('<Header />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Router>
          <Header />
        </Router>
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the <Header /> section', () => {
    expect(wrapper.find(Header).length).toBe(1)
  })
})