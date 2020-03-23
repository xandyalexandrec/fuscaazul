import React, { useContext, useRef, memo } from 'react'
import { Context } from 'components/Context'
import { CONGRATS } from 'router'
import Scenario from 'components/Scenario'
import Car from 'components/Car'
import Speed from 'components/Speed'
import Duration from 'components/Duration'
import Laps from 'components/Laps'
import PauseScreen from 'components/PauseScreen'
import useBehavior from './useBehavior'
import useCarPosition from './useCarPosition'
import useControls from './useControls'
import { StyledWrapper } from './styled'
import { MAX_LAPS } from './constants'

const Game = () => {
  const scene = useRef(null)
  const context = useContext(Context)

  const handleFinish = ({ speed, duration }) => {
    context.actions.savegame({ speed, duration })
    context.actions.setCurrentRoute(CONGRATS)
  }

  const {
    position,
    actions,
  } = useCarPosition()

  const {
    state,
    setPaused,
    startTurbo,
  } = useBehavior({ handleFinish })

  useControls({ positionActions: actions, setPaused, startTurbo, scene })

  const { speed, duration, lap, turbo, paused } = state

  return (
    <StyledWrapper ref={scene}>
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
