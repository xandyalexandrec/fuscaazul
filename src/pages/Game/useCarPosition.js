import { useReducer, useCallback } from 'react'

const LEFT_POSITION = 0;
const MIDDLE_POSITION = 1;
const RIGHT_POSITION = 2;

const initialState = {
  position: MIDDLE_POSITION,
}

const SET_POSITION = 'SET_POSITION'
const SET_POSITION_LEFT = 'SET_POSITION_LEFT'
const SET_POSITION_RIGHT = 'SET_POSITION_RIGHT'

const reducer = (state, { type, payload }) => {
  const actionTypes = {
    [SET_POSITION]: () => ({ ...state, position: payload }),
    [SET_POSITION_LEFT]: () => ({ ...state, position: state.position > LEFT_POSITION ? state.position - 1 : state.position }),
    [SET_POSITION_RIGHT]: () => ({ ...state, position: state.position < RIGHT_POSITION ? state.position + 1 : state.position }),
  }

  const action = actionTypes[type]
  return typeof action === 'function' ? action() : state
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = {
    moveLeftPosition: useCallback(() => dispatch({ type: SET_POSITION, payload: LEFT_POSITION }), [dispatch]),
    moveMiddlePosition: useCallback(() => dispatch({ type: SET_POSITION, payload: MIDDLE_POSITION }), [dispatch]),
    moveRightPosition: useCallback(() => dispatch({ type: SET_POSITION, payload: RIGHT_POSITION }), [dispatch]),
    moveLeft: useCallback(() => dispatch({ type: SET_POSITION_LEFT }), [dispatch]),
    moveRight: useCallback(() => dispatch({ type: SET_POSITION_RIGHT }), [dispatch]),
  }

  return { state, actions }
}
