import React from 'react'
import { CheckpointCard } from '../components/CheckpointCard'
import { shallow } from 'enzyme'

describe('CheckpointCard component', () => {

  let props = {
    checkpoint: {
      location: {
        name: 'Paris'
      },
      startDate: '01/02/2018',
      endDate: '01/02/2018'
    },
    deleteCheckpoint: jest.fn()
  }

  let component
  let wrapper

  beforeEach(() => {
    component = shallow(<CheckpointCard {...props} />)
    wrapper = component.find('[data-test="CardContainer"]')
  })

  test('should have a wrapper', () => {
    expect(wrapper.length).toBe(1)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should display the correct location name in LocationName element', () => {
    const element = wrapper.find('[data-test="LocationName"]')
    expect(element.text()).toBe('Paris')
  })

  test('should properly display and format the right date string', () => {
    const element = wrapper.find('[data-test="LocationDate"]')
    expect(element.text()).toBe('01/02/2018')
  })

  test('should have a button element', () => {
    const element = wrapper.find('[data-test="DeleteButton"]')
    expect(element.length).toBe(1)
  })

  test('should call the right click handler when clicking button', () => {
    const element = wrapper.find('[data-test="DeleteButton"]')
    element.simulate('click')
    expect(props.deleteCheckpoint).toHaveBeenCalled()
  })
})