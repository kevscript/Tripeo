import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { resetAll } from '../actions'
import WeatherCard from '../components/WeatherCard'
import { Link } from 'react-router-dom'
import UndoIcon from '../assets/icons/undo.svg'
import PencilIcon from '../assets/icons/pencil.svg'
import Logo from '../assets/icons/sunset.svg'
import { BarLoader } from 'react-spinners';
import theme from '../styles/theme'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`

const ButtonLink = styled(Link)`
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
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
  font-size: 26px;
  font-weight: 600;
`

const LogoContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const LogoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const WeatherPage = ({ weather, resetAll }) => {

  const { roadmap, forecasts, loading } = weather

  const handleReset = async () => {
    await resetAll()
  }
  if (loading) {
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
        <BarLoader 
          sizeUnit={"px"}
          size={150}
          color={theme.colors.primary}
          loading={loading}
        />
      </Container>
    )
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
      <CheckpointsList>
        {roadmap.length === forecasts.length && roadmap.length > 0 && roadmap.map((cp, i) => {
          return (
            <WeatherCard key={`cp-${cp.timestamp}`} cp={cp} forecast={forecasts[i]} />
          )
        })}
      </CheckpointsList>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

const mapDispatchToProps = {
  resetAll
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)