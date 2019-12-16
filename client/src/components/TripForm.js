import React from 'react'
import ReactDOM from 'react-dom'
import PlacesInput from './PlacesInput'
import DateRange from './DateRange'
import Button from '../components/Button'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CloseBtn from '../assets/icons/delete-button.svg'
import {
  changeLocation,
  changeStartDate,
  changeStartMinDate,
  changeEndMinDate,
  changeEndDate,
  addNewCheckpoint,
  openForm,
  clearLocation
} from '../actions'
import PropTypes from 'prop-types'

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(255,255,255,1);
`

const InputsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const PlacesContainer = styled(InputsContainer)`
  margin: 40px 0 20px;
  div {
    width: 100%;
  }
`

const DateContainer = styled(InputsContainer)`
  display: flex;
`

const ButtonContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
`

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 40px;
  width: 20px;
  height: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(90deg);
  }
`

const CloseImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const TripForm = ({ form, changeLocation, changeStartDate, changeEndDate, changeStartMinDate, changeEndMinDate, addNewCheckpoint, openForm, clearLocation }) => {

  const { start, startMin, end, endMin, location } = form

  const handleStartDateChange = (date) => {
    if (date !== null) {
      const locale = date.toLocaleDateString()
      changeStartDate(date, locale)
      changeEndMinDate(date)
      if (date >= end) {
        changeEndDate(date, locale)
      }
    }
  }

  const handleEndDateChange = (date) => {
    if (date !== null && date >= start) {
      const locale = date.toLocaleDateString()
      changeEndDate(date, locale)
    } 
  }

  const handleLocation = (location) => {
    changeLocation({ ...location.suggestion })
  }

  const handleClear = () => {
    clearLocation()
  }

  const handleFormSubmit = () => {
    changeStartMinDate(end.setDate(end.getDate() + 1))
    addNewCheckpoint()
    const input = document.querySelector('.ap-input')
    input.value = ''
  }

  const handleFormClose = () => {
    openForm()
  }

  return ReactDOM.createPortal(
    <FormContainer>
      <div>
        <PlacesContainer>
          <PlacesInput
            handleLocation={handleLocation}
            handleClear={handleClear}
          />
        </PlacesContainer>
        <DateContainer>
          <DateRange
            handleStartDateChange={handleStartDateChange}
            startDate={start}
            startMin={startMin}
            handleEndDateChange={handleEndDateChange}
            endDate={end}
            endMin={endMin}
          />
        </DateContainer>
      </div>
      {location && start && end
        ? <ButtonContainer>
          <Button handleClick={handleFormSubmit}>Add Checkpoint</Button>
        </ButtonContainer>
        : <ButtonContainer>
          <Button disabled>Add Checkpoint</Button>
        </ButtonContainer>
      }
      <CloseButton onClick={handleFormClose}>
        <CloseImg src={CloseBtn} alt="close btn" />
      </CloseButton>
    </FormContainer>,
    document.getElementById('portal-root')
  )
}

const mapStateToProps = (state) => ({
  form: state.form
})

const mapDispatchToProps = {
  changeLocation,
  changeStartDate,
  changeEndMinDate,
  changeStartMinDate,
  changeEndDate,
  addNewCheckpoint,
  openForm,
  clearLocation
}

TripForm.propTypes = {
  form: PropTypes.object,
  changeLocation: PropTypes.func,
  changeStartDate: PropTypes.func,
  changeEndDate: PropTypes.func,
  changeStartMinDate: PropTypes.func,
  changeEndMinDate: PropTypes.func,
  addNewCheckpoint: PropTypes.func,
  openForm: PropTypes.func,
  clearLocation: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TripForm)