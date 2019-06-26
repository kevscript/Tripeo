import React from 'react'
import CheckpointsList from '../components/CheckpointsList'
import { shallow } from 'enzyme'

describe('CheckpointsList component', () => {

  describe('when the list has items', () => {
    let props = {
      checkpoints: [
        { startDate: '01/02/2018' },
        { startDate: '04/02/2018' },
        { startDate: '07/02/2018' }],
    }
    let component
    let wrapper

    beforeEach(() => {
      component = shallow(<CheckpointsList {...props} />)
      wrapper = component.find('[data-test="List"]')
    })

    test('should contain a list', () => {
      expect(wrapper.length).toBe(1)
    })

    test('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    test('should render an item in the list for every checkpoint', () => {
      expect(wrapper.children()).toHaveLength(3)
    })

    test('should chronogically pass the right checkpoint to the right child item', () => {
      const children = wrapper.children()
      children.map((el, i) => {
        expect(el.prop('checkpoint')).toEqual(props.checkpoints[i])
      })
    })
  })

  describe('when the list is empty', () => {
    let props = {
      checkpoints: []
    }
    let component
    let wrapper

    beforeEach(() => {
      component = shallow(<CheckpointsList {...props} />)
      wrapper = component.find('[data-test="List"]')
    })

    test('should contain a list', () => {
      expect(wrapper.length).toBe(1)
    })

    test('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    test('the list shouldnt render without child element', () => {
      expect(wrapper.children()).toHaveLength(0)
    })
  })
})