import React from 'react'
import styled from 'styled-components'

const HourlyItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.5);
  padding: 30px;
`

const HourlyCard = ({ data }) => {
  return (
    <div>
      <HourlyItem>
        <p>{data.temperature}</p>
      </HourlyItem>
    </div>
  )
}

export default HourlyCard