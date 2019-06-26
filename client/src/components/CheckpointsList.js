import React from 'react'
import styled from 'styled-components'
import CheckpointCard from './CheckpointCard'
import PropTypes from 'prop-types'

const ListContainer = styled.ul`
  width: 100%;
  list-style: none;
`

const CheckpointsList = ({ checkpoints }) => {
  return (
    <ListContainer data-test="List">
      {checkpoints.map((checkpoint) => {
        return (
          <CheckpointCard
            key={checkpoint.startDate}
            checkpoint={checkpoint}
          />
        )
      })}
    </ListContainer>
  )
}

CheckpointsList.propTypes = {
  checkpoints: PropTypes.array
}

export default CheckpointsList