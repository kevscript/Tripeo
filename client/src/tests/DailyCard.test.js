import React from 'react'
import DailyCard from '../components/DailyCard'
import { shallow } from 'enzyme'

describe('DailyCard component', () => {

  let props = {
    forecast: {
      daily: {
        data: [
          {
            summary: 'sunny day'
          }
        ]
      }
    },
    cp: {
      timestamp: 1,
      location: {
        name: 'Paris'
      }
    },
    handleClick: jest.fn(),
    open: false
  }

  let component
  let wrapper

  beforeEach(() => {
    component = shallow(<DailyCard {...props} />)
    wrapper = component.find('[data-test="DailyItem"]')
  })

  test('should exist', () => {
    expect(wrapper.length).toBe(1)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should display the right infos', () => {
    const where = wrapper.find('[data-test="Where"]')
    const when = wrapper.find('[data-test="When"]')
    expect(where.length).toBe(1)
    expect(when.length).toBe(1)
    expect(where.text()).toBe('Paris')
    expect(when.text()).toBe("1970-1-1")
  })

  test('should display the right description', () => {
    const text = wrapper.find('[data-test="Desc"]')
    expect(text.length).toBe(1)
    expect(text.text()).toBe('sunny day')
  })

  test('should have an Icon', () => {
    const icon = wrapper.find('[data-test="Icon"]')
    expect(icon.length).toBe(1)
  })
})