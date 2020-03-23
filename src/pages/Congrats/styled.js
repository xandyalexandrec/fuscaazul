import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
`

export const StyledTitle = styled.h1`
  font-size: 2.2rem;
  margin: 1.5rem 0;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const StyledDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 1.5rem;
`

export const StyledUnderscore = styled.span`
  text-decoration: underline;
`
