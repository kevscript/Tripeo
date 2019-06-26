import React from 'react'
import PlacesInput from '../components/PlacesInput'
import { shallow } from 'enzyme'

describe('PlacesInput component', () => {
  let props = {
    handleLocation: jest.fn()
  }
  let component
  let wrapper

  beforeEach(() => {
    component = shallow(<PlacesInput {...props} />)
    wrapper = component.find('div')
  })

  test('should have a wrapper', () => {
    expect(wrapper.length).toBe(1)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have a label element', () => {
    const label = wrapper.find('[data-test="Label"]')
    expect(label.length).toBe(1)
  })

  test('should have the AlgoliaPlaces element', () => {
    const algolia = wrapper.find('[data-test="AlgoliaInput"]')
    expect(algolia.length).toBe(1)
  })

  test('should call the right function on input change', () => {
    const algolia = wrapper.find('[data-test="AlgoliaInput"]')
    algolia.simulate('change')
    expect(props.handleLocation).toHaveBeenCalled()
  })
})