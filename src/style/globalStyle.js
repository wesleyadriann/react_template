import { createGlobalStyle } from 'styled-components'

import { fonts, fontsNames } from './fonts'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: ${fontsNames.segoe};
    src: url(${fonts.segoe});
  }

  * {
    box-sizing: border-box;
    font-family: ${fontsNames.segoe};
    margin: 0;
    padding: 0;
  }

`
