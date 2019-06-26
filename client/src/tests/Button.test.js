import React from 'react'
import { shallow } from 'enzyme'
import Button from '../components/Button'


describe('Button Component', () => {

  describe('when it has props', () => {

    const props = {
      children: 'Hello',
      big: true,
      disabled: false,
      handleClick: jest.fn()
    }

    let component
    let wrapper

    beforeEach(() => {
      component = shallow(<Button {...props} />)
      wrapper = component.find('[data-test="Button"]')
    })

    test('should exist', () => {
      expect(wrapper.length).toBe(1)
    })

    test('should renders correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    test('should render the correct text', () => {
      expect(wrapper.text()).toBe(props.children)
    })

    test('should render with correct props', () => {
      expect(wrapper.prop('big')).toBe(true)
      expect(wrapper.prop('disabled')).toBe(false)
    })

    test('should call the right click handler', () => {
      wrapper.simulate('click')
      expect(props.handleClick).toHaveBeenCalled()
    })
  })


  describe('when it has NO props', () => {

    let component
    let wrapper

    beforeEach(() => {
      component = shallow(<Button />)
      wrapper = component.find('[data-test="Button"]')
    })

    test('should render with correct default text', () => {
      expect(wrapper.text()).toBe('Button')
    })

    test('should renders correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })


    test('should assign the default props', () => {
      expect(wrapper.prop('big')).toBe(false)
      expect(wrapper.prop('disabled')).toBe(false)
    })
  })
})