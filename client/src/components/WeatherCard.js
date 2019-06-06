import React, { useState } from 'react'
import styled from 'styled-components'
import DailyCard from './DailyCard'
import HourlyCard from './HourlyCard'

const CardContainer = styled.div`
  margin: 5px 0;
`

const WeatherCard = ({ cp, forecast }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <CardContainer>
      <DailyCard cp={cp} forecast={forecast} handleClick={handleOpen} open={open} />
      {open && forecast.daily.data.length > 0 && forecast.hourly.data.map(hour => {
        return (
          <HourlyCard key={hour.time} data={hour} timeZone={forecast.timezone}/>
        )
      })}
    </CardContainer>
  )
}

export default WeatherCard