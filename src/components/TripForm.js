import React from 'react'
import PlacesInput from './PlacesInput'
import DateInput from './DateInput'
import Button from '../components/Button'
import styled from 'styled-components'

const FormContainer = styled.div`
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputsContainer = styled.div`
  width: 400px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TripForm = ({ location, startDate, endDate, handleStartDateChange, handleEndDateChange, handleLocation, handleFormSubmit }) => {
  return (
    <FormContainer>
      <InputsContainer>
        <PlacesInput handleLocation={handleLocation} />
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
      {location && startDate && endDate && 
          <ButtonContainer>
            <Button handleFormSubmit={handleFormSubmit}>Add Checkpoint</Button>
          </ButtonContainer>
      }
    </FormContainer>
  )
}

export default TripForm