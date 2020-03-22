import React, { useContext, memo } from 'react'
import { Context } from 'components/Context'
import { StyledWrapper } from './styled'

const Congrats = () => {
  const { state } = useContext(Context)
  const { name, duration, speed } = state.player
  return (
    <StyledWrapper>
      <pre>
        {name}
        {duration}
        {speed}
      </pre>
    </StyledWrapper>
  )
}

export default memo(Congrats)
