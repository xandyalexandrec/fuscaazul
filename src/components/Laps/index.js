import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper } from './styled'

const Laps = ({ children, maxLaps }) => (
  <StyledWrapper>
    {children}/{maxLaps}
  </StyledWrapper>
)

Laps.propTypes = {
  children: PropTypes.number.isRequired,
  maxLaps: PropTypes.number.isRequired,
}

export default Laps
