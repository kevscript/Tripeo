import React from 'react'
import { shallow } from 'enzyme'
import DateRange from '../components/DateRange'

describe('DateRange component', () => {

  const props = {
    handleStartDateChange: jest.fn(),
    handleEndDateChange: jest.fn(),
  }

  let component
  let wrapper

  beforeEach(() => {
    component = shallow(<DateRange {...props} />)
    wrapper = component.find('[data-test="RangeContainer"]')
  })

  test('should exist', () => {
    expect(wrapper.length).toBe(1)
  })

  test('should trigger start and end handlers correctly', () => {
    const startRange = component.find('[data-test="startRange"]')
    const endRange = component.find('[data-test="endRange"]')
    startRange.simulate('change')
    expect(props.handleStartDateChange).toHaveBeenCalled()
    endRange.simulate('change')
    expect(props.handleEndDateChange).toHaveBeenCalled()
  })
})