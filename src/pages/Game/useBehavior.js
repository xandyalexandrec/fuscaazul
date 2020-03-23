import { useReducer, useEffect, useCallback } from 'react'
import random from 'utils/random'
import {
  MAX_LAPS,
  LAP_DISTANCE,
  TURBO_DURATION,
  TURBO_RECHARGING_DURATION,
  INCREASE_SPEED_TURBO,
  INCREASE_MIN_SPEED,
  INCREASE_MAX_SPEED
} from './constants'

const initialState = {
  duration: 0,
  speed: 60,
  distance: 0,
  lap: 0,
  turbo: false,
  turboRecharging: false,
  paused: false,
  finished: false,
}

const HANDLE_TICK = 'HANDLE_TICK'
const SET_PAUSED = 'SET_PAUSED'
const START_TURBO = 'START_TURBO'
const STOP_TURBO = 'STOP_TURBO'
const STOP_TURBO_RECHARGING = 'STOP_TURBO_RECHARGING'

const calculateSpeed = ({ speed, turbo }) =>
  turbo
    ? speed + INCREASE_SPEED_TURBO
    : speed + random(INCREASE_MIN_SPEED, INCREASE_MAX_SPEED)

const calculateDistanceProgress = ({ distance, speed, lap }) => {
  const distanceIncreased = distance + speed
  const isNewLap = distanceIncreased >= LAP_DISTANCE
  return {
    lap: isNewLap ? lap + 1 : lap,
    distance: isNewLap ? distanceIncreased - LAP_DISTANCE : distanceIncreased
  }
}

const reducer = (state, { type, payload }) => {
  const actionTypes = {
    [HANDLE_TICK]: () => {
      const speed = calculateSpeed(state)
      const { lap, distance } = calculateDistanceProgress(state)
      return {
        ...state,
        duration: state.duration + 1,
        speed,
        distance,
        lap,
        finished: lap === MAX_LAPS
      }
    },
    [SET_PAUSED]: () => ({ ...state, paused: payload }),
    [START_TURBO]: () => ({
      ...state,
      turbo:
        !state.turbo
        && !state.turboRecharging
        && !state.paused
        && !state.finished
          ? true
          : state.turbo
    }),
    [STOP_TURBO]: () => ({ ...state, turbo: false, turboRecharging: true }),
    [STOP_TURBO_RECHARGING]: () => ({ ...state, turboRecharging: false }),
  }

  const action = actionTypes[type]
  return typeof action === 'function' ? action() : state
}

export default ({ handleFinish }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleTick = useCallback(() => dispatch({ type: HANDLE_TICK }), [dispatch])
  const setPaused = useCallback(paused => dispatch({ type: SET_PAUSED, payload: paused }), [dispatch])
  const startTurbo = useCallback(() => dispatch({ type: START_TURBO }), [dispatch])
  const stopTurbo = useCallback(() => dispatch({ type: STOP_TURBO }), [dispatch])
  const stopTurboRecharging = useCallback(() => dispatch({ type: STOP_TURBO_RECHARGING }), [dispatch])

  /*
  * After every second we tick the game updating speed, duration, lap and etc
  */
  useEffect(() => {
    let interval
    if (!state.paused) {
      interval = setInterval(handleTick, 1000)
    }
    return () => { clearInterval(interval) }
  }, [handleTick, state.paused])

  /*
  * When the game finish handleFinish is called
  */
  useEffect(() => {
    if (state.finished) {
      handleFinish({
        duration: state.duration,
        speed: state.speed,
      })
    }
  }, [handleFinish, state.finished, state.duration, state.speed])

  /*
  * Turbo is stopped after the duration defined in TURBO_DURATION
  */
  useEffect(() => {
    let timeout
    if (state.turbo) {
      timeout = setTimeout(stopTurbo, TURBO_DURATION)
    }
    return () => { clearTimeout(timeout) }
  }, [stopTurbo, state.turbo])

  /*
  * Turbo recharging is stopped after the duration defined in TURBO_RECHARGING_DURATION
  */
  useEffect(() => {
    let timeout
    if (state.turboRecharging) {
      timeout = setTimeout(stopTurboRecharging, TURBO_RECHARGING_DURATION)
    }
    return () => { clearTimeout(timeout) }
  }, [stopTurboRecharging, state.turboRecharging])

  return { state, setPaused, startTurbo }
}
