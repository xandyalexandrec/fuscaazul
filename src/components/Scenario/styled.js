import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media (max-width: 798px) and (orientation: portrait) {
    background: #40b4f7;
  }
`
export const StyledBackground = styled.img`
  height: 100%;
  @media (max-width: 798px) and (orientation: portrait) {
    object-fit: contain;
    object-position: bottom;
    width: 100%;
    height: 100%;
  }
`
export const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
