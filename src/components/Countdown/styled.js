import styled from 'styled-components'
import { DARK_COLOR } from 'style/colors'
import border from 'style/border'

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${DARK_COLOR};
  width: 18rem;
  height: 18rem;
  ${border}
  animation: scale 1000ms infinite linear;
  @keyframes scale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.6);
    }
  }
`

export const StyledNumber = styled.h1`
  margin-top: 1rem;
  font-size: 12rem;
  color: white;
  text-shadow: 7px 7px 0 black, -5px -5px 0 black;
`
