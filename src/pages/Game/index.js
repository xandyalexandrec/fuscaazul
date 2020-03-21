import React from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import useCarPosition from '../../hooks/useCarPosition'
import useLaps from '../../hooks/useLaps'
import Scenario from '../../components/Scenario'
import Car from '../../components/Car'
import PauseScreen from '../../components/PauseScreen'
import { StyledWrapper } from './styled'

const Game = () => {
  const [position] = useCarPosition()
  const {lap, speed, paused, setPaused, turbo, duration} = useLaps()
  useHotkeys('esc', () => setPaused(true))
  useHotkeys('enter', () => setPaused(false))

  return (
    <StyledWrapper>
      <Scenario>
        {speed} km/h
        <br />
        {lap} of 10
        <br />
        {duration}s
        <Car position={position} turbo={turbo} />
      </Scenario>
      {paused && <PauseScreen handleUnpause={setPaused} />}
    </StyledWrapper>
  )
}

export default Game
