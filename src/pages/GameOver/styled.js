import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  background: black;
`

export const StyledTitleGame = styled.h1`
  font-size: 4rem;
  background: linear-gradient(180deg, rgba(245,251,95,1) 0%, rgba(248,167,12,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`
export const StyledTitleOver = styled.h1`
  font-size: 4rem;
  background: linear-gradient(180deg, rgba(247,148,2,1) 0%, rgba(245,23,0,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const StyledDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin: 2rem 0;
  color: white;
`
