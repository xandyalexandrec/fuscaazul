import styled from 'styled-components'

export const StyledPosition = styled.div`
  position: absolute;
  bottom: 30%;
  left: 13%;
  width: 25%;
  text-align: center;
  transform: translateX(${({ position }) => position * 90}%);
  @media (max-width: 768px) {
    bottom: 17%;
  }
`
export const StyledStone = styled.img`
  width: 50%;
  transform-origin: top;
  ${({ visible }) =>
  visible
    ? `
      transition: 2500ms linear;
      transform: scale(.9) translateY(70vh);
    `
    : `
      transform: scale(0) translateY(-50px);
    `}
`
