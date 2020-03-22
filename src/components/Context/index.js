import React, { memo } from 'react'
import PropTypes from 'prop-types'
import useBehavior from './useBehavior'

export const Context = React.createContext()

const Provider = ({ children }) => {
  const { actions, state } = useBehavior()
  return <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

export default memo(Provider)
