import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/icons/arrow.svg'

const DailyItem = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  height: 80px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: ${props => props.open ? props.theme.colors.primaryDark : props.theme.colors.primary};
  padding: 0 30px;
  color: #fff;
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;

  @media (min-width: 540px) {
    height: 110px;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 20px;
`

const DescContainer = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #fff;
`

const Where = styled.span``

const When = styled.span`
  font-weight: 600;
`

const Desc = styled.p`
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 540px) {
    display: none;
  }
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

  @media (max-width: 800px) {
    width: 20px;
  }
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
      <DailyItem key={cp.timestamp} onClick={handleClick} open={open}>
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