import styled from 'styled-components'
import border from 'style/border'

export const StyledWrapper = styled.section`
  margin-bottom: 1.2rem;
`

export const StyledUl = styled.ul`
  display: none;
  justify-content: center;
`

export const StyledUlDesktop = styled(StyledUl)`
  @media (min-width: 768px) {
    display: flex;
  }
`

export const StyledUlMobile = styled(StyledUl)`
  @media (max-width: 768px) {
    display: flex;
  }
`

export const StyledLi = styled.li`
  padding: 0.5rem;
  text-align: center;
`

export const StyledKey = styled.span`
  padding: 0.5rem;
  ${border}
`

export const StyledDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 0.6rem;
  letter-spacing: -1px;
`
