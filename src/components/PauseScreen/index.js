import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { StyledWrapper } from './styled'

const PauseScreen = ({ handleUnpause }) => (
  <StyledWrapper>
    <Button onClick={handleUnpause}>Continue or press enter</Button>
  </StyledWrapper>
)

PauseScreen.propTypes = {
  handleUnpause: PropTypes.func.isRequired,
}

export default memo(PauseScreen)
