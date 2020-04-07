import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root'
import Expenses from './Expenses';

let wrapper;

describe('<Expenses />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Expenses />
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the <Expenses /> section', () => {
    expect(wrapper.find(Expenses).length).toBe(1)
  })
})