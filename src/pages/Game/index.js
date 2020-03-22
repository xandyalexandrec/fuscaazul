import React, { useContext, useCallback, memo } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import Context from 'utils/context'
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
  const { player, setPlayer, setCurrentRoute } = useContext(Context)
  const position = useCarPosition()

  const handleFinish = useCallback(({ speed, duration }) => {
    setPlayer({
      ...player,
      speed,
      duration,
    })
    setCurrentRoute(CONGRATS)
  }, [player])

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
