import React, { useState } from 'react'
import Context from './utils/context'
import Router, { SIGNUP } from './router'

function App() {
  const { Provider } = Context;
  const [player, setPlayer] = useState({
    name: null
  })
  const [currentRoute, setCurrentRoute] = useState(SIGNUP)

  return (
    <Provider value={{ player, setPlayer, currentRoute, setCurrentRoute }}>
      <Router />
    </Provider>
  )
}

export default App
