import React, { useState, useContext, useCallback } from 'react'
import Button from 'components/Button'
import { Context } from 'components/Context'
import Controls from 'components/Controls'
import Error from 'components/Error'
import Input from 'components/Input'
import Car from 'assets/images/car.png';
import { StyledWrapper, StyledHeader, StyledTitle, StyledTitleBigger, StyledForm, StyledCar } from './styled'

const isNameValid = name => name && name.length > 2

const Signup = () => {
  const { state, actions: { signup } } = useContext(Context)
  const [name, setName] = useState(state.player.name)
  const [error, setError] = useState(null)

  const handleChange = useCallback(e => setName(e.target.value), [setName])

  const onSubmit = useCallback(e => {
    e.preventDefault()
    isNameValid(name)
      ? signup(name)
      : setError('Must have at least three letters')
  }, [signup, name])

  return (
    <StyledWrapper>
      <StyledCar src={Car} />
      <StyledHeader>
        <StyledTitle>FUSCA AZUL</StyledTitle>
        <StyledTitleBigger>CHALLENGE</StyledTitleBigger>
      </StyledHeader>
      <Controls />
      <StyledForm onSubmit={onSubmit}>
        <Input
          label="Your name"
          value={name}
          onChange={handleChange}
          autoFocus
        />
        {error && <Error>{error}</Error>}
        <Button type="submit">Start game</Button>
      </StyledForm>
    </StyledWrapper>
  )
}

export default React.memo(Signup)
