import React from 'react'
import styled from 'styled-components'
import stampToTime from '../utils/stampToTime'

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HourlyItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 10px 30px;
`

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 70px;
`

const ItemName = styled.span`
  font-size: 10px;
  color: #333;
`

const ItemValue = styled.p`
  font-size: 14px;
  font-weight: 600;
`

const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  margin: 0 10px;
`

const Icon = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const HourlyCard = ({ data, timeZone }) => {
  const {
    time,
    temperature,
    humidity,
    cloudCover,
    windSpeed,
    uvIndex,
    visibility,
    icon
  } = data

  return (
    <CardContainer>
      <HourlyItem>
        <TimeContainer>
          <h3>{stampToTime(time, timeZone)}</h3>
        </TimeContainer>
        <StatsContainer>
          <StatsList>
            <StatsItem>
              <ItemName>Humidity (%)</ItemName>
              <ItemValue>{Math.round(humidity * 100)}</ItemValue>
            </StatsItem>
            <StatsItem>
              <ItemName>Wind (km/h)</ItemName>
              <ItemValue>{Math.round(windSpeed * 10) / 10}</ItemValue>
            </StatsItem>
            <StatsItem>
              <ItemName>UV Index</ItemName>
              <ItemValue>{uvIndex}</ItemValue>
            </StatsItem>
            <StatsItem>
              <ItemName>Visiblity (km)</ItemName>
              <ItemValue>{Math.round(visibility * 10) / 10}</ItemValue>
            </StatsItem>
            <StatsItem>
              <ItemName>Cloudiness (%)</ItemName>
              <ItemValue>{Math.round(cloudCover * 100)}</ItemValue>
            </StatsItem>
          </StatsList>
        </StatsContainer>
        <TempContainer>
          <IconContainer>
            <Icon src={require(`../assets/icons/${icon}.svg`)} alt="weather icon" />
          </IconContainer>
          <h3>{Math.round(temperature)}°C</h3>
        </TempContainer>
      </HourlyItem>
    </CardContainer>
  )
}

export default HourlyCard