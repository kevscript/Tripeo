import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  cursor: pointer;
  margin: ${props => props.big ? '2rem 0' : '1rem 0'};
  padding: ${props => props.big ? '15px 45px' : '5px 15px'};
  font-size: ${props => props.big ? '2.6rem' : '1.6rem'};
  border-radius: 50px;
  background: lightcoral;
  color: papayawhip;
`

ButtonContainer.displayName = 'ButtonContainer'

const Button = ({ children, big, ...props }) => {
  return (
    <ButtonContainer big={big}>
      {children}
    </ButtonContainer>
  )
}

export default Button