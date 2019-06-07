import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'
import Button from '../components/Button'
import CheckpointsList from '../components/CheckpointsList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createRoadmap, fetchWeather, openForm } from '../actions'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  background: #fff;
  display: flex;
  align-items: center;
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
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`

const HeaderTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`

const HeaderButton = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border: ${props => `1px solid ${props.theme.colors.primary}`};
  border-radius: 50%;
  cursor: pointer;

  &::after {
    display: block;
    position: absolute;
    content: '';
    width: 25px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.primary};
  }

  &::before {
    display: block;
    position: absolute;
    content: '';
    width: 2px;
    height: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.primary};
  }
`

const CreatePage = ({ trip, createRoadmap, fetchWeather, form, openForm }) => {
  const { opened } = form
  const { checkpoints } = trip

  const handleWeather = () => {
    createRoadmap()
    fetchWeather()
  }

  const handleFormOpen = () => {
    openForm()
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Roadmap</HeaderTitle>
        <HeaderButton onClick={handleFormOpen} />
      </Header>
      {checkpoints.length > 0 &&
        <CheckpointsContainer>
          <CheckpointsList checkpoints={checkpoints} />
          <Link to='/weather'>
            <Button big handleClick={handleWeather}>Weather It</Button>
          </Link>
        </CheckpointsContainer>
      }
      {opened && <TripForm />}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  trip: state.trip,
  form: state.form
})

const mapDispatchToProps = {
  createRoadmap,
  fetchWeather,
  openForm
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)