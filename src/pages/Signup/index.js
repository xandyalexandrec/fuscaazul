import React, { useState, useContext } from 'react'
import Context from 'utils/context'
import { SPLASH } from 'router'
import Input from 'components/Input'
import Error from 'components/Error'
import Button from 'components/Button'
import Car from 'assets/images/car.png';
import { StyledWrapper, StyledHeader, StyledTitle, StyledTitleBigger, StyledForm, StyledCar } from './styled'

const Signup = () => {
  const { player, setPlayer, setCurrentRoute } = useContext(Context)
  const [name, setName] = useState(player.name)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && name.length > 2) {
      setPlayer({
        ...player,
        name: name
      })
      setCurrentRoute(SPLASH)
    } else {
      setError('Must have at least three letters')
    }
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledCar src={Car} />
        <StyledTitle>FUSCA AZUL</StyledTitle>
        <StyledTitleBigger>CHALLENGE</StyledTitleBigger>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          label="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          focus
        />
        {error && <Error>{error}</Error>}
        <Button type="submit">Start game</Button>
      </StyledForm>
    </StyledWrapper>
  )
}

export default Signup
