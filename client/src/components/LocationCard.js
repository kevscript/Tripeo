import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.3);
  width: 100%;
  margin: 15px 0;
  padding: 15px 30px;
`

const LocationName = styled.h3``

const LocationDate = styled.span``


const LocationCard = ({ checkpoint }) => {

  const { location, startDate, endDate } = checkpoint

  return (
    <CardContainer>
      <LocationName>{location.name}</LocationName>
      <LocationDate>from {new Date(startDate).toLocaleDateString()}</LocationDate>
      <LocationDate>to {new Date(endDate).toLocaleDateString()}</LocationDate>
    </CardContainer>
  )
}

export default LocationCard