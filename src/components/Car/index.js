import React from 'react'
import PropTypes from 'prop-types'
import CarImage from '../../assets/images/car.png'
import { StyledCar } from './styled'

const Car = ({ position }) => <StyledCar position={position} src={CarImage} />

Car.propTypes = {
  position: PropTypes.number.isRequired,
}

export default Car
