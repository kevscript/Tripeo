import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  margin: ${props => props.big ? '20px 0' : '10px 0'};
  padding: ${props => props.big ? '15px 45px' : '10px 20px'};
  font-size: ${props => props.big ? '26px' : '15px'};
  border-radius: 50px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.text.light};

  &:disabled {
    cursor: not-allowed;
    background: rgba(0,0,0,0.1);
  }
`

ButtonContainer.displayName = 'ButtonContainer'

const Button = ({ children, big, handleClick, disabled }) => {
  return (
    <ButtonContainer big={big} disabled={disabled} onClick={handleClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button