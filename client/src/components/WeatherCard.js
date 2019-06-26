import React, { useState } from 'react'
import styled from 'styled-components'
import DailyCard from './DailyCard'
import HourlyCard from './HourlyCard'
import PropTypes from 'prop-types'

const CardContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: 2px 0;
`

const WeatherCard = ({ cp, forecast }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <CardContainer data-test='CardContainer'>
      <DailyCard cp={cp} forecast={forecast} handleClick={handleOpen} open={open} />
      {open && forecast.daily.data.length > 0 && forecast.hourly.data.map(hour => {
        return (
          <HourlyCard key={hour.time} data={hour} timeZone={forecast.timezone} />
        )
      })}
    </CardContainer>
  )
}

WeatherCard.propTypes = {
  cp: PropTypes.object,
  forecast: PropTypes.object,
}

export default WeatherCard