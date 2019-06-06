import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #fff;

  @media (max-width: 800px) {
    width: 95%;
    margin: 0 auto;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4.2rem;
  letter-spacing: 0.1rem;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`

const CreateLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Para = styled.p`
  font-size: 2.6rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
`

const WelcomePage = () => {
  return (
    <Container>

      <Title>TripWeather</Title>
      <Para>Catch the weather before it catches you.</Para>
      <CreateLink to="/create">
        <Button big>Get Started</Button>
      </CreateLink>

    </Container>
  )
}

export default WelcomePage