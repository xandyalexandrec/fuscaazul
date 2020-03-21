import React, { useContext } from 'react'
import Context from '../../utils/context'
import Countdown from '../../components/Countdown'
import { GAME } from '../../router'
import { StyledWrapper } from './styled'

const Splash = () => {
  const { setCurrentRoute } = useContext(Context)
  const handleFinish = () => {
    setCurrentRoute(GAME)
  }

  return (
    <StyledWrapper>
      <Countdown handleFinish={handleFinish} />
    </StyledWrapper>
  )
}

export default Splash
