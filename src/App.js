import React, { useState } from 'react'
import Context from './utils/context'
import Router, { GAME } from './router'
import ResetCss from './style/reset'
import FontsCss from './style/fonts'

function App() {
  const { Provider } = Context;
  const [player, setPlayer] = useState({
    name: '',
    duration: null,
    speed: null,
  })
  const [currentRoute, setCurrentRoute] = useState(GAME)

  return (
    <Provider value={{ player, setPlayer, currentRoute, setCurrentRoute }}>
      <ResetCss />
      <FontsCss />
      <Router />
    </Provider>
  )
}

export default App
