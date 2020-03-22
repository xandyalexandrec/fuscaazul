import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledLabel, StyledInput } from './styled'

const Input = ({ label, ...rest }) => (
  <StyledWrapper>
    {label && <StyledLabel>{label}</StyledLabel>}
    <StyledInput {...rest} />
  </StyledWrapper>
)

Input.propTypes = {
  label: PropTypes.string,
}

Input.defaultProps = {
  label: null,
}

export default memo(Input)
