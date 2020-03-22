import React, { useContext, useCallback, memo } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { Context } from 'components/Context'
import { CONGRATS } from 'router'
import useCarPosition from 'hooks/useCarPosition'
import Scenario from 'components/Scenario'
import Car from 'components/Car'
import Speed from 'components/Speed'
import Duration from 'components/Duration'
import Laps from 'components/Laps'
import PauseScreen from 'components/PauseScreen'
import useBehavior from './useBehavior'
import { StyledWrapper } from './styled'
import { MAX_LAPS } from './constants'

const Game = () => {
  const context = useContext(Context)
  const position = useCarPosition()

  const handleFinish = ({ speed, duration }) => {
    context.actions.savegame({ speed, duration })
    context.actions.setCurrentRoute(CONGRATS)
  }

  const {
    state,
    setPaused,
  } = useBehavior({ handleFinish })

  const { speed, duration, lap, turbo, paused } = state

  useHotkeys('esc', () => setPaused(true))
  useHotkeys('enter', () => setPaused(false))

  return (
    <StyledWrapper>
      <Scenario>
        <Speed>{speed}</Speed>
        <Duration>{duration}</Duration>
        <Laps currentLap={lap} maxLaps={MAX_LAPS} />
        <Car position={position} turbo={turbo} />
      </Scenario>
      {paused && <PauseScreen handleUnpause={() => setPaused(false)} />}
    </StyledWrapper>
  )
}

export default memo(Game)
