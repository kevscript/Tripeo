import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/icons/arrow.svg'

const DailyItem = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  min-height: 114px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  padding: 30px;
  color: #fff;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const DescContainer = styled.div`
  padding: 0 50px;
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

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  ${({ open }) => open && `
    transform: rotate(180deg);
  `}
`

const DailyCard = ({ forecast, cp, handleClick, open }) => {
  return (
    <div>
      <DailyItem key={cp.timestamp} onClick={handleClick}>
        <InfoContainer>
          <Where>{cp.location.name}</Where>
          <When>{new Date(cp.timestamp).toLocaleDateString()}</When>
        </InfoContainer>
        <DescContainer>
          <Desc>{forecast.daily.data[0].summary}</Desc>
        </DescContainer>
        <ArrowContainer>
          <Img src={Arrow} open={open} />
        </ArrowContainer>
      </DailyItem>
    </div>
  )
}

export default DailyCard