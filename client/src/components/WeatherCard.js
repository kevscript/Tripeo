import React from 'react'
import styled from 'styled-components'
import DailyCard from './DailyCard'
import HourlyCard from './HourlyCard'

const WeatherItem = styled.div`
  margin: 25px 0;
`

const WeatherCard = ({ cp, forecast }) => {
  return (
    <WeatherItem>
      <DailyCard cp={cp} forecast={forecast} />
      {forecast.daily.data.length > 0 && forecast.hourly.data.map(hour => {
        return (
          <HourlyCard key={hour.time} data={hour} />
        )
      })}
    </WeatherItem>
  )
}

export default WeatherCard