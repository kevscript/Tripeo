import React from 'react'
import PlacesInput from './PlacesInput'
import DateInput from './DateInput'
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
  padding-top: 30px;
  margin: 30px 0;
  width: 100%;
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightblue;
`

const InputsContainer = styled.div`
  min-width: 400px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TripForm = ({ form, changeLocation, changeStartDate, changeEndDate, changeStartMinDate, changeEndMinDate, addNewCheckpoint }) => {

  const { start, startMin, end, endMin, location } = form

  const handleStartDateChange = (date) => {
    changeStartDate(date)
    changeEndMinDate(date)
  }

  const handleEndDateChange = (date) => {
    changeEndDate(date)
  }

  const handleLocation = (location) => {
    changeLocation({ ...location.suggestion })
  }

  const handleFormSubmit = () => {
    changeStartMinDate(end)
    addNewCheckpoint()
  }

  return (
    <FormContainer>
      <InputsContainer>
        <PlacesInput handleLocation={handleLocation} />
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
          <Button handleFormSubmit={handleFormSubmit}>Add Checkpoint</Button>
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