import { createGlobalStyle } from 'styled-components';

import { FONTS } from './fonts';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Segoe';
    src: url(${FONTS.segoe});
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Segoe';
  }

`;
