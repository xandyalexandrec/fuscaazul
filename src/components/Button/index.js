import styled from 'styled-components'
import { darken } from "polished"
import { SUCCESS_COLOR } from '../../utils/colors'
import border from '../../utils/border'

export default styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 10px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
  font-family: "Press Start 2P";
  text-transform: uppercase;
  background: ${SUCCESS_COLOR};
  ${border}
  &:after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: "";
    box-shadow: inset -4px -4px ${darken(0.12, SUCCESS_COLOR)};
  }
  &:hover {
    background-color: ${darken(0.05, SUCCESS_COLOR)};
  }
  &:active {
    background-color: ${darken(0.1, SUCCESS_COLOR)};
  }
`
