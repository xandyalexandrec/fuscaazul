import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledCard, StyledNumber } from './styled'

const Countdown = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledCard>
        <StyledNumber>{children}</StyledNumber>
      </StyledCard>
    </StyledWrapper>
  )
}

Countdown.propTypes = {
  children: PropTypes.number.isRequired,
}

export default memo(Countdown)
