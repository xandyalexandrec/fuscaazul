import React from 'react'
import PropTypes from 'prop-types'
import CarImage from '../../assets/images/car.png'
import { StyledPosition, StyledCar } from './styled'

const Car = ({ position }) => (
  <StyledPosition position={position}>
    <StyledCar src={CarImage} />
  </StyledPosition>
)

Car.propTypes = {
  position: PropTypes.number.isRequired,
}

export default Car
