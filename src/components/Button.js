import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  cursor: pointer;
  margin: 2rem 0;
  padding: 15px 45px;
  font-size: 2.6rem;
  border-radius: 50px;
  border: 1px solid rgba(0,0,0,0.1);
  background: lightcoral;
  color: papayawhip;
`

ButtonContainer.displayName = 'ButtonContainer'

const Button = ({ children }) => {
  return (
    <ButtonContainer>
      {children}
    </ButtonContainer>
  )
}

export default Button