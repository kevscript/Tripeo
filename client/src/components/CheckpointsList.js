import React from 'react'
import styled from 'styled-components'
import CheckpointCard from './CheckpointCard'

const ListContainer = styled.ul`
  width: 100%;
  list-style: none;
`

const CheckpointsList = ({ checkpoints }) => {
  return (
    <ListContainer>
      {checkpoints.map((checkpoint, i) => {
        return <CheckpointCard key={i} checkpoint={checkpoint} />
      })}
    </ListContainer>
  )
}

export default CheckpointsList