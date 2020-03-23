import styled from 'styled-components'

export const StyledPosition = styled.div`
  position: absolute;
  bottom: 20px;
  width: 25%;
  left: 1%;
  transition: 500ms;
  transform: translateX(${({ position }) => position * 140}%);
`

export const StyledTurboPosition = styled.div`
  width: 100%;
  transition: 1000ms ease-in-out;
  ${({ turbo }) =>
    turbo
      ? `transform: translateY(-80px) scale(0.8);`
      : `transform: translateY(0) scale(1);`}
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
export const StyledFire = styled.img`
  position: absolute;
  transform-origin: bottom;
  width: 22%;
  bottom: 14%;
  transition: 300ms ease-in-out;
  transform: rotate(180deg) scale(${({ active }) => active ? `1` : `0` });
  ${({ position }) =>
    position === 'left'
    ? `left: 15%;`
    : `right: 18%;`}
`
