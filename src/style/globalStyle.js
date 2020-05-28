import { createGlobalStyle } from 'styled-components';

import { FONTS } from './fonts';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Segoe';
    src: url(${FONTS.segoe});
  }

  * {
    box-sizing: border-box;
    font-family: 'Segoe';
    margin: 0;
    padding: 0;
  }

`;
