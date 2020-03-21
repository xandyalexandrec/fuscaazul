import React from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import useCarPosition from '../../hooks/useCarPosition'
import useLaps from '../../hooks/useLaps'
import Scenario from '../../components/Scenario'
import Car from '../../components/Car'
import { StyledWrapper } from './styled'

const Game = () => {
  const [position] = useCarPosition()
  const {lap, speed, paused, setPaused, turbo, duration} = useLaps()
  useHotkeys('esc', () => setPaused(true))

  return (
    <StyledWrapper>
      <Scenario>
        {speed} km/h
        <br />
        {lap} of 10
        <br />
        {duration}s
        <br />
        <button
          onClick={() => setPaused(false)}
          disabled={!paused}
        >
          {paused ? 'paused' : 'playing'}
        </button>
        <Car position={position} turbo={turbo} />
      </Scenario>
    </StyledWrapper>
  )
}

export default Game
