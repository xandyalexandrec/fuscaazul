import React, { useContext, memo } from 'react'
import { Context } from 'components/Context'
import Button from 'components/Button'
import { StyledWrapper, StyledTitleGame, StyledTitleOver, StyledDescription } from './styled'

const Congrats = () => {
  const { actions } = useContext(Context)
  const restartGame = () => {
    actions.restart()
  }
  return (
    <StyledWrapper>
      <StyledTitleGame>GAME</StyledTitleGame>
      <StyledTitleOver>OVER</StyledTitleOver>
      <StyledDescription>A rocket exploded your car</StyledDescription>
      <Button onClick={restartGame}>Restart</Button>
    </StyledWrapper>
  )
}

export default memo(Congrats)
