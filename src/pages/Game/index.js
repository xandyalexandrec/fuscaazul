import React, { useContext, useRef, memo } from 'react'
import { Context } from 'components/Context'
import Scenario from 'components/Scenario'
import Car from 'components/Car'
import Speed from 'components/Speed'
import Duration from 'components/Duration'
import Laps from 'components/Laps'
import PauseScreen from 'components/PauseScreen'
import Stone from 'components/Stone'
import useControls from 'pages/Game/useControls'
import useCollision from 'pages/Game/useCollision'
import useBehavior from './useBehavior'
import { StyledWrapper } from './styled'
import { MAX_LAPS, STATUS_STONE_HIDE } from './constants'

const Game = () => {
  const scene = useRef(null)
  const { actions: { savegame, gameover }} = useContext(Context)

  const handleGameOver = () => {
    setTimeout(() => {
      gameover();
    }, 1000)
  }

  const {
    state: {
      speed, duration, lap, turbo, paused
    },
    setPaused,
    startTurbo
  } = useBehavior({ handleFinish: savegame })

  const {
    state: {
      stoneStatus, carPosition, stonePosition, collided
    },
    moveLeftPosition,
    moveMiddlePosition,
    moveRightPosition,
    moveLeft,
    moveRight
  } = useCollision({ paused, handleGameOver })

  useControls({ scene, paused, setPaused, startTurbo, moveLeftPosition, moveMiddlePosition, moveRightPosition, moveLeft, moveRight })

  return (
    <StyledWrapper ref={scene}>
      <Scenario>
        <Speed>{speed}</Speed>
        <Duration>{duration}</Duration>
        <Laps currentLap={lap} maxLaps={MAX_LAPS} />
        <Stone visible={stoneStatus !== STATUS_STONE_HIDE} position={stonePosition} />
        <Car position={carPosition} turbo={turbo} collided={collided} />
      </Scenario>
      {paused && <PauseScreen handleUnpause={() => setPaused(false)} />}
    </StyledWrapper>
  )
}

export default memo(Game)
