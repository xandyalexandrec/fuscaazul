import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledCard, StyledNumber } from './styled'
import useCountdown from '../../hooks/useCountdown/'

const Countdown = ({ handleFinish }) => {
  const [counter] = useCountdown({ handleFinish })

  return (
    <StyledWrapper>
      <StyledCard>
        <StyledNumber>{counter}</StyledNumber>
      </StyledCard>
    </StyledWrapper>
  )
}

Countdown.propTypes = {
  handleFinish: PropTypes.func,
}

Countdown.defaultProps = {
  handleFinish: () => {},
}

export default Countdown
