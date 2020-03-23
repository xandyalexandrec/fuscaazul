import React, { useContext, useRef, memo } from 'react'
import { Context } from 'components/Context'
import { CONGRATS, GAME_OVER } from 'router'
import Scenario from 'components/Scenario'
import Car from 'components/Car'
import Speed from 'components/Speed'
import Duration from 'components/Duration'
import Laps from 'components/Laps'
import PauseScreen from 'components/PauseScreen'
import Stone from 'components/Stone'
import useBehavior from './useBehavior'
import useCollision from './useCollision'
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

  const handleGameOver = () => {
    setTimeout(() => {
      context.actions.setCurrentRoute(GAME_OVER)
    }, 1000)
  }

  const { state, setPaused, startTurbo } = useBehavior({ handleFinish })
  const { speed, duration, lap, turbo, paused } = state

  const collision = useCollision({ paused, handleGameOver })
  const { stoneVisible, carPosition, stonePosition, collided } = collision.state

  useControls({ scene, paused, setPaused, startTurbo, ...collision.carActions })

  return (
    <StyledWrapper ref={scene}>
      <Scenario>
        <Speed>{speed}</Speed>
        <Duration>{duration}</Duration>
        <Laps currentLap={lap} maxLaps={MAX_LAPS} />
        <Stone visible={stoneVisible} position={stonePosition} />
        <Car position={carPosition} turbo={turbo} collided={collided} />
      </Scenario>
      {paused && <PauseScreen handleUnpause={() => setPaused(false)} />}
    </StyledWrapper>
  )
}

export default memo(Game)
