import React, { useContext } from 'react'
import Context from '../../utils/context'
import { StyledWrapper } from './styled'

const Congrats = () => {
  const { player } = useContext(Context)
  const { name, duration, speed } = player
  return (
    <StyledWrapper>
      {name}
      <br />
      {duration}
      <br />
      {speed}

    </StyledWrapper>
  )
}

export default Congrats
