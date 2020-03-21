import React from 'react'
import CarImage from '../../assets/images/car.png'
import { StyledCar } from './styled'

function Car({ position }) {
  return (
    <StyledCar position={position} src={CarImage} />
  )
}

export default Car
