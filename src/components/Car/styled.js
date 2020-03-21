import styled from 'styled-components'

export const StyledPosition = styled.div`
  position: absolute;
  bottom: 0;
  width: 25%;
  left: 1%;
  transition: 500ms;
  transform: translateX(${({ position }) => position * 140}%);
`

export const StyledCar = styled.img`
  width: 100%;
  animation: bounceInUp 250ms infinite linear;
  @keyframes bounceInUp {
    from {
      -webkit-transform: translate3d(0, -2px, 0);
      transform: translate3d(0, -2px, 0);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
`
