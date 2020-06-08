import React, { useContext, memo } from 'react'
import { Context } from 'components/Context'
import Button from 'components/Button'
import { StyledWrapper, StyledTitle, StyledDescription, StyledUnderscore } from './styled'
import Balloons from 'assets/images/balloons.gif'

const Congrats = () => {
  const { state, actions } = useContext(Context)
  const { name, duration, speed } = state.player
  const restartGame = () => {
    actions.restart()
  }
  return (
    <StyledWrapper>
      <img src={Balloons} alt="Balloons" />
      <StyledTitle>CONGRATULATIONS!</StyledTitle>
      <StyledDescription>{name}, you finished the game at <StyledUnderscore>{speed}</StyledUnderscore> km/h in a total of <StyledUnderscore>{duration}</StyledUnderscore> seconds.</StyledDescription>
      <Button onClick={restartGame}>Restart</Button>
    </StyledWrapper>
  )
}

export default memo(Congrats)