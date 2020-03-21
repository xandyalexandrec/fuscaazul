import React from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import useCarPosition from '../../hooks/useCarPosition'
import useLaps from '../../hooks/useLaps'
import Scenario from '../../components/Scenario'
import Car from '../../components/Car'
import Speed from '../../components/Speed'
import Duration from '../../components/Duration'
import Laps from '../../components/Laps'
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
        <Speed>{speed}</Speed>
        <Duration>{duration}</Duration>
        <Laps>{lap}</Laps>
        <Car position={position} turbo={turbo} />
      </Scenario>
      {paused && <PauseScreen handleUnpause={setPaused} />}
    </StyledWrapper>
  )
}

export default Game
