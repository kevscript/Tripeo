import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'
import Button from '../components/Button'
import LocationCard from '../components/LocationCard'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
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
  width: 90%;
  max-width: 800px;
  list-style: none;
  margin: 0 auto;
`

const CreatePage = ({ tripNameRef, location, trip, startDate, endDate, handleStartDateChange, handleEndDateChange, handleLocation, handleFormSubmit }) => {
  return (
    <Container>
      <TripNameInput ref={tripNameRef} type="text" placeholder="Trip Name" />
      {trip.length > 0 &&
        <CheckpointsList>
          {trip.map((checkpoint, i) => {
            return <LocationCard key={i} checkpoint={checkpoint} />
          })}
        </CheckpointsList>
      }
      {trip.length > 0 &&
        <Button big>Weather It</Button>
      }
      <TripForm
        location={location}
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        handleLocation={handleLocation}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  )
}

export default CreatePage