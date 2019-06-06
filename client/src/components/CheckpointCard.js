import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  width: 100%;
  padding: 15px 30px;
`


const LocationName = styled.h3``

const LocationDate = styled.span``


const CheckpointCard = ({ checkpoint }) => {

  const { location, startDate, endDate } = checkpoint

  return (
    <CardContainer>
      <LocationName>{location.name}</LocationName>
      <LocationDate>{startDate === endDate ? startDate : startDate + ' > ' + endDate}</LocationDate>
    </CardContainer>
  )
}

export default CheckpointCard