import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper } from './styled'

const Duration = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
)

Duration.propTypes = {
  children: PropTypes.number.isRequired,
}

export default Duration
