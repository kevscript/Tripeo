import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import styled from 'styled-components'

const StyledDateInput = styled(DatePicker)`
  padding: 10px 15px;
  outline: 0;
  border: 1px solid lightblue;
  border-radius: 3px;
  font-size: 15px;
  margin: 10px 0;
`

const DateInput = ({ selectedDate, handleDateChange, placeholderText, minDate }) => {
  return (
    <StyledDateInput
      //showTimeSelect
      placeholderText={placeholderText}
      selected={selectedDate}
      onChange={handleDateChange}
      //timeFormat="HH:mm"
      //timeIntervals={60}
      //dateFormat="d MMMM yyyy"
      //timeCaption="time"
      minDate={minDate}
    />
  )
}

export default DateInput

