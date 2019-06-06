import React from 'react'
import PlacesInput from './PlacesInput'
import DateRange from './DateRange'
import Button from '../components/Button'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  changeLocation,
  changeStartDate,
  changeStartMinDate,
  changeEndMinDate,
  changeEndDate,
  addNewCheckpoint
} from '../actions'

const FormContainer = styled.div`
  padding: 30px 0;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media (max-width: 800px) {
    width: 100%;
    box-shadow: none;
  }
`

const InputsContainer = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    margin: 5px 0;
  }
`

const ButtonContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    margin: 0;
  }
`

const TripForm = ({ form, changeLocation, changeStartDate, changeEndDate, changeStartMinDate, changeEndMinDate, addNewCheckpoint }) => {

  const { start, startMin, end, endMin, location } = form

  const handleStartDateChange = (date) => {
    const locale = date.toLocaleDateString()
    changeStartDate(date, locale)
    changeEndMinDate(date, locale)
  }

  const handleEndDateChange = (date) => {
    const locale = date.toLocaleDateString()
    changeEndDate(date, locale)
  }

  const handleLocation = (location) => {
    changeLocation({ ...location.suggestion })
  }

  const handleFormSubmit = () => {
    changeStartMinDate(end.setDate(end.getDate() + 1))
    addNewCheckpoint()
    const input = document.querySelector('.ap-input')
    input.value = ''
  }

  return (
    <FormContainer>
      <InputsContainer>
        <PlacesInput
          handleLocation={handleLocation}
        />
      </InputsContainer>
      <InputsContainer>
        <DateRange
          handleStartDateChange={handleStartDateChange}
          startDate={start}
          startMin={startMin}
          handleEndDateChange={handleEndDateChange}
          endDate={end}
          endMin={endMin}
        />
      </InputsContainer>
      {location && start && end
        ? <ButtonContainer>
          <Button handleClick={handleFormSubmit}>Add Checkpoint</Button>
        </ButtonContainer>
        : <ButtonContainer>
          <Button disabled>Add Checkpoint</Button>
        </ButtonContainer>
      }
    </FormContainer>
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
  addNewCheckpoint
}

export default connect(mapStateToProps, mapDispatchToProps)(TripForm)