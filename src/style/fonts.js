import { createGlobalStyle } from 'styled-components'
import DsDigit from '../assets/fonts/ds-digit-webfont.woff'
import DsDigit2 from '../assets/fonts/ds-digit-webfont.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'Ds Digit';
    src: local('Ds Digit'), local('Ds Digit'),
    url(${DsDigit}) format('woff2'),
    url(${DsDigit2}) format('woff');
  }
`
