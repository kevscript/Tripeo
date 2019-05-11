import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.3);
  min-width: 400px;
  margin: 15px 0;
  padding: 15px 30px;
`

const LocationName = styled.h3``

const LocationDate = styled.span``


const LocationCard = ({ checkpoint }) => {
  return (
    <CardContainer>
      <LocationName>{checkpoint.location.name}</LocationName>
      <LocationDate>from {checkpoint.startDate}</LocationDate>
      <LocationDate>to {checkpoint.endDate}</LocationDate>
    </CardContainer>
  )
}

export default LocationCard