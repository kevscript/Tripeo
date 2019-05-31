import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border: 1px solid rgba(0,0,0,0.3);
  width: 100%;
  margin: 15px 0;
  padding: 15px 30px;
`

const LocationName = styled.h3``

const LocationDate = styled.span``


const CheckpointCard = ({ checkpoint }) => {

  const { location, startDate, endDate } = checkpoint

  return (
    <CardContainer>
      <LocationName>{location.name}</LocationName>
      <LocationDate>{startDate} > {endDate}</LocationDate>
    </CardContainer>
  )
}

export default CheckpointCard