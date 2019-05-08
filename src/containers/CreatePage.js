import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  background: papayawhip;
  display: flex;
  align-items: center;
  padding: 5%;
`

const TripNameInput = styled.input`
  background: 0;
  border: 0;
  font-size: 4.2rem;
  font-style: italic;
  text-align: center;
  outline: 0;

  &:focus {
    font-style: normal;
  }
`

const CreatePage = ({ trip, startDate, endDate, handleStartDateChange, handleEndDateChange, handleLocation, handleFormSubmit }) => {
  return (
    <Container>
      <TripNameInput type="text" placeholder="Trip Name" />
      <TripForm
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        handleLocation={handleLocation}
        handleFormSubmit={handleFormSubmit}
      />

      {trip.length > 0 &&
        <ul>
          {trip.map((check, i) => {
            return <li key={i}>{check.location.name} from {check.from.toUTCString()} to {check.to.toUTCString()}</li>
          })}
        </ul>
      }

    </Container>
  )
}

export default CreatePage