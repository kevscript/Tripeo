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

const HourlyContainer = styled.div`
  overflow: hidden;
  max-height: ${props => props.open ? '2000px' : 0};
  transition: max-height 1s ease-in-out;
`

const WeatherCard = ({ cp, forecast }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <CardContainer data-test='CardContainer'>
      <DailyCard
        cp={cp}
        forecast={forecast}
        handleClick={handleOpen}
        open={open}
        data-test='DailyContainer'
      />
      <HourlyContainer open={open}>
        {forecast.daily.data.length > 0 && forecast.hourly.data.map(hour => {
          return (
            <HourlyCard
              key={hour.time}
              data={hour}
              timeZone={forecast.timezone}
              data-test='HourlyContainer'
            />
          )
        })}
      </HourlyContainer>
    </CardContainer>
  )
}

WeatherCard.propTypes = {
  cp: PropTypes.object,
  forecast: PropTypes.object,
}

export default WeatherCard