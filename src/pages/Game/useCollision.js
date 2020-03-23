import { useReducer, useEffect, useCallback } from 'react'
import random from 'utils/random'
import { LEFT_POSITION, MIDDLE_POSITION, RIGHT_POSITION, STONE_HIDE_DELAY } from './constants'

const initialState = {
  carPosition: MIDDLE_POSITION,
  stonePosition: LEFT_POSITION,
  stoneVisible: false,
  collided: false,
}

const SET_CAR_POSITION = 'SET_CAR_POSITION'
const SET_CAR_POSITION_LEFT = 'SET_CAR_POSITION_LEFT'
const SET_CAR_POSITION_RIGHT = 'SET_CAR_POSITION_RIGHT'
const SET_RANDON_STONE = 'SET_RANDON_STONE'
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
      stoneVisible: true,
    }),
    [HIDE_STONE]: () => ({ ...state, stoneVisible : false }),
    [HANDLE_COLLISON]: () => ({ ...state, collided: state.stoneVisible && state.carPosition === state.stonePosition }),
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

  const hideStone = useCallback(() => dispatch({ type: HIDE_STONE }), [dispatch])

  const handleCollision = useCallback(() => dispatch({ type: HANDLE_COLLISON }), [dispatch])

  /*
  * Insert random stone
  */
  useEffect(() => {
    let timeoutShow
    let timeoutHide
    if (!paused) {
      if (!state.stoneVisible) {
        timeoutShow = setTimeout(setRandomStone, random(3, 8) * 1000)
      } else {
        timeoutHide = setTimeout(hideStone, STONE_HIDE_DELAY)
      }
    }
    return () => {
      clearTimeout(timeoutShow)
      clearTimeout(timeoutHide)
    }
  }, [state.stoneVisible, state.visible, paused, setRandomStone, hideStone,])

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
