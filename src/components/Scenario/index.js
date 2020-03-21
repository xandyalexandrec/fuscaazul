import React from 'react'
import PropTypes from 'prop-types'
import Background from '../../assets/images/background.gif'
import { StyledWrapper, StyledBackground, StyledContent } from './styled'

const Scenario = ({ children }) => (
  <StyledWrapper>
    <StyledBackground src={Background} />
    <StyledContent>
      {children}
    </StyledContent>
  </StyledWrapper>
)

Scenario.propTypes = {
  children: PropTypes.node,
}

Scenario.defaultProps = {
  children: undefined,
}

export default Scenario
