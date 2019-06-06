import React from 'react'
import styled from 'styled-components'
import CheckpointCard from './CheckpointCard'

const ListContainer = styled.ul`
  width: 100%;
  list-style: none;
  margin: 50px 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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