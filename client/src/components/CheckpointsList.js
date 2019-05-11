import React from 'react'
import styled from 'styled-components'
import LocationCard from './LocationCard'

const ListContainer = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
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