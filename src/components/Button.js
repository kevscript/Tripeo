import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  cursor: pointer;
  margin: ${props => props.big ? '20px 0' : '10px 0'};
  padding: ${props => props.big ? '15px 45px' : '10px 20px'};
  font-size: ${props => props.big ? '26px' : '16px'};
  border-radius: 50px;
  background: lightcoral;
  color: papayawhip;
`

ButtonContainer.displayName = 'ButtonContainer'

const Button = ({ children, big, handleFormSubmit, ...props }) => {
  return (
    <ButtonContainer big={big} onClick={handleFormSubmit}>
      {children}
    </ButtonContainer>
  )
}

export default Button