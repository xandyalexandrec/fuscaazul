import React, { useContext } from 'react'
import { Context } from 'components/Context'
import Signup from './pages/Signup'
import Splash from './pages/Splash'
import Game from './pages/Game'
import Congrats from './pages/Congrats'
import GameOver from './pages/GameOver'

export const SIGNUP = 'SIGNUP'
export const SPLASH = 'SPLASH'
export const GAME = 'GAME'
export const CONGRATS = 'CONGRATS'
export const GAME_OVER = 'GAME_OVER'
export const DEFAULT_ROUTE = SIGNUP

const routes = {
  SIGNUP: <Signup />,
  SPLASH: <Splash />,
  GAME: <Game />,
  CONGRATS: <Congrats />,
  GAME_OVER: <GameOver />,
}

function Router() {
  const { state } = useContext(Context)
  return routes[state.currentRoute] || routes[DEFAULT_ROUTE]
}

export default Router
