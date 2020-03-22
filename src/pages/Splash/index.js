import React, { useContext } from 'react'
import Context from 'utils/context'
import Countdown from 'components/Countdown'
import { GAME } from 'router'
import useCountdown from 'hooks/useCountdown/'
import { StyledWrapper } from './styled'

const Splash = () => {
  const { setCurrentRoute } = useContext(Context)
  const handleFinish = () => setCurrentRoute(GAME)
  const counter = useCountdown({ handleFinish })

  return (
    <StyledWrapper>
      <Countdown>{counter}</Countdown>
    </StyledWrapper>
  )
}

export default Splash
