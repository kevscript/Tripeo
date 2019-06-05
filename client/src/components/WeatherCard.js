import React from 'react'
import styled from 'styled-components'
import DailyCard from './DailyCard'
import HourlyCard from './HourlyCard'

const CardContainer = styled.div`
  margin: 0;
`

const WeatherCard = ({ cp, forecast }) => {
  return (
    <CardContainer>
      <DailyCard cp={cp} forecast={forecast} />
      {forecast.daily.data.length > 0 && forecast.hourly.data.map(hour => {
        return (
          <HourlyCard key={hour.time} data={hour} timeZone={forecast.timezone}/>
        )
      })}
    </CardContainer>
  )
}

export default WeatherCard