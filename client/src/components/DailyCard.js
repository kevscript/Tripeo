import React from 'react'
import styled from 'styled-components'

const DailyItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.5);
  padding: 30px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.p`
`

const DailyCard = ({ forecast, cp }) => {
  return (
    <div>
      <DailyItem key={cp.timestamp}>
        <Row>
          <Text>{cp.location.name}</Text>
          <Text>{new Date(cp.timestamp).toLocaleDateString()}</Text>
        </Row>
        <Row>
          <Text>{forecast.daily.data[0].summary}</Text>
        </Row>
      </DailyItem>
    </div>
  )
}

export default DailyCard