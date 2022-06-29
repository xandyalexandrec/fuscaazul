import React, { useContext, memo } from 'react'
import { Context } from 'components/Context'
import Button from 'components/Button'
import { StyledWrapper, StyledTitleGame, StyledTitleOver, StyledDescription } from './styled'

const Congrats = () => {
  const {
    state: {
      player: {
        name
      }
    },
    actions: {
      restart
    }
  } = useContext(Context)
  return (
    <StyledWrapper>
      <StyledTitleGame>GAME</StyledTitleGame>
      <StyledTitleOver>OVER</StyledTitleOver>
      <StyledDescription>{name}, a stone exploded your car</StyledDescription>
      <Button onClick={restart}>Restart</Button>
    </StyledWrapper>
  )
}

export default memo(Congrats)
