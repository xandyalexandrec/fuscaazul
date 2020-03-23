import React, { memo } from 'react'
import { StyledWrapper, StyledUlDesktop, StyledUlMobile, StyledLi, StyledKey, StyledDescription } from './styled'

const Controls = () => (
  <StyledWrapper>
    <StyledUlDesktop>
      <StyledLi>
        <StyledKey>A</StyledKey>
        <StyledDescription>Left</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>S</StyledKey>
        <StyledDescription>Middle</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>D</StyledKey>
        <StyledDescription>Right</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>&#11104;</StyledKey>
        <StyledDescription>Left</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>&#11106;</StyledKey>
        <StyledDescription>Right</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>T</StyledKey>
        <StyledDescription>Turbo</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>ESC</StyledKey>
        <StyledDescription>Pause</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>SPACE</StyledKey>
        <StyledDescription>Continue</StyledDescription>
      </StyledLi>
    </StyledUlDesktop>
    <StyledUlMobile>
      <StyledLi>
        <StyledKey>&#11104;</StyledKey>
        <StyledDescription>Left</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>&#11106;</StyledKey>
        <StyledDescription>Right</StyledDescription>
      </StyledLi>
      <StyledLi>
        <StyledKey>&#11105;</StyledKey>
        <StyledDescription>Turbo</StyledDescription>
      </StyledLi>
    </StyledUlMobile>
  </StyledWrapper>
)

export default memo(Controls)
