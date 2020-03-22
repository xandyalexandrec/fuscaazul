import React, { useContext, memo } from 'react'
import { Context } from 'components/Context'
import Button from 'components/Button'
import { StyledWrapper, StyledTitle, StyledDescription, StyledUnderscore } from './styled'
import Baloon from 'assets/images/baloon.gif'

const Congrats = () => {
  const { state, actions } = useContext(Context)
  const { name, duration, speed } = state.player
  const restartGame = () => {
    actions.reset()
  }
  return (
    <StyledWrapper>
      <img src={Baloon} />
      <StyledTitle>CONGRATULATIONS!</StyledTitle>
      <StyledDescription>{name}, you finished the game at <StyledUnderscore>{speed}</StyledUnderscore> km/h in a total of <StyledUnderscore>{duration}</StyledUnderscore> seconds.</StyledDescription>
      <Button onClick={restartGame}>Restart</Button>
    </StyledWrapper>
  )
}

export default memo(Congrats)
