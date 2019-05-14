import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'
import Button from '../components/Button'
import CheckpointsList from '../components/CheckpointsList'
import { connect } from 'react-redux'
import { changeTripName, createRoadmap } from '../actions'

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

const CheckpointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 600px;
`

const CreatePage = ({ trip, changeTripName, createRoadmap }) => {

  const { name, checkpoints } = trip

  const handleTripName = (e) => {
    changeTripName(e.target.value)
  }

  const handleWeather = () => {
    createRoadmap()
  }

  return (
    <Container>
      <TripNameInput
        onChange={handleTripName}
        type="text"
        placeholder="Trip Name"
        value={name}
      />
      {checkpoints.length > 0 &&
        <CheckpointsContainer>
          <CheckpointsList checkpoints={checkpoints} />
          <Button big handleClick={handleWeather}>Weather It</Button>
        </CheckpointsContainer>
      }
      <TripForm />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  trip: state.trip
})

const mapDispatchToProps = {
  changeTripName,
  createRoadmap
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)