import React, { useContext } from 'react'
import Context from './utils/context'
import Signup from './pages/Signup'
import Splash from './pages/Splash'
import Game from './pages/Game'
import Congrats from './pages/Congrats'

export const SIGNUP = 'SIGNUP'
export const SPLASH = 'SPLASH'
export const GAME = 'GAME'
export const CONGRATS = 'CONGRATS'

function Router() {
  const { currentRoute } = useContext(Context);

  switch (currentRoute) {
    case SIGNUP:
      return <Signup />
    case SPLASH:
      return <Splash />
    case GAME:
      return <Game />
    case CONGRATS:
      return <Congrats />
    default:
      return <Signup />
  }
}

export default Router
