import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'
import LocationCard from '../components/LocationCard'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
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

const CheckpointsList = styled.ul`
  list-style: none;
  margin: 0 auto;
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
        <CheckpointsList>
          {trip.map((checkpoint, i) => {
            return <LocationCard key={i} checkpoint={checkpoint} />
          })}
        </CheckpointsList>
      }

    </Container>
  )
}

export default CreatePage