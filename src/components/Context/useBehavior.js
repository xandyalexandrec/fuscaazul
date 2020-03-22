import { useReducer, useCallback } from 'react'
import { DEFAULT_ROUTE } from 'router'

const initialState = {
  player: {
    name: '',
    duration: null,
    speed: null,
  },
  currentRoute: DEFAULT_ROUTE
}

const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE'
const SIGNUP = 'SIGNUP'
const SAVEGAME = 'SAVEGAME'

const reducer = (state, { type, payload }) => {
  const actionTypes = {
    [SET_CURRENT_ROUTE]: () => ({ ...state, currentRoute: payload }),
    [SIGNUP]: () => ({ ...state, player: {
      ...state.player,
      name: payload,
    }}),
    [SAVEGAME]: () => ({ ...state, player: {
      ...state.player,
      duration: payload.duration,
      speed: payload.speed,
    }}),
  };

  const action = actionTypes[type];
  return typeof action === 'function' ? action() : state;
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    setCurrentRoute: useCallback((route) => dispatch({ type: SET_CURRENT_ROUTE, payload: route }), [dispatch]),
    signup: useCallback((name) => dispatch({ type: SIGNUP, payload: name }), [dispatch]),
    savegame: useCallback(({ duration, speed }) => dispatch({ type: SAVEGAME, payload: { duration, speed } }), [dispatch]),
  }

  return { state, actions }
}
