import React from 'react'
import Button from './Button'
import { shallow } from 'enzyme'

describe('<Button />', () => {
  const testProps = {
    text: ''
  }

  it('should exist', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toHaveLength(1)
  })

  it('should have a button container', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('ButtonContainer')).toHaveLength(1)
  })

  it('should render text props inside the button container', () => {
    const wrapper = shallow(<Button {...testProps} text='Click Me' />)
    expect(wrapper.find('ButtonContainer').text()).toContain('Click Me')
  })
})