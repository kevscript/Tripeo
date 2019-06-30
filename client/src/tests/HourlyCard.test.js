import React from 'react'
import { shallow } from 'enzyme'
import HourlyCard from '../components/HourlyCard'

describe('HourlyCard component', () => {

  const props = {
    data: {
      time: 1559599200,
      temperature: 30,
      humidity: 0.7,
      cloudCover: 0.5,
      windSpeed: 30,
      uvIndex: 2,
      visibility: 5,
      icon: 'partly-cloudy-night'
    },
    timeZone: 'Europe/Paris'
  }

  let component
  let wrapper

  beforeEach(() => {
    component = shallow(<HourlyCard {...props} />)
    wrapper = component.find('[data-test="CardContainer"]')
  })

  test('should exist', () => {
    expect(wrapper.length).toBe(1)
  })

  test('should render all components of data', () => {
    expect(wrapper.find('[data-test="time"]').length).toBe(1)
    expect(wrapper.find('[data-test="humidity"]').length).toBe(1)
    expect(wrapper.find('[data-test="wind"]').length).toBe(1)
    expect(wrapper.find('[data-test="uvIndex"]').length).toBe(1)
    expect(wrapper.find('[data-test="visibility"]').length).toBe(1)
    expect(wrapper.find('[data-test="cloudiness"]').length).toBe(1)
    expect(wrapper.find('[data-test="temperature"]').length).toBe(1)
    expect(wrapper.find('[data-test="icon"]').length).toBe(1)
  })
})