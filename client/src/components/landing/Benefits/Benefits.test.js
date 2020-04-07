import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root'
import Benefits from './Benefits';

let wrapper;

describe('<Benefits />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Benefits />
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the <Benefits /> section', () => {
    expect(wrapper.find(Benefits).length).toBe(1)
  })
})