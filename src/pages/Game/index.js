import React from 'react'
import useCarPosition from '../../hooks/useCarPosition'
import Scenario from '../../components/Scenario'
import Car from '../../components/Car'
import { StyledWrapper } from './styled'

const Game = () => {
  const [position] = useCarPosition()
  return (
    <StyledWrapper>
      <Scenario>
        <Car position={position} />
      </Scenario>
    </StyledWrapper>
  )
}

export default Game
