import React from 'react'
import Background from '../../assets/images/background.gif'
import { StyledWrapper, StyledBackground, StyledContent } from './styled'

function Scenario({ children }) {
  return (
    <StyledWrapper>
      <StyledBackground src={Background} />
      <StyledContent>
        {children}
      </StyledContent>
    </StyledWrapper>
  )
}

export default Scenario
