import React from 'react'
import PlacesInput from './PlacesInput'
import DateInput from './DateInput'
import styled from 'styled-components'

const InputsContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TripForm = ({ startDate, endDate, handleStartDateChange, handleEndDateChange }) => {
  return (
    <div>
      <InputsContainer>
        <PlacesInput />
      </InputsContainer>
      <InputsContainer>
        <DateInput
          placeholderText="From"
          selectedDate={startDate}
          handleDateChange={handleStartDateChange}
        />
        <DateInput
          placeholderText="To"
          selectedDate={endDate}
          handleDateChange={handleEndDateChange}
        />
      </InputsContainer>
    </div>
  )
}

export default TripForm