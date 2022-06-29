import React, { useContext } from 'react'
import { Context } from 'components/Context'
import Countdown from 'components/Countdown'
import useCountdown from 'hooks/useCountdown/'
import { StyledWrapper } from './styled'

const Splash = () => {
  const { actions: { startGame } } = useContext(Context)
  const counter = useCountdown({ onFinish: startGame })
  return (
    <StyledWrapper>
      <Countdown>{counter}</Countdown>
    </StyledWrapper>
  )
}

export default Splash
