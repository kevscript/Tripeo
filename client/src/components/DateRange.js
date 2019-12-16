import React from 'react'
import DatePicker from 'react-datepicker'
import "../styles/datepicker.css"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RangeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledDateInput = styled(DatePicker)`
  padding: 10px 15px;
  outline: 0;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  width: 125px;
  color: ${props => props.theme.colors.primary};
  text-align: center;

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-weight: 400;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    font-weight: 500;
  }
  :-ms-input-placeholder { /* IE 10+ */
    font-weight: 500;
  }
  :-moz-placeholder { /* Firefox 18- */
    font-weight: 500;
  }
`

const Label = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <RangeContainer data-test="RangeContainer">
      <InputContainer>
        <Label>From (included)</Label>
        <StyledDateInput
          placeholderText="dd/mm/yyyy"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={handleStartDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={startMin}
          data-test="startRange"
          popperPlacement="bottom"
          onFocus={(e) => e.target.readOnly = true}
        />
      </InputContainer>
      <InputContainer>
        <Label>To (included)</Label>
        <StyledDateInput
          placeholderText="dd/mm/yyyy"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={handleEndDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={endMin}
          data-test="endRange"
          popperPlacement="bottom"
          onFocus={(e) => e.target.readOnly = true}
        />
      </InputContainer>
    </RangeContainer>
  )
}

DateRange.propTypes = {
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
  startDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  endDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  startMin: PropTypes.instanceOf(Date),
  endMin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
}

export default DateRange
