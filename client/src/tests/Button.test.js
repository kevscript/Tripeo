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
      wrapper = component.find('[data-test="ButtonContainer"]')
    })

    it('should have a container parent', () => {
      expect(wrapper.length).toBe(1)
    })

    it('should render the correct text', () => {
      expect(wrapper.text()).toBe(props.children)
    })

    it('should render with correct props', () => {
      expect(wrapper.prop('big')).toBe(true)
      expect(wrapper.prop('disabled')).toBe(false)
    })

    it('should call the right click handler', () => {
      wrapper.simulate('click')
      expect(props.handleClick).toHaveBeenCalled()
    })
  })
})