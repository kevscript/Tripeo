import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'
import Button from '../components/Button'
import LocationCard from '../components/LocationCard'
import { connect } from 'react-redux'
import { changeTripName } from '../actions'

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

const CreatePage = ({ trip, changeTripName }) => {

  const handleTripName = (e) => {
    changeTripName(e.target.value)
  }

  return (
    <Container>
      <TripNameInput
        onChange={handleTripName}
        type="text"
        placeholder="Trip Name"
        value={trip.name}
      />
      {trip.checkpoints.length > 0 &&
        <CheckpointsList>
          {trip.checkpoints.map((checkpoint, i) => {
            return <LocationCard key={i} checkpoint={checkpoint} />
          })}
        </CheckpointsList>
      }
      {trip.checkpoints.length > 0 &&
        <Button big>Weather It</Button>
      }
      <TripForm />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  trip: state.trip
})

const mapDispatchToProps = {
  changeTripName
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)