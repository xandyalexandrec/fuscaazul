import React, { memo } from 'react'
import PropTypes from 'prop-types'
import StoneImage from 'assets/images/stone.png'
import { StyledPosition, StyledStone } from './styled'

const Stone = ({ position, visible }) => (
  <StyledPosition position={position}>
    <StyledStone visible={visible} src={StoneImage} />
  </StyledPosition>
)

Stone.propTypes = {
  position: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default memo(Stone)
