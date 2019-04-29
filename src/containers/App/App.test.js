import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', () => {

  it('should contain an h1 with Hello', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toContain('Hello')
  })
})