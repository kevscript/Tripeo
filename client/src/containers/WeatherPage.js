import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import WeatherCard from '../components/WeatherCard'

const Container = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const CheckpointsList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: center;
  flex-direction: column;
`
const WeatherPage = ({ weather }) => {

  const { roadmap, forecasts } = weather

  return (
    <Container>
      <CheckpointsList>
        {roadmap.length === forecasts.length && roadmap.length > 0 && roadmap.map((cp, i) => {
          return (
            <WeatherCard key={`cp-${cp.timestamp}`} cp={cp} forecast={forecasts[i]} />
          )
        })}
      </CheckpointsList>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)