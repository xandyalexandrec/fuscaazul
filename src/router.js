import React, { useContext } from 'react'
import { Context } from 'components/Context'
import Signup from './pages/Signup'
import Splash from './pages/Splash'
import Game from './pages/Game'
import Congrats from './pages/Congrats'

export const SIGNUP = 'SIGNUP'
export const SPLASH = 'SPLASH'
export const GAME = 'GAME'
export const CONGRATS = 'CONGRATS'
export const DEFAULT_ROUTE = SIGNUP

const routes = {
  SIGNUP: <Signup />,
  SPLASH: <Splash />,
  GAME: <Game />,
  CONGRATS: <Congrats />,
}

function Router() {
  const { state } = useContext(Context)
  return routes[state.currentRoute] || routes[DEFAULT_ROUTE]
}

export default Router
