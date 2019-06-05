import React from 'react'
import styled from 'styled-components'

const DailyItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  padding: 30px;
  color: #fff;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DescContainer = styled.div`
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Where = styled.span``

const When = styled.span`
  font-weight: 600;
`

const Desc = styled.p`
  font-size: 20px;
  font-weight: 600;
`

const DailyCard = ({ forecast, cp }) => {
  return (
    <div>
      <DailyItem key={cp.timestamp}>
        <InfoContainer>
          <Where>{cp.location.name}</Where>
          <When>{new Date(cp.timestamp).toLocaleDateString()}</When>
        </InfoContainer>
        <DescContainer>
          <Desc>{forecast.daily.data[0].summary}</Desc>
        </DescContainer>
      </DailyItem>
    </div>
  )
}

export default DailyCard