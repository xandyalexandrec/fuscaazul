import React from 'react'
import { StyledWrapper, StyledLabel, StyledInput } from './styled'

function Input({ label, ...rest }) {
  return (
    <StyledWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...rest} />
    </StyledWrapper>
  )
}

export default Input
