import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CheckpointsList = styled.ul`
  width: 95%;
  max-width: 600px;
  display: flex;
  list-style: none;
  justify-content: center;
  flex-direction: column;
`

const CheckpointItem = styled.li`
  border: 1px solid black;
  padding: 30px;
  margin: 15px 0;
`

const WeatherPage = ({ weather }) => {

  const { roadmap, forecasts } = weather

  return (
    <div>
      <CheckpointsList>
        {roadmap.length === forecasts.length && roadmap.length > 0 && roadmap.map((cp, i) => {
          return (
            <CheckpointItem key={cp.timestamp}>
              <h3>{cp.location.name} - {new Date(cp.timestamp).toLocaleDateString()}</h3>
              <h6>{forecasts[i].daily.data[0].summary}</h6>
            </CheckpointItem>
          )
        })}
      </CheckpointsList>
    </div>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)