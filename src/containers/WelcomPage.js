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
  background: papayawhip;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4.2rem;
  letter-spacing: 0.1rem;
`

const CreateLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Para = styled.p`
  font-size: 2.6rem;
`

const WelcomePage = () => {
  return (
    <Container>

      <Title>TripWeather</Title>
      <Para>Catch the weather before it catches you.</Para>
      <Button>
        <CreateLink to="/create">
          Get Ready
        </CreateLink>
      </Button>

    </Container>
  )
}

export default WelcomePage