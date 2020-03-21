import React from 'react'
import { StyledWrapper, StyledCard, StyledNumber } from './styled'
import useCountdown from '../../hooks/useCountdown/'

function Countdown({ handleFinish = () => {} }) {
  const [counter] = useCountdown({ handleFinish })
  return (
    <StyledWrapper>
      <StyledCard>
        <StyledNumber>{counter}</StyledNumber>
      </StyledCard>
    </StyledWrapper>
  )
}

export default Countdown
