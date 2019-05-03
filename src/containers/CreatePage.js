import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  background: papayawhip;
  display: flex;
  align-items: center;
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


const CreatePage = () => {
  return (
    <Container>
      <TripNameInput type="text" placeholder="Trip Name"/>
    </Container>
  )
}

export default CreatePage