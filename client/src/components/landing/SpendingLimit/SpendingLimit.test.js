import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root'
import SpendingLimit from './SpendingLimit';

let wrapper;

describe('<SpendingLimit />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <SpendingLimit />
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the <SpendingLimit /> section', () => {
    expect(wrapper.find(SpendingLimit).length).toBe(1)
  })
})