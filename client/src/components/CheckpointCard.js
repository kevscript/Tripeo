import React from 'react'
import styled from 'styled-components'
import deleteBtn from '../assets/icons/delete-button.svg'
import calendarIcon from '../assets/icons/calendar.svg'
import locationIcon from '../assets/icons/location.svg'
import arrowIcon from '../assets/icons/long-arrow.svg'
import { connect } from 'react-redux'
import { deleteCheckpoint } from '../actions'
import PropTypes from 'prop-types'

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: 90px;
  align-items: flex-start;
  justify-content: center;
  padding: 0 30px;
  margin: 2.5px 0;
  color: ${props => props.theme.text.light};
`

const LocationName = styled.h3`
  font-size: 16px;
  font-weight: 500;
`

const LocationDate = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`

const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 15px;
  height: 15px;
`

const DeleteImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`

const Icon = styled.img`
  display: block;
  width: 15px;
  height: auto;
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`
const DateContainer = styled.div`
  display: flex;
  align-items: center;
`

const Arrow = styled.img`
  display: block;
  width: 30px;
  height: auto;
  margin: 0 10px;
`

export const CheckpointCard = ({ checkpoint, deleteCheckpoint }) => {

  const { location, startDate, endDate } = checkpoint

  const handleDelete = () => {
    deleteCheckpoint(startDate)
  }

  return (
    <CardContainer data-test="CardContainer">
      <NameContainer>
        <IconContainer>
          <Icon src={locationIcon} alt="" />
        </IconContainer>
        <LocationName data-test="LocationName">{location.name}</LocationName>
      </NameContainer>
      <DateContainer>
        <IconContainer>
          <Icon src={calendarIcon} alt="" />
        </IconContainer>
        <LocationDate data-test="LocationDate">
          {
            startDate === endDate
              ? startDate
              : (
                <>
                  <span>{startDate}</span>
                  <Arrow src={arrowIcon} />
                  <span>{endDate}</span>
                </>
              )
          }
        </LocationDate>
      </DateContainer>
      <DeleteButton onClick={handleDelete} data-test="DeleteButton">
        <DeleteImg src={deleteBtn} alt="delete button" />
      </DeleteButton>
    </CardContainer>
  )
}

const mapDispatchToProps = {
  deleteCheckpoint
}

CheckpointCard.propTypes = {
  checkpoint: PropTypes.object,
  deleteCheckpoint: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(CheckpointCard)