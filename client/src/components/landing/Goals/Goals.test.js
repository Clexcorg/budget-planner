import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root'
import Goals from './Goals';

let wrapper;

describe('<Goals />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Goals />
      </Root>
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the <Goals /> section', () => {
    expect(wrapper.find(Goals).length).toBe(1)
  })
})