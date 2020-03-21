import styled from 'styled-components'

export const StyledCar = styled.img`
  position: absolute;
  bottom: 0;
  width: 25%;
  left: 1%;
  transition: 500ms;
  transform: translateX(${({ position }) => position * 140}%);
`
