import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Car from '../../assets/images/car.png';
import { StyledWrapper, StyledHeader, StyledTitle, StyledTitleBigger, StyledCar } from './styled'

function Signup() {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledCar src={Car} />
        <StyledTitle>FUSCA AZUL</StyledTitle>
        <StyledTitleBigger>CHALLENGE</StyledTitleBigger>
      </StyledHeader>
      <Input label="Your name" />
      <Button>Start game</Button>
    </StyledWrapper>
  )
}

export default Signup
