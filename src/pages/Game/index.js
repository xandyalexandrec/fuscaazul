import React, { useContext, memo } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import Context from '../../utils/context'
import { CONGRATS } from '../../router'
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
  const { player, setPlayer, setCurrentRoute } = useContext(Context)
  const position = useCarPosition()

  const handleFinish = ({ speed, duration }) => {
    setPlayer({
      ...player,
      speed,
      duration,
    })
    setCurrentRoute(CONGRATS)
  }

  const {
    lap,
    speed,
    paused,
    setPaused,
    turbo,
    duration,
    maxLaps
  } = useLaps({ handleFinish })

  useHotkeys('esc', () => setPaused(true))
  useHotkeys('enter', () => setPaused(false))

  return (
    <StyledWrapper>
      <Scenario>
        <Speed>{speed}</Speed>
        <Duration>{duration}</Duration>
        <Laps currentLap={lap} maxLaps={maxLaps} />
        <Car position={position} turbo={turbo} />
      </Scenario>
      {paused && <PauseScreen handleUnpause={() => setPaused(false)} />}
    </StyledWrapper>
  )
}

export default memo(Game)
