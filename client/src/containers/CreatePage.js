import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'
import Button from '../components/Button'
import CheckpointsList from '../components/CheckpointsList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeTripName, createRoadmap, fetchWeather } from '../actions'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

/*const TripNameInput = styled.input`
  background: 0;
  border: 0;
  font-size: 2rem;
  font-style: normal;
  text-align: center;
  outline: 0;

  &:focus {
    font-style: italic;
  }
`*/

const CheckpointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
`

const CreatePage = ({ trip, changeTripName, createRoadmap, fetchWeather }) => {

  const { /*name,*/ checkpoints } = trip

 /*const handleTripName = (e) => {
    changeTripName(e.target.value)
  }*/

  const handleWeather = () => {
    createRoadmap()
    fetchWeather()
  }

  return (
    <Container>
      {/*<TripNameInput
        onChange={handleTripName}
        type="text"
        placeholder="Trip Name"
        value={name}
      />*/}
      {checkpoints.length > 0 &&
        <CheckpointsContainer>
          <CheckpointsList checkpoints={checkpoints} />
          <Link to='/weather'>
            <Button big handleClick={handleWeather}>Weather It</Button>
          </Link>
        </CheckpointsContainer>
      }
      <TripForm />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  trip: state.trip,
})

const mapDispatchToProps = {
  changeTripName,
  createRoadmap,
  fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)