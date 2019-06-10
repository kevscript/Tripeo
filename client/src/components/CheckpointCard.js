import React from 'react'
import styled from 'styled-components'
import deleteBtn from '../assets/icons/delete-button.svg'
import { connect } from 'react-redux'
import { deleteCheckpoint } from '../actions'

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  width: 100%;
  height: 80px;
  align-items: flex-start;
  justify-content: center;
  padding: 0 30px;
  margin: 2.5px 0;
`

const LocationName = styled.h3`
  font-size: 16px;
  font-weight: 600;
`

const LocationDate = styled.span`
  font-size: 16px;
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

const CheckpointCard = ({ checkpoint, deleteCheckpoint }) => {

  const { location, startDate, endDate } = checkpoint

  const handleDelete = (e) => {
    const id = e.target.parentNode.parentNode.getAttribute("data-id")
    deleteCheckpoint(id)
  }

  return (
    <CardContainer data-id={checkpoint.startDate}>
      <LocationName>{location.name}</LocationName>
      <LocationDate>
        {startDate === endDate ? startDate : startDate + ' > ' + endDate}
      </LocationDate>
      <DeleteButton onClick={handleDelete}>
        <DeleteImg src={deleteBtn} alt="delete button" />
      </DeleteButton>
    </CardContainer>
  )
}

const mapDispatchToProps = {
  deleteCheckpoint
}

export default connect(null, mapDispatchToProps)(CheckpointCard)