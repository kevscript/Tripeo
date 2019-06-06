import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from '../components/Button'
import { resetAll } from '../actions'
import WeatherCard from '../components/WeatherCard'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CheckpointsList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: center;
  flex-direction: column;
`
const WeatherPage = ({ weather, resetAll }) => {

  const { roadmap, forecasts } = weather

  const handleReset = async () => {
    await resetAll()
  }

  return (
    <Container>
      <CheckpointsList>
        {roadmap.length === forecasts.length && roadmap.length > 0 && roadmap.map((cp, i) => {
          return (
            <WeatherCard key={`cp-${cp.timestamp}`} cp={cp} forecast={forecasts[i]} />
          )
        })}
      </CheckpointsList>
      
      {roadmap.length === forecasts.length && roadmap.length > 0 &&
        <Link to="/create">
          <Button handleClick={handleReset}>New Search</Button>
        </Link>
      }
    </Container>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

const mapDispatchToProps = {
  resetAll
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)