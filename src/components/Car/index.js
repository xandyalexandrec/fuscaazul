import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CarImage from 'assets/images/car.png'
import FireImage from 'assets/images/fire.gif'
import ExplosionImage from 'assets/images/explosion.gif'
import { StyledPosition, StyledTurboPosition, StyledCar, StyledFire, StyledExplosion } from './styled'

const Car = ({ position, turbo, collided }) => (
  <StyledPosition position={position}>
    <StyledTurboPosition turbo={turbo}>
      <StyledCar src={CarImage} />
      <StyledFire active={turbo} position="left" src={FireImage} />
      <StyledFire active={turbo} position="right" src={FireImage} />
      {collided && <StyledExplosion src={ExplosionImage} />}
    </StyledTurboPosition>
  </StyledPosition>
)

Car.propTypes = {
  position: PropTypes.number.isRequired,
  turbo: PropTypes.bool.isRequired,
  collided: PropTypes.bool.isRequired,
}

export default memo(Car)
