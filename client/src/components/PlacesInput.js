import React from 'react'
import AlgoliaPlaces from 'algolia-places-react'
import '../styles/algoliaplaces.css'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`

const PlacesInput = ({ handleLocation, handleClear }) => {
  return (
    <div>
      <Label data-test='Label'>Location (cities, adresses, ...)</Label>
      <AlgoliaPlaces
        data-test="AlgoliaInput"
        placeholder='eg. Paris, Ile-de-France, France'

        options={{
          appId: process.env.REACT_APP_ALGOLIA_APP_ID,
          apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
          // Other options from https://community.algolia.com/places/documentation.html#options
        }}

        onChange={handleLocation}

        onSuggestions={''/*({ rawAnswer, query, suggestions }) =>
          console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')*/}

        onCursorChanged={''/*({ rawAnswer, query, suggestion, suggestonIndex }) =>
          console.log('Fired when arrows keys are used to navigate suggestions.')*/}

        onClear={handleClear}

        onLimit={''/*({ message }) =>
          console.log('Fired when you reached your current rate limit.')*/}

        onError={''/*({ message }) =>
          console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')*/}
      />
    </div>
  )
}

PlacesInput.propTypes = {
  handleLocation: PropTypes.func
}

export default PlacesInput