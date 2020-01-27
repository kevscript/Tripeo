import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { resetAll, fetchWeather } from '../actions'
import WeatherCard from '../components/WeatherCard'
import { Link } from 'react-router-dom'
import UndoIcon from '../assets/icons/undo.svg'
import PencilIcon from '../assets/icons/pencil.svg'
import Logo from '../assets/icons/sunset.svg'
import { BarLoader } from 'react-spinners';
import theme from '../styles/theme'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CheckpointsList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: center;
  flex-direction: column;
`

const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 50px;
`

const ButtonLink = styled(Link)`
  position: relative;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: all 0.2s ease-in-out;

  &::after {
    display: none;
  }

  &:hover {
    transform: scale(1.2);
  }
`

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`

const HeaderTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`

const LogoContainer = styled.div`
  position: relative;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const LogoImg = styled.img`
  display: block;
  width: 35px;
  height: auto;
`

const WeatherPage = ({ weather, trip, resetAll, fetchWeather }) => {
  const { forecasts, loading } = weather

  useEffect(() =>{ 
    fetchWeather()
  }, [fetchWeather])

  
  const handleReset = async () => {
    await resetAll()
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoImg src={Logo} />
        </LogoContainer>
        <HeaderTitle>Forecasts</HeaderTitle>
        <ButtonsContainer>
          <ButtonLink to="/create">
            <Icon src={PencilIcon} />
          </ButtonLink>
          <ButtonLink to="/create" onClick={handleReset}>
            <Icon src={UndoIcon} />
          </ButtonLink>
        </ButtonsContainer>
      </Header>

      { loading
          ? <BarLoader sizeUnit={"px"} size={150} color={theme.colors.primary} loading={loading} />
          : <CheckpointsList>
              {trip.roadmap.length === forecasts.length && trip.roadmap.length > 0 && trip.roadmap.map((cp, i) => {
                return (
                  <WeatherCard key={`cp-${cp.timestamp}`} cp={cp} forecast={forecasts[i]} />
                )
              })}
            </CheckpointsList>
      }
    </Container>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather,
  trip: state.trip
})

const mapDispatchToProps = {
  resetAll,
  fetchWeather
}

WeatherPage.propTypes = {
  weather: PropTypes.object,
  trip: PropTypes.object,
  resetAll: PropTypes.func,
  fetchWeather: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)