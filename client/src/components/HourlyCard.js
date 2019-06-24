import React from 'react'
import styled from 'styled-components'
import stampToTime from '../utils/stampToTime'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css"

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`

const HourlyItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid rgba(0,0,0,0.2);
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding: 15px 15px;

  @media (min-width: 800px) {
    padding: 15px 30px;
    border-left: 1px solid rgba(0,0,0,0.2);
    border-right: 1px solid rgba(0,0,0,0.2);
  }
`

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatsContainer = styled.div`
  min-height: 0px; 
  min-width: 0px;
  margin: 0 50px;
`

/*const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`*/

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ItemName = styled.p`
  font-size: 10px;
  color: #333;
  text-align: center;
`

const ItemValue = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    min-width: 100px;
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  margin: 0 10px;
`

const Icon = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const Text = styled.p `
font-weight: 600;
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

  const sliderSettings = {
    arrow: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <CardContainer>
      <HourlyItem>
        <TimeContainer>
          <Text>{stampToTime(time, timeZone)}</Text>
        </TimeContainer>
        <StatsContainer>
          <Slider {...sliderSettings}>
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
          </Slider>
        </StatsContainer>
        <TempContainer>
          <IconContainer>
            <Icon src={require(`../assets/icons/${icon}.svg`)} alt="weather icon" />
          </IconContainer>
          <Text>{Math.round(temperature)}°C</Text>
        </TempContainer>
      </HourlyItem>
    </CardContainer>
  )
}

export default HourlyCard