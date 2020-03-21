import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { StyledWrapper } from './styled'

const PauseScreen = ({ handleUnpause }) => (
  <StyledWrapper>
    <Button onClick={() => handleUnpause(false)}>Continue or press enter</Button>
  </StyledWrapper>
)

PauseScreen.propTypes = {
  handleUnpause: PropTypes.func.isRequired,
}

export default PauseScreen
