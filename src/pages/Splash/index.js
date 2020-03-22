import React, { useContext } from 'react'
import { Context } from 'components/Context'
import Countdown from 'components/Countdown'
import { GAME } from 'router'
import useCountdown from 'hooks/useCountdown/'
import { StyledWrapper } from './styled'

const Splash = () => {
  const { actions } = useContext(Context)
  const counter = useCountdown({ handleFinish: () => actions.setCurrentRoute(GAME) })

  return (
    <StyledWrapper>
      <Countdown>{counter}</Countdown>
    </StyledWrapper>
  )
}

export default Splash
