import styled from 'styled-components'

export const StyledPosition = styled.div`
  position: absolute;
  bottom: 27%;
  left: 13%;
  width: 25%;
  transition: 500ms;
  text-align: center;
  transform: translateX(${({ position }) => position * 90}%);
  @media (max-width: 768px) {
    bottom: 17%;
  }
`
export const StyledStone = styled.img`
  width: 50%;
  transition: 300ms;
  transform: scale(${({ visible }) => visible ? `1` : `0` });
`
