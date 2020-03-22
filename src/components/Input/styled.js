import styled from 'styled-components'
import border from 'utils/border'

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: .8rem;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  font-family: "Press Start 2P";
  ${border}
`;

export const StyledWrapper = styled.div`
  margin: .5rem 0;
  text-align: left;
  padding: 2px;
`;
