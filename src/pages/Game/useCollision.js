import { useReducer, useEffect, useCallback } from 'react'
import random from 'utils/random'
import {
  LEFT_POSITION,
  MIDDLE_POSITION,
  RIGHT_POSITION,
  STATUS_STONE_HIDE,
  STATUS_STONE_VISIBLE,
  STATUS_STONE_COLLID,
} from './constants'

const initialState = {
  carPosition: MIDDLE_POSITION,
  stonePosition: LEFT_POSITION,
  stoneStatus: STATUS_STONE_HIDE,
  collided: false,
}

const SET_CAR_POSITION = 'SET_CAR_POSITION'
const SET_CAR_POSITION_LEFT = 'SET_CAR_POSITION_LEFT'
const SET_CAR_POSITION_RIGHT = 'SET_CAR_POSITION_RIGHT'
const SET_RANDON_STONE = 'SET_RANDON_STONE'
const COLLID_STONE = 'COLLID_STONE'
const HIDE_STONE = 'HIDE_STONE'
const HANDLE_COLLISON = 'HANDLE_COLLISON'

const reducer = (state, { type, payload }) => {
  const actionTypes = {
    [SET_CAR_POSITION]: () => ({ ...state, carPosition: payload }),
    [SET_CAR_POSITION_LEFT]: () => ({ ...state, carPosition: state.carPosition > LEFT_POSITION ? state.carPosition - 1 : state.carPosition }),
    [SET_CAR_POSITION_RIGHT]: () => ({ ...state, carPosition: state.carPosition < RIGHT_POSITION ? state.carPosition + 1 : state.carPosition }),
    [SET_RANDON_STONE]: () => ({
      ...state,
      stonePosition: payload,
      stoneStatus: STATUS_STONE_VISIBLE,
    }),
    [COLLID_STONE]: () => ({ ...state, stoneStatus : STATUS_STONE_COLLID }),
    [HIDE_STONE]: () => ({ ...state, stoneStatus : STATUS_STONE_HIDE }),
    [HANDLE_COLLISON]: () => ({ ...state, collided: state.stoneStatus === STATUS_STONE_COLLID && state.carPosition === state.stonePosition }),
  }

  const action = actionTypes[type]
  return typeof action === 'function' ? action() : state
}

export default ({ paused, handleGameOver }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const carActions = {
    moveLeftPosition: useCallback(() => dispatch({ type: SET_CAR_POSITION, payload: LEFT_POSITION }), [dispatch]),
    moveMiddlePosition: useCallback(() => dispatch({ type: SET_CAR_POSITION, payload: MIDDLE_POSITION }), [dispatch]),
    moveRightPosition: useCallback(() => dispatch({ type: SET_CAR_POSITION, payload: RIGHT_POSITION }), [dispatch]),
    moveLeft: useCallback(() => dispatch({ type: SET_CAR_POSITION_LEFT }), [dispatch]),
    moveRight: useCallback(() => dispatch({ type: SET_CAR_POSITION_RIGHT }), [dispatch]),
  }

  const setRandomStone = useCallback(() => dispatch({
    type: SET_RANDON_STONE,
    payload: random(LEFT_POSITION, RIGHT_POSITION)
  }), [dispatch])
  const setCollidStone = useCallback(() => dispatch({ type: COLLID_STONE }), [dispatch])
  const hideStone = useCallback(() => dispatch({ type: HIDE_STONE }), [dispatch])
  const handleCollision = useCallback(() => dispatch({ type: HANDLE_COLLISON }), [dispatch])

  /*
  * Insert random stone
  */
  useEffect(() => {
    let timeoutHide
    let timeoutVisible
    let timeoutCollid
    if (!paused) {
      switch (state.stoneStatus) {
        case STATUS_STONE_HIDE:
          timeoutHide = setTimeout(setRandomStone, random(2, 6) * 1000)
          break
        case STATUS_STONE_VISIBLE:
          timeoutVisible = setTimeout(setCollidStone, 1000)
          break
        case STATUS_STONE_COLLID:
          timeoutCollid = setTimeout(hideStone, 1000)
          break
        default:
          new Error('Invalid stone status')
      }
    }
    return () => {
      clearTimeout(timeoutVisible)
      clearTimeout(timeoutHide)
      clearTimeout(timeoutCollid)
    }
  }, [state.stoneStatus, paused, setRandomStone, setCollidStone, hideStone])

  /*
  * Handle collison
  */
  useEffect(() => {
    let interval
    if (!paused) {
      interval = setInterval(handleCollision, 1000)
    }
    return () => { clearInterval(interval) }
  }, [paused, handleCollision])

  /*
  * Game over after collison
  */
  useEffect(() => {
    if(state.collided) {
      handleGameOver()
    }
  }, [state.collided, handleGameOver])

  return { state, carActions }
}
