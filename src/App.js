import React from 'react'
import Provider from 'components/Context'
import Router from 'router'
import ResetCss from 'style/reset'
import FontsCss from 'style/fonts'

const App = () => (
  <Provider>
    <ResetCss />
    <FontsCss />
    <Router />
  </Provider>
)

export default App
