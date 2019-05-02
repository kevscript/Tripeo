import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  cursor: pointer;
`

ButtonContainer.displayName = 'ButtonContainer'

const Button = ({text}) => {
  return (
    <ButtonContainer>
      {text}
    </ButtonContainer>
  )
}

export default Button