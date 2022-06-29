import { useReducer, useCallback } from 'react'
import { DEFAULT_ROUTE, SPLASH, GAME, CONGRATS, GAME_OVER } from 'router'

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
const START_GAME = 'START_GAME'
const SAVEGAME = 'SAVEGAME'
const GAMEOVER = 'GAMEOVER'
const RESTART = 'RESTART'

const reducer = (state, { type, payload }) => {
  const actionTypes = {
    [SET_CURRENT_ROUTE]: () => ({ ...state, currentRoute: payload }),
    [SIGNUP]: () => ({
      ...state,
      currentRoute: SPLASH,
      player: {
        ...state.player,
        name: payload,
      }
    }),
    [START_GAME]: () => ({
      ...state,
      currentRoute: GAME
    }),
    [SAVEGAME]: () => ({
      ...state,
      player: {
        ...state.player,
        duration: payload.duration,
        speed: payload.speed,
      },
      currentRoute: CONGRATS
    }),
    [GAMEOVER]: () => ({
      ...state,
      currentRoute: GAME_OVER
    }),
    [RESTART]: () => ({
      ...initialState,
      player: {
        ...state.player,
        name: state.player.name,
      },
      currentRoute: SPLASH,
    }),
  };

  const action = actionTypes[type];
  return typeof action === 'function' ? action() : state;
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    actions: {
      setCurrentRoute: useCallback((route) => dispatch({ type: SET_CURRENT_ROUTE, payload: route }), [dispatch]),
      signup: useCallback((name) => dispatch({ type: SIGNUP, payload: name }), [dispatch]),
      startGame: useCallback(() => dispatch({ type: START_GAME }), [dispatch]),
      savegame: useCallback(({ duration, speed }) => dispatch({ type: SAVEGAME, payload: { duration, speed } }), [dispatch]),
      gameover: useCallback(() => dispatch({ type: GAMEOVER }), [dispatch]),
      restart: useCallback(() => dispatch({ type: RESTART }), [dispatch]),
    }
  }
}
