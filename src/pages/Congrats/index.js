import React, { useContext, memo } from 'react'
import Context from 'utils/context'
import { StyledWrapper } from './styled'

const Congrats = () => {
  const { player } = useContext(Context)
  const { name, duration, speed } = player
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
