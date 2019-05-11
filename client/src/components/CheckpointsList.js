import React from 'react'
import styled from 'styled-components'
import LocationCard from './LocationCard'

const ListContainer = styled.ul`
  width: 90%;
  max-width: 800px;
  list-style: none;
  margin: 0 auto;
`

const CheckpointsList = ({ checkpoints }) => {
  return (
    <ListContainer>
      {checkpoints.map((checkpoint, i) => {
        return <LocationCard key={i} checkpoint={checkpoint} />
      })}
    </ListContainer>
  )
}

export default CheckpointsList