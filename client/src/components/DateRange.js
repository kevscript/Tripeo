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

const DateRange = ({
  handleStartDateChange,
  startDate,
  startMin,
  handleEndDateChange,
  endDate,
  endMin
}) => {
  return (
    <div>
      <StyledDateInput
        placeholderText='From'
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={handleStartDateChange}
        dateFormat="dd / MM / yyyy"
        minDate={startMin}
      />
      <StyledDateInput
        placeholderText='To'
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        onChange={handleEndDateChange}
        dateFormat="dd / MM / yyyy"
        minDate={endMin}
      />
    </div>
  )
}

export default DateRange
