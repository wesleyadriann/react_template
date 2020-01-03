import { createGlobalStyle } from 'styled-components';

import segoe from './assets/fonts/segoe-ui.otf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${segoe});
  }

  body, html, #root {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
`;

export default GlobalStyle;
