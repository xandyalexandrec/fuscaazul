import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper } from './styled'

const Laps = ({ children }) => (
  <StyledWrapper>
    {children}/5
  </StyledWrapper>
)

Laps.propTypes = {
  children: PropTypes.number.isRequired,
}

export default Laps
