import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
`

export const StyledHeader = styled.header`
  text-align: center;
`

export const StyledTitle = styled.h1`
font-size: 2.2rem;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
`

export const StyledTitleBigger = styled.h1`
  font-size: 2.45rem;
  margin-bottom: 3rem;
`

export const StyledCar = styled.img`
  width: 40vh;
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
