import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper } from './styled'

const Laps = ({ currentLap, maxLaps }) => (
  <StyledWrapper>
    {currentLap}/{maxLaps}
  </StyledWrapper>
)

Laps.propTypes = {
  currentLap: PropTypes.number.isRequired,
  maxLaps: PropTypes.number.isRequired,
}

export default memo(Laps)
