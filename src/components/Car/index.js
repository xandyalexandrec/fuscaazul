import React from 'react'
import PropTypes from 'prop-types'
import CarImage from '../../assets/images/car.png'
import FireImage from '../../assets/images/fire.gif'
import { StyledPosition, StyledTurboPosition, StyledCar, StyledFire } from './styled'

const Car = ({ position, turbo }) => (
  <StyledPosition position={position}>
    <StyledTurboPosition turbo={turbo}>
      <StyledCar src={CarImage} />
      <StyledFire active={turbo} position="left" src={FireImage} />
      <StyledFire active={turbo} position="right" src={FireImage} />
    </StyledTurboPosition>
  </StyledPosition>
)

Car.propTypes = {
  position: PropTypes.number.isRequired,
  turbo: PropTypes.bool.isRequired,
}

export default Car
