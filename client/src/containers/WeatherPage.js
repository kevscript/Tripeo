import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

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

const CheckpointItem = styled.li`
  width: 100%;
  border: 1px solid black;
  padding: 30px;
  margin: 15px 0;
`

const WeatherPage = ({ weather }) => {

  const { roadmap, forecasts } = weather

  return (
    <Container>
      <CheckpointsList>
        {roadmap.length === forecasts.length && roadmap.length > 0 && roadmap.map((cp, i) => {
          return (
            <CheckpointItem key={cp.timestamp}>
              <div>
                <h3>{cp.location.name} - {new Date(cp.timestamp).toLocaleDateString()}</h3>
                <h5>{forecasts[i].daily.data[0].summary}</h5>
              </div>
            </CheckpointItem>
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