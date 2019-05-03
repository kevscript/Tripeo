import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  background: papayawhip;
  display: flex;
  align-items: center;
  padding: 5%;
`

const TripNameInput = styled.input`
  background: 0;
  border: 0;
  font-size: 4.2rem;
  font-style: italic;
  text-align: center;
  outline: 0;

  &:focus {
    font-style: normal;
  }
`

const LocationList = styled.ul``

const CreatePage = () => {
  return (
    <Container>
      <TripNameInput type="text" placeholder="Trip Name" />
      <LocationList></LocationList>
      <Button>+ Add Location</Button>
    </Container>
  )
}

export default CreatePage