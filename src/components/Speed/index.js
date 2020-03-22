import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledSpeed, StyledHelper } from './styled'

const Speed = ({ children }) => (
  <StyledWrapper>
    <StyledSpeed>{children}</StyledSpeed>
    <StyledHelper>km/h</StyledHelper>
  </StyledWrapper>
)

Speed.propTypes = {
  children: PropTypes.number.isRequired,
}

export default memo(Speed)
