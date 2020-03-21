import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: absolute;
  top: 10rem;
  right: 0.8rem;
  padding: 0.2rem 0.5rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: 3px 3px 0 black, -2px -2px 0 black;
  &:after {
    content: 's';
    margin-left: 0.5rem;
    font-size: 1rem;
  }
}
`
